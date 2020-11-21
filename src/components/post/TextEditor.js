import React, {useState, useContext} from "react";
import { Editor, EditorState, RichUtils, AtomicBlockUtils, ContentState, convertFromHTML } from "draft-js";
import {convertToRaw} from 'draft-js';
import { IconButton, makeStyles } from '@material-ui/core'
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import InputTag from '../../components/common/InputTag';
import TextField from '@material-ui/core/TextField';
import KeywordSelect from '../common/KeywordSelect';
import Fade from '@material-ui/core/Fade';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {stateToHTML} from 'draft-js-export-html';
import Grid from '@material-ui/core/Grid';


export const useStyles = makeStyles((theme) => ({
  editorContainer : {
    padding : '1em',
    margin: '1em'
  },
  editors : {
    textAlign: 'center',
    border: 'none',
    padding: '2em',
    borderRadius: '0 0 0.3em 0.3em',
    marginBottom: '1em',
    fontFamily: "Open Sans",
    fontSize: '100%',
    background: 'linear-gradient(to bottom, #fdfbfb 0%, #f6f7fb 100%)'
  },
  ActiveButton : {
    border: '#000000'
  },
  select : {
    padding: '0.5em',
    border: 'none',
    margin: '0.1em',
    borderRadius: '6px',
    fontFamily: "Open Sans",
    fontSize: '13px',
    height: '2.25em'
  },
  styleButtonBold: {
	  fontWeight: 'bold'
  },
  styleButtonItalic: {
	  fontStyle: 'italic',
	  fontFamily: 'serif', 
  },
  styleButtonUnderline:{
    textDecoration: 'underline'
  },
  toolbar: {
    textAlign: 'center',
    margin: '0.5em',
    padding: '0.5em'
  },
  styleButton: {
    padding: '0.5em',
    border: 'none',
    margin: '0.35em',
    width: '2.75em',
    fontFamily: "Open Sans",
    fontSize: '13px',
    height: '2.25em',
    borderRadius: '4px',
    background: 'linear-gradient(to bottom, #fdfbfb 0%, #ebedee 100%)'
  },
  iconButton: {
    color:'#ffeb3b',
  },title:{
    color : 'black',
    background : 'white',
    width : '100%',
    height : '30%',
    borderRadius: '0.3em 0.3em 0 0',
    textAlign: 'center',
  } 
}))


export default function PageContainer(props){
  const classes = useStyles();
  const titleRef = props.titleRef
  const setText = props.textState
  const tags = props.tagsState
  const setTags = props.setTagsState
  const checked = props.checked
  const setChecked = props.setChecked
  const keyword = props.keyword
  const setKeyword = props.setKeyword
  const text = props.text
  const contentState = ContentState
  const [editorState, setState] = useState(EditorState.createWithContent(
    ContentState.createFromBlockArray(
      convertFromHTML(text)
    )
  ))
	const [selection, setSelection] = useState(editorState.getSelection())
	const [blockType, setBlockType] = useState(editorState
		.getCurrentContent()
		.getBlockForKey(selection.getStartKey())
    .getType());



  const toggleBlockType = blockType => {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  const onChange = editorState => {
    setState(editorState);
    setText(stateToHTML(editorState.getCurrentContent()))
  };

  const handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(
      editorState,
      command
    );
    if (newState) {
      onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  const onUnderlineClick = () => {
    onChange(
      RichUtils.toggleInlineStyle(editorState, "UNDERLINE")
    );
  };

  const onBoldClick = event => {
    onChange(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  const onItalicClick = () => {
    onChange(
      RichUtils.toggleInlineStyle(editorState, "ITALIC")
    );
  };
  const onUndoClick = () => {
    onChange(EditorState.undo(editorState))
  };

  const onRedoClick = () => {
    onChange(EditorState.redo(editorState))
  };

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="editorContainer">
      <div>
        <FormControlLabel className={classes.iconButton}
          control={<Switch color={'#ffeb3b'} className={classes.iconButton} checked={checked} onChange={handleChange} />}
        />
        <KeywordSelect 
        checked={checked}
        keyword={keyword}
        setKeyword={setKeyword}
        />
      </div>
      {/* title */}
      <div>
        <TextField 
          id="standard-textarea"
          placeholder="제목을 입력해주세요"
          multiline
          className={classes.title}
          inputProps={{
            style: { textAlign: "center" }
          }}
          inputRef={titleRef}
        />
      </div>
      {/* editor */}
      <div className={classes.editors}>
        <Editor
          editorState={editorState}
          contentState={contentState}
          handleKeyCommand={handleKeyCommand}
          onChange={onChange}
        />
      </div>
      <Grid container justify = "center">
         {/* toolbar */}
      <div className={classes.toolbar}> 
        <IconButton><FormatUnderlinedIcon className={classes.iconButton} fontSize="small" onClick={onUnderlineClick} /></IconButton>
        <IconButton><FormatBoldIcon className={classes.iconButton} fontSize="small" onClick={onBoldClick}/></IconButton>
        <IconButton><FormatItalicIcon className={classes.iconButton} fontSize="small" onClick={onItalicClick}/></IconButton>
        <IconButton><UndoIcon className={classes.iconButton} fontSize="small" onClick = {onUndoClick}></UndoIcon></IconButton>
        <IconButton><RedoIcon className={classes.iconButton} fontSize="small" onClick = {onRedoClick}></RedoIcon></IconButton>
      </div>
      {/* tag */}
      <div>
        <InputTag setTagsState={setTags}
                    tagsState={tags}/>
      </div>
      </Grid>
     
    </div>
  );
}