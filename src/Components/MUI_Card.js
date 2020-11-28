import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function MUI_Card(props) {
    
    const useStyles = makeStyles({
        root: {
          minWidth: 250,
          textAlign: 'center'
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 6,
        },
      });
    
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.pos} color="textSecondary">
                        {props.label}
                    </Typography>
                    
                    <Typography className={classes.pos} variant="h5" component="h2" >
                        {props.today + " today"} 
                    </Typography>
                    
                    <Typography className={classes.pos} color="textSecondary">
                        {props.total + " total"}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default MUI_Card
