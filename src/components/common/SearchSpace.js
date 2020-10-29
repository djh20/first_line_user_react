import React, {useState, useRef, useContext} from 'react';
import { colors, IconButton, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import PostStore from '../../stores/PostStore'
import {observer} from 'mobx-react'
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
    root:{
        display: 'flex'
    },
    input:{
        color:'#ffeb3b'
    },
    searchIcon:{
        color:'#ffeb3b'
    },
    select:{
        color:'#ffeb3b'
    }
}))

const SearchSpace = observer( (props) => {
    // for css
    const classes = useStyle();
    const postStore = useContext(PostStore.context)
    const inputTheme = createMuiTheme({
        palette: {
            primary: {
            main: '#ffeb3b'
            }
        }
    })
    const category = useRef();
    const input = useRef();
    const [open, setOpen] = React.useState(false);
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const searchButtonClick = () => {
        postStore.search(category.current.value, input.current.value,1)
    }
    return (
        <div class="input-holder">
            <Select className={classes.select}
                defaultValue={'내용'}
                onClose={handleClose}
                onOpen={handleOpen}
                inputRef={category}
            >
                <MenuItem value={'내용'}>내용</MenuItem>
                <MenuItem value={'키워드'}>키워드</MenuItem>
                <MenuItem value={'필명'}>필명</MenuItem>
                <MenuItem value={'태그'}>태그</MenuItem>
            </Select>
            <ThemeProvider theme={inputTheme}>
                <Input className={classes.input} inputRef={input} placeholder="Search"  
                onKeyUp={event => event.key === "Enter" ? searchButtonClick() : null}
                inputProps={{ 'aria-label': 'description'}}  />
            </ThemeProvider>
            <IconButton className={classes.searchIcon}> 
            {/* <Router> */}
                <Link to="/search">
                    <SearchIcon className={classes.searchIcon} onClick={searchButtonClick} fontsize="small"></SearchIcon>
                </Link>
            {/* </Router> */}
            </IconButton>
            <div></div>
        </div>
    );
})

export default SearchSpace