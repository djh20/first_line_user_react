import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
    root: {
        width:'100%',
      },
      gridContainer:{
          marginTop : "2vh",
      },
      editor:{
          color : 'black',
          background : 'white',
          width : '50%',
          height : '30vh'
      }
  });
export default function PostEditor(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid Container spacing={0} className={classes.gridContainer}>
                <Grid item align="center">
                        <TextField
                        id="standard-textarea"
                        placeholder="첫 줄을 시작해 보세요"
                        multiline
                        className={classes.editor}
                        />
                </Grid>
            </Grid>
        </div>
    )
}