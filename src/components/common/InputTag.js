import React, {useState, useRef, useContext} from 'react';
import { TextField, IconButton, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import { FormatColorText } from '@material-ui/icons';
import Input from '@material-ui/core/Input';

const useStyle = makeStyles((theme) => ({
    tagsInput: {
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        minHeight: '48px',
        width: '480px',
        padding: '0 8px',
    },tags: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0',
        margin: '8px 0 0 0'
    },tag: {
        width: 'auto',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000000',
        padding: '0 8px',
        fontSize: '14px',
        listStyle: 'none',
        borderRadius: '6px',
        margin: '0 8px 8px 0',
        background: '#ffeb3b',
    },tagCloseIcon: {
        display: 'block',
        width: '16px',
        height: '16px',
        lineHeight: '16px',
        textAlign: 'center',
        fontSize: '14px',
        marginLeft: '8px',
        color: '#0052cc',
        borderRadius: '50%',
        background: '#fff',
        cursor: 'pointer'
    },inputDiv: {
        flex: '1',
        border: 'none',
        width: '15em',
        borderRadius: "0.3em",
        padding: '4px 0 0 0',
        background: 'none'
    },input: {
        background: 'none',
        border: 'none',
        fontSize: '1em',
        textAlign: 'center',
        color: '#ffffff'
    }, iconButton: {
        color: "#ffeb3b"
    }
}))

export default function InputTag(props){
    const inputTheme = createMuiTheme({
        palette: {
            primary: {
                main: '#ffeb3b'
            }
        }
    })
    const classes = useStyle();
    const tags = props.tagsState
    const setTags = props.setTagsState
    const text = useRef("");
    const removeTags = indexToRemove => {
        setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };
    const addTags = () => {
        if (text.current.value !== "") {
            setTags([...tags, text.current.value]);
            text.current.value = "";
        }
    };
    
    return (
        <div className={classes.tagsInput}>
            <ul className={classes.tags}>
                {
                    tags.map((tag, index) => (
                        <li key={index} className={classes.tag}>
                            {tag}
                            <IconButton>
                                <ClearIcon 
                                    onClick={() => removeTags(index)}
                                    fontSize="small"/>
                            </IconButton>
                        </li>
                    )
                )
                }
            </ul>
            <div className={classes.inputDiv} >
                <ThemeProvider theme={inputTheme}>
                <Input
                    className={classes.input}
                    type="text"
                    inputRef={text}
                    onKeyUp={event => event.key === "Enter" ? addTags() : null}
                    placeholder="Press enter to add tags"
                />
                </ThemeProvider>
                <IconButton>
                    <AddIcon
                        className={classes.iconButton}
                        onClick={() => addTags()}
                        fontSize="small"/>
                </IconButton>
            </div>
        </div>
    );
}