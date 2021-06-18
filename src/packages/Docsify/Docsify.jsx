import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    
} from '@material-ui/core/'
import {
    Layout,
} from './'

const useStyles = makeStyles( theme => ({
    docsify:{
        border: '1px solid ' + theme.palette.secondary.main,
    },
    htags: {
        fontWeight: 'lighter',
    },
    centerize: {
      minHeight: 'calc( 100vh - 75px )',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
    }
}))

export default function Docsify( ) {

    const classes = useStyles()

    return <div className={ clsx( classes.docsify ) }>
                <Layout />
           </div>
}
