import React from 'react';
import SnackbarStore from '../../stores/SnackbarStore'
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import {observer} from 'mobx-react'

const CommonSnackbar = observer( (props) => {
    const snackbarStore = React.useContext(SnackbarStore.context)


    function close(){
      snackbarStore.open = false
    }
    return(
      <Snackbar open={snackbarStore.open} autoHideDuration={3000} onClose={close}>
      {
      snackbarStore.isPositive == true ? (
      <Alert onClose={snackbarStore.openSnackbar} severity="success">
        {snackbarStore.message}
      </Alert>):(
        <Alert onClose={snackbarStore.closeSnackbar} severity="error">
        {snackbarStore.message}
      </Alert>
      )
      }
      </Snackbar>
    )
});

export default CommonSnackbar





