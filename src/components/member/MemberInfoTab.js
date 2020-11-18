import React, {useState, useEffect, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MemberStore from '../../stores/MemberStore'
import Typography from '@material-ui/core/Typography';
import MemberPwDialog from './MemberPwDialog';
const useStyles = makeStyles({
    root : {
        width : '100%',
    },
    content : {
        color : 'white'
    },
    floatingLabelFocusStyle : {
        color: "#eabc28"
    },
    typography : {
        color: '#22c4d6'
    },
    container : {
        marginTop : '1.5%'
    }
})
export default function MemberInfoTab(props) {
    const classes = useStyles();
    const memberStore = useContext(MemberStore.context)
    const id = props.id
    console.log(id)
    return (
        <div className={classes.root}>
            <Grid container spacing={5} direction="column">
            <div className={classes.container}  >
                <Typography className={classes.typography}>아이디</Typography>
                <TextField
                    className={classes.textField}
                    margin="dense"
                    id="text"
                    defaultValue={props.id}
                    type="text"
                    multiline
                    fullWidth
                    hiddenLabel
                    InputLabelProps={{
                        className: classes.floatingLabelFocusStyle,
                    }}
                    InputProps={{
                        className: classes.content,
                        readOnly: true,
                    }}
                />
            </div>
            <div className={classes.container}>
                <Typography className={classes.typography}>이름</Typography>
                <TextField
                    className={classes.textField}
                    margin="dense"
                    id="text"
                    defaultValue={props.name}
                    type="text"
                    multiline
                    fullWidth
                    hiddenLabel
                    InputLabelProps={{
                        className: classes.floatingLabelFocusStyle,
                    }}
                    InputProps={{
                        className: classes.content,
                        readOnly: true,
                    }}
                />
            </div>
            <div className={classes.container}>
                <Typography className={classes.typography}>필명</Typography>
                <TextField
                    className={classes.textField}
                    margin="dense"
                    id="text"
                    defaultValue={props.nickname}
                    type="text"
                    multiline
                    fullWidth
                    hiddenLabel
                    InputLabelProps={{
                        className: classes.floatingLabelFocusStyle,
                    }}
                    
                    InputProps={{
                        className: classes.content,
                        readOnly: true,
                    }}
                />
            </div>
            <div className={classes.container}>
                <Typography className={classes.typography}>나이</Typography>
                <TextField
                    className={classes.textField}
                    margin="dense"
                    id="text"
                    defaultValue={props.age}
                    type="text"
                    multiline
                    fullWidth
                    hiddenLabel
                    InputLabelProps={{
                        className: classes.floatingLabelFocusStyle,
                    }}
                    
                    InputProps={{
                        className: classes.content,
                        readOnly: true,
                    }}
                />
            </div>
            <div className={classes.container}>
                <Typography className={classes.typography}>성별</Typography>
                <TextField
                    className={classes.textField}
                    margin="dense"
                    id="text"
                    defaultValue={props.gender}
                    type="text"
                    multiline
                    fullWidth
                    hiddenLabel
                    InputLabelProps={{
                        className: classes.floatingLabelFocusStyle,
                    }}
                    
                    InputProps={{
                        className: classes.content,
                        readOnly: true,
                    }}
                />
            </div>
            <div className={classes.container}>
                <Typography className={classes.typography}>전화번호</Typography>
                <TextField
                    className={classes.textField}
                    margin="dense"
                    id="text"
                    defaultValue={props.phonenumber}
                    type="text"
                    multiline
                    fullWidth
                    hiddenLabel
                    InputLabelProps={{
                        className: classes.floatingLabelFocusStyle,
                    }}
                    
                    InputProps={{
                        className: classes.content,
                        readOnly: true,
                    }}
                />
            </div>
            <div className={classes.container}>
                <Typography className={classes.typography}>이메일</Typography>
                <TextField
                    className={classes.textField}
                    margin="dense"
                    id="text"
                    defaultValue={props.email}
                    type="text"
                    multiline
                    fullWidth
                    hiddenLabel
                    InputLabelProps={{
                        className: classes.floatingLabelFocusStyle,
                    }}
                    
                    InputProps={{
                        className: classes.content,
                        readOnly: true,
                    }}
                /> 
            </div>
            </Grid>
        </div>
    );
}