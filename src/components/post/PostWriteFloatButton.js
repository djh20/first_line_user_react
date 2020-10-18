import React from 'react'
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        position : 'fixed',
        height:"90%",
        width:"100%",
        pointerEvents:'none',
      },
      cards:{
        width:'100%',
        margin : 0,
        padding : 0,
        overflowY: 'hidden'
      },
      editIconBox:{
        marginRight: "5%",
        marginBottom: "3%",
        float: 'right',
        pointerEvents:'auto',
      },
      editIconButton:{
          background:'yellow',
      },
  });
export default function PostWriteFloatButtin(props){
    const classes = useStyles()
    return(
        <Grid container edge="end" justify="flex-end" alignItems="flex-end" className={classes.root}>
        <Link href="/post/write" className={classes.editIconBox}>
            <Fab className={classes.editIconButton}>
            <EditIcon/>
            </Fab>
        </Link>
        </Grid>
    )
}