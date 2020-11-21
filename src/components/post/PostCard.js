import React, {useState} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TagList from '../common/TagList'
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';
import Slider from '@material-ui/core/Slider';
const useStyles = makeStyles({
  root:{
    "@media (min-device-width: 481px)": { // PC
      marginBottom: '2%',
    },
    "@media (min-device-width: 320px) and (max-device-width: 480px)": { // Mobile
      marginBottom: '4%',
    },
    width :'80%'
  },
  title: {
    fontWeight : 'bold',
    "@media (min-device-width: 481px)": { // PC
      fontSize: '2rem',
    },
    "@media (min-device-width: 320px) and (max-device-width: 480px)": { // Mobile
      fontSize: '1.5rem',
    },
    display : 'inline'
  },
  pos: {
    marginBottom: 12,
  },
  temp :{
    float: 'right',
    "@media (min-device-width: 481px)": { // PC
      fontSize: '1.3rem',
    },
    "@media (min-device-width: 320px) and (max-device-width: 480px)": { // Mobile
      fontSize: '1.0rem',
    },
    fontWeight : 'bold',
    marginBottom: 0
  },
  tempWrapper:{
    width:'15%',
    float: 'right',
  },
  tempBar:{
    display:'inline-block',
    width:'100%',
    marginTop: 0
  },
  text:{
    fontSize: "1rem"
  },
  keyword:{
    display :'inline',
    "@media (min-device-width: 481px)": { // PC
      fontSize: '1.3rem',
    },
    "@media (min-device-width: 320px) and (max-device-width: 480px)": { // Mobile
      fontSize: '1.0rem',
    },
    marginLeft :'0.8%',
    color: '#eabc28'
  },
  tag:{
    fontSize: "1rem",
    marginTop : '0.5%'
  },
  topLine:{
    alignItems:"center"
  },
  bottomLine:{
    marginTop : '0.5%',
  },
  midLine:{
    marginTop : '0.5%',
  },
  like:{
    display :'inline',
    marginRight: '0.5%'
  },
  reply:{
    display :'inline',
    marginRight: '0.5%'
  },
  writer:{
    display :'inline',
    marginRight: '0.5%'
  },
  writing_date:{
    display :'inline',
    marginRight: '0.5%'
  },
});



export default function PostCard(props){
    const cardWidth = props.cardWidth
    const classes = useStyles();
    const temp = props.post.temperature
    var tempColor
    if(temp < 30)
      tempColor = "#3f51b5"
    else if(30 <= temp && temp <= 60)
      tempColor = "#f44336"
    else
      tempColor = "#ba000d"

    const PrettoSlider = withStyles({
      root: {
        color: tempColor,
        height: "5%",
      },
      thumb: {
        height: 0,
        width: 0,
        backgroundColor: '#fff',
        marginTop: 0,
        marginLeft: 0,
        '&:focus, &:hover, &$active': {
          boxShadow: 'inherit',
        },
      },
      active: {},
      valueLabel: {
        left: 'calc(-50% + 4px)',
      },
      track: {
        height: "50%",
        borderRadius: "5%",
      },
      rail: {
        height: "50%",
        borderRadius: "5%",
      },
    })(Slider);


    return(
      <div className={classes.root}> 
       <Link 
       to={
        {pathname: "/post/detail/"+props.post.post_id}
        }
      >
            <Card align="left">
            <CardContent>
              <div container className={classes.topLine}>
                <Typography className={classes.title} noWrap gutterBottom>
                  {props.post.title}
                </Typography>
                  {
                    props.post.keyword == "" ? "" : (
                      <Typography className={classes.keyword} color="textSecondary" gutterBottom>
                        {props.post.keyword}
                    </Typography>
                    )
                  }
                  <div className={classes.tempWrapper}>
                    <Typography className={classes.temp} color="textSecondary" gutterBottom>
                      {temp} ℃
                    </Typography>
                    <PrettoSlider
                      className={classes.tempBar}
                      value={temp}
                      />
                </div>
              </div>
              <Typography className={classes.text} noWrap>
              {parse(props.post.text)}
              </Typography> 
              <Typography className={classes.tag} noWrap>
              {
                props.post.tag == "" ? "" : <TagList tags = {props.post.tag}/>
              }
              </Typography> 
              <div className={classes.midLine}>
              <Typography className={classes.like} noWrap>
                공감 {props.post.num_good}
              </Typography>
              <Typography className={classes.reply} noWrap>
                댓글 {props.post.num_reply}
              </Typography>
              </div>
              <div className={classes.bottomLine}>

              <Typography className={classes.writing_date} noWrap>
              {props.post.writing_date}
              </Typography>
              <Typography className={classes.writer} noWrap>
              by {props.post.writer}
              </Typography>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    )
}

