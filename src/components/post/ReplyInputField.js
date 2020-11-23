import Button from "@material-ui/core/Button";
import React, {useRef, useContext} from 'react';
import Input from "@material-ui/core/Input";
import { makeStyles } from '@material-ui/core/styles';
import ReplyStore from "../../stores/ReplyStore";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    input : {
        width : '70%',
        color : 'white',
        marginBottom : '4%',
        marginRight : '5%'
    },
    button : {
        marginLeft : '1%',
        backgroundColor : '#eabc28'
    }

})



export default function ReplyInput(props){
    const classes = useStyles();
    const text = useRef("")
    const replyStore = useContext(ReplyStore.context)
    const histroy = useHistory()
    const postReply = (e) => {
        e.preventDefault();
        replyStore.postReply(props.post_id,text.current.value).then(result => {
            if(result == true){
                text.current.value = ""
                histroy.push("/post/detail/"+props.post_id, { update: true })
            }else{
                alert("댓글 등록에 실패했습니다")
            }

        })
    }
    return(
        <div>
                <Input id="text" className={classes.input} 
                inputRef = {text}
                placeholder="댓글을 남겨보세요!" />
                <Button className={classes.button} onClick={postReply}>발행</Button>
        </div>
    )
    
}