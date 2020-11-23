import React from "react";
import { render } from "react-dom";

import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryBar,
  VictoryTheme,
  VictoryScatter
} from "victory";
import { makeStyles } from '@material-ui/core/styles';
import MemberStore from '../../stores/MemberStore'
const useStyles = makeStyles({
  root: {
      width:'100%',
      height:'100%',
      margin:0,
      padding:0
  }
});

function getTickValues(code){
  var days = []
  var test = Date.now()
  for(var i = 0 ; i <= 30 ; i++){
    days.push(new Date(test - 24*3600*1000*i))
  }
  return days
}
export default function App() {
  const classes = useStyles();
  const [data,setData] = React.useState([])
  const [points,setPoints] = React.useState([])
  const [code, setCode] = React.useState(2)
  const memberStore = React.useContext(MemberStore.context)
  React.useEffect(()=>{
      memberStore.getMyTemperature(code).then(result =>{
          var tmp = []
            Object.keys(result).map((key,index)=>{
                 tmp.push({x:result[key].date, y:result[key].temp}) 
           })
           setData(tmp)
      })
  },[])
  return (
    <div className={classes.root}>
        <VictoryChart
        width={"500"}
        height={"300"}
        theme={VictoryTheme.material}
        style={{
          margin : 0,
          padding:0
        }}
        fontSize={1}
        domain={{ y: [0,105], x:[Date.now()- 24*3600*1000*30,Date.now()] }}
        >
        <VictoryAxis               
        style={{
          tickLabels: {fontSize: 4, fill:'#FFFFFF'},
        }}
        tickValues={getTickValues(code)}
        tickFormat={ (t) => { return (t.getMonth()+1)+"/"+t.getDate() }}
        />
        <VictoryAxis dependentAxis
          style={{
            tickLabels: {fontSize: 4, fill:'#FFFFFF'},
          }}
        />
      <VictoryLine
      interpolation="natural"
        style={{
          data: {stroke: "tomato"},
          labels:{fontSize:5, color:'white'}
        }}
        data={
          data
        }
          />
      <VictoryScatter
        style={{ data: { fill: "#c43a31" } }}
        size={3}
        data={
          data
        }
      />
    </VictoryChart>
    </div>
  );
}