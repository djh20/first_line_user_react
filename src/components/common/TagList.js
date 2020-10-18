import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Tag from './Tag'
const useStyles = makeStyles({
    root:{
        width: '100%',
        height : '100%',
    },
})
export default function TagList(props){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            {
                props.tags.map((tag,index)=> {
                    return(
                        <Tag tag={tag} className={classes.tag}></Tag>
                    )
                })
            }
        </div>
    )
}