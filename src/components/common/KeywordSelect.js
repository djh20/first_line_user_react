import React, {useState, useEffect, useLayoutEffect, useRef, useContext} from 'react'
import KeywordStore from '../../stores/KeywordStore';
import { IconButton, makeStyles } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { VerticalAlignBottom, VerticalAlignCenter } from '@material-ui/icons';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles({
    keyword:{
        color : '#ffeb3b',
        marginBottom:'2%',
        fontSize: 20,
        VerticalAlignCenter
    }
});

export default function KeywordSelect(props){
    
    const classes = useStyles();
    const checked = props.checked
    const keyword = props.keyword

    return(
        <div className={classes.keyword}>
            <Fade in={checked}>
                <label>Keyword: {
                    keyword
                }
                </label>
            </Fade>
        </div>
    )
    

}