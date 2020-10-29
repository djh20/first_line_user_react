import React, {useState, useEffect, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ReplyCard from './ReplyCard'
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    root:{
        width:'90%'
    }
})

export default function ReplyList(props){
    const classes = useStyles()
    useEffect(()=>{
        console.log(props.replies)
    },[])
    return(
        <div className={classes.root}>
        <Grid Container spacing={0}>
            {
            props.replies.map((reply,index) =>{
                return(
                <Grid item className={classes.card} align="center" >
                    <ReplyCard  reply={reply}></ReplyCard>
                </Grid>
                )
            })
        }
        </Grid>

        </div>
    )
}