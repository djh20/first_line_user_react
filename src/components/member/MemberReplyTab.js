import React, {useState, useEffect, useContext} from 'react'
import ReplyStore from '../../stores/ReplyStore'
import { makeStyles } from '@material-ui/core'
import {observer} from 'mobx-react'
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

var elem = (document.compatMode === "CSS1Compat") ? 
    document.documentElement :
    document.body;

var height = elem.clientHeight;
var width = elem.clientWidth;


function getWidth(tableRate,rate){
  return width*tableRate*rate
}

const useStyles = makeStyles( (theme) => ({
    root:{
        width:"100%",
        height:"100vh",
      },
      table: {
        width: '100%',
        height: '70%',
        background: 'white',
      },
      colHeader:{
          width : "6%",
          textAlign:'center'
      },
      cell:{
          width : "6%",
          textAlign:'center'
      },
      search: {
          textAlign: 'center',
          position: 'relative',
          borderRadius: theme.shape.borderRadius,
          marginLeft : 'auto',
          marginRight : 'auto',
        },
      buttons: {
          marginTop : '2%',
          float : 'right',
      }
}))

const columns = 
[
    { field: 'text', type : 'string',headerName: '내용' ,  align:'left', width: getWidth(0.95,2/7),headerAlign:'left' ,resizable: true},
    { field: 'writing_date',type : 'dateTime', headerName: '작성일' , align:'left',width: getWidth(0.95,2/7), headerAlign:'left' ,resizable: true},
    { 
        field: 'detail',
        headerName : '상세',
        renderCell:(params) => (
            <Link   to={{
                pathname: "/post/detail/"+params.value['post_id'],
            }}
            style={{ textDecoration: 'none' }}
            >
                <Button >이동</Button>
            </Link>
        )
    }    
];

const MemberReplyTab = observer( (props) =>{
    const classes = useStyles()
    const replyStore = useContext(ReplyStore.context)
    const [selected,setSelection] = useState([]);
    useEffect(()=>{
        console.log("effect")
        replyStore.readMyReplies()
        console.log(replyStore.replies)
    },[])

    return(
        <div className={classes.root}>
            <div className={classes.table}>     
            <DataGrid rows={replyStore.replies} columns={columns} pageSize={10} checkboxSelection   CanUserSortColumns="True"
                onSelectionChange={(data) => {
                    setSelection(data)
                }}
            /> 
            </div>
        </div>
    )
}
)

export default MemberReplyTab