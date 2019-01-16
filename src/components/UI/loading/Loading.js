import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = (props) => {

    const delay = () => {
        setTimeout(() => {
            props.changeRoute('tracker')
        },2000)
    }

    delay()

    return (
        <React.Fragment>  
            <CircularProgress />
        </React.Fragment>
    )
}

export default Loading