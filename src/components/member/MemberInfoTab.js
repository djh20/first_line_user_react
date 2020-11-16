import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
    root : {
        width : '100%',
    },
    content : {
        color : 'white'
    },
    floatingLabelFocusStyle : {
        color: "#eabc28"
    }
})
export default function MemberInfoTab(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid>
            <TextField
                className={classes.textField}
                margin="dense"
                id="text"
                defaultValue={props.id}
                label="아이디"
                type="text"
                multiline
                fullWidth
                InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                }}
                InputProps={{
                    className: classes.content,
                    readOnly: true,
                }}
            />
            <TextField
                className={classes.textField}
                margin="dense"
                id="text"
                defaultValue={props.name}
                label="이름"
                type="text"
                multiline
                fullWidth
                InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                }}
                InputProps={{
                    className: classes.content,
                    readOnly: true,
                }}
            />
            <TextField
                className={classes.textField}
                margin="dense"
                id="text"
                defaultValue={props.nickname}
                label="필명"
                type="text"
                multiline
                fullWidth
                InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                }}
                autoFocus
                InputProps={{
                    className: classes.content,
                    readOnly: true,
                }}
            />
            <TextField
                className={classes.textField}
                margin="dense"
                id="text"
                defaultValue={props.age}
                label="나이"
                type="text"
                multiline
                fullWidth
                InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                }}
                autoFocus
                InputProps={{
                    className: classes.content,
                    readOnly: true,
                }}
            />
            <TextField
                className={classes.textField}
                margin="dense"
                id="text"
                defaultValue={props.gender}
                label="성별"
                type="text"
                multiline
                fullWidth
                InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                }}
                autoFocus
                InputProps={{
                    className: classes.content,
                    readOnly: true,
                }}
            />
            <TextField
                className={classes.textField}
                margin="dense"
                id="text"
                defaultValue={props.phonenumber}
                label="전화번호"
                type="text"
                multiline
                fullWidth
                InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                }}
                autoFocus
                InputProps={{
                    className: classes.content,
                    readOnly: true,
                }}
            />
            <TextField
                className={classes.textField}
                margin="dense"
                id="text"
                defaultValue={props.email}
                label="이메일"
                type="text"
                multiline
                fullWidth
                InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                }}
                autoFocus
                InputProps={{
                    className: classes.content,
                    readOnly: true,
                }}
            /> 
            </Grid>
        </div>
    );
}