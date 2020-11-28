/* eslint-disable react/jsx-pascal-case */
import './App.css';
import React, { useEffect, useState } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import MUI_Card from './Components/MUI_Card'
import {Bar} from 'react-chartjs-2';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';


function App() {
  let api_url = "https://disease.sh/v3/covid-19/countries";
  const [countryData, setCountrydata] = useState({ })
  const [countries, setCountries] = useState([])
  const [currentCountry, setCurrentcountry] = useState("worldwide")
  const [activeCases, setActivecases] = useState([ ])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  useEffect(() => {
      const getData = async () => {
        await fetch(api_url)
        .then(res => res.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2 
          }))
          setCountries(countries)

          const activeCases = data.map((country) => ({
            name: country.country,
            active: country.active
          }))
          setActivecases(activeCases)

        })

        await fetch("https://disease.sh/v3/covid-19/all")
        .then(res => res.json())
        .then(data => {
          setCountrydata(data)
        })
      }
      getData();
    }, [])

  
  const onCountryChange = async (e) => {
    setCurrentcountry(e.target.value)

    if(e.target.value === "worldwide"){
      await fetch("https://disease.sh/v3/covid-19/all")
        .then(res => res.json())
        .then(data => {
          setCountrydata(data)
        })
    }
    else{
      await getCountryData(e.target.value)
    }
  }


  const getCountryData = async (countryCode) => {
    await fetch("https://disease.sh/v3/covid-19/countries/" + countryCode)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setCountrydata(data)
        })
  }

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    table: {
      minWidth: 500,
    },
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 300,
      
    },
  }));
  
  const classes = useStyles();

  return (
    <div className="App">

      <div className="title-and-cards">
        <div className="title">
          COVID-19 TRACKER
        </div>

        <div className="country-select">
          <InputLabel>Country</InputLabel>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              value={currentCountry}
              onChange={onCountryChange}
              label = "Country"
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="cards">

        <div className="total-cases card">
                <MUI_Card
                  label="Covid Cases" 
                  today = {countryData.todayCases}
                  total = {countryData.cases}
                />
        </div>
                
        <div className="total-recovered card">
                <MUI_Card
                  label="Recovered" 
                  today = {countryData.todayRecovered}
                  total = {countryData.recovered}
                />
        </div>

        <div className="total-deaths card">
                <MUI_Card
                label="Deaths"
                today = {countryData.todayDeaths}
                total = {countryData.deaths}
                />
        </div>

      </div>

      <div className="charts-and-table">
      
      <div className="charts">
      <h2>Covid data chart</h2>
      <Bar
        data={  
          {
            labels: ['Cases', 'Cases today', 'Recovered', 'Recovered today', 'Deaths', 'Deaths today'],
            datasets: [
              {
                label: 'Covid tracking',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [countryData.cases, countryData.todayCases, countryData.recovered, countryData.todayRecovered,
                  countryData.deaths, countryData.todayDeaths]
              }
            ]
          }
          }
        width={500}
        height={200}
        options={{
          maintainAspectRatio: false
        }}
      />
      </div>
      
      <div className="table">
      <h2>Active cases by country</h2>

      <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="center">Active cases</TableCell>
          </TableRow>
        </TableHead>    

        <TableBody>
        {
          activeCases.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="center">{row.active}</TableCell>
          </TableRow>
          ))
        }
        </TableBody>

        </Table>
      </TableContainer>
      
        </Paper>
      </div>
      </div>
    </div>
  );
}

export default App;
