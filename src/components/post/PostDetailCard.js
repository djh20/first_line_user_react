  
import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TagList from '../common/TagList'
import { Typography } from '@material-ui/core';
import ReactDOM from 'react-dom';
import CardContent from '@material-ui/core/CardContent';
import parse from 'html-react-parser';
import Grid from '@material-ui/core/Grid';
import {ConvertFromRaw} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';


const useStyles = makeStyles({
    root: {
        width : '100%',
    },
    card: {
        width : '80%',
        backgroundColor : '#eae7de',
    },
    title: {
        fontSize : '2.7rem',
        fontWeight : 'bold',
        textAlign : 'center'
    },
    writer : {
      marginTop : '3%',
        fontSize : '1rem',
        textAlign : 'right',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    text : {
        marginTop : '3%'
    },
    hr : {
        width : '50%'
    },
    tag : {
      marginTop : '3%',
        fontSize: '1.3rem',
        margintop : '2%',
    }
})
export default function PostDetailCard(props){
    const classes = useStyles();
    const text = parse(props.post.text)
    return(
        <div className={classes.root}>
                <Card className={classes.card}>
                    <CardContent className={classes.Cardcontent}>
                        <div className={classes.topLine}>
                            <Typography className={classes.title}>
                                {props.post.title}
                            </Typography>
                            <hr className={classes.hr}></hr>

                        </div>
                            <Typography className={classes.text}>
                                {text}
                            </Typography>  
                        <div>
                          {
                              props.post.tag == "" ? "" : (
                                <Typography className={classes.tag} noWrap>
                                  <TagList tags = {props.post.tag}/>
                                </Typography>
                              )
                          }
                        </div>  
                        <Typography className={classes.writer}>
                                by {props.post.writer}
                        </Typography>
                    </CardContent>
                </Card>
        </div>
    )
}