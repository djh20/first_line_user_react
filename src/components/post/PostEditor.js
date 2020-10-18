import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { AnalyticsDashboard } from 'react-analytics-charts';
import { SessionsByDateChart, SessionsGeoChart, SessionsBySourceChart, SessionsByHourChart ,PageViewsPerPathChart} from 'react-analytics-charts';
const useStyles = makeStyles({
    root: {
        background : '#e6e5d3',
        width:'95%',
        padding: '5% 5% 5% 5%',
      },
      gridContainer:{
          marginTop : "2%",
      },
      editor:{
          color : 'black',
          background : 'white',
          width : '50%',
          height : '30%'
      },
      chart:{
          color:'white',
      }
  });
export default function PostEditor(){
    const classes = useStyles();

    return (
      <div className ={classes.root}>
<AnalyticsDashboard
  authOptions={{ clientId : "999872818887-f7668umpbj2gp2v92iqvnc5q9qijvqfb.apps.googleusercontent.com"}}
  renderCharts={(gapi, viewId) => {
    const chartStyles = {
      margin: '15px',
      maxWidth: 400,
    }
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
        <SessionsByDateChart
          gapi={gapi}
          viewId={viewId}
          style={chartStyles}
          showPageViews
          showUsers
          className={classes.chart}
        />
        <SessionsGeoChart
          gapi={gapi}
          viewId={viewId}
          style={chartStyles}
          showPageViews
          options={{ width: 400 }}
          className={classes.chart}
        />
        <SessionsBySourceChart
          gapi={gapi}
          viewId={viewId}
          style={chartStyles}
          className={classes.chart}
        />
        <SessionsByHourChart
          gapi={gapi}
          viewId={viewId}
          style={chartStyles}
          className={classes.chart}
        />
        <PageViewsPerPathChart
          gapi={gapi}
          viewId={viewId}
          style={{ margin: '15px' }}
          className={classes.chart}
        />
      </div>
    )
  }}
/>
      </div>
    );
    
}