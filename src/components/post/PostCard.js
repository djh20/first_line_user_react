import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TagList from '../common/TagList'
import Link from '@material-ui/core/Link';
import parse from 'html-react-parser';
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
    display : 'inline',
    "@media (min-device-width: 481px)": { // PC
      fontSize: '1.3rem',
    },
    "@media (min-device-width: 320px) and (max-device-width: 480px)": { // Mobile
      fontSize: '1.0rem',
    },
    float: 'right',
    fontWeight : 'bold',
    marginRight: '2%'
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
    
    return(
      <div className={classes.root}> 
       <Link href={"/post/detail/"+props.post.post_id} underline='None'>
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
                <Typography className={classes.temp} color="textSecondary" gutterBottom>
                  {props.post.temperature} ℃
                </Typography>
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
                공감 {props.post.like}
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

