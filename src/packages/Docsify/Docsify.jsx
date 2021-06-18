import React from 'react'
import clsx from 'clsx'
import { 
    useSelector,
} from 'react-redux'
import {
    makeStyles,
    Grid,
    CardHeader,
    Avatar,
    Divider,
} from '@material-ui/core/'
import {
    loadConfig,
} from './redux/actions'
import {
    TableOfContents,
} from './components'

const useStyles = makeStyles( theme => ({
    docsify:{
        // border: '1px solid ' + theme.palette.secondary.main,
    },
    pad:{
        margin: theme.spacing(2),
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
    const docsifySlice = useSelector(state => state.docsify)    
    const {
        config,
    } = docsifySlice

    // console.log( 'config', config )

    React.useEffect(() => {    
        const {
            configLoading,
            configLoaded,
        } = docsifySlice
        if (!configLoading && !configLoaded) loadConfig()
    }, [ docsifySlice ]) 

    if ( !config ) return null

    const {
        title,
        description,
        avatar,
    } = config

    return <div className={ clsx( classes.docsify ) }>
                <CardHeader
                    avatar={ <Avatar src={ avatar } /> }
                    title={ title }
                    subheader={ description } 
                />
                <Grid container>

                    <Grid item>
                        <TableOfContents />
                    </Grid>

                    <Grid item>
                        <Divider 
                            orientation={ `vertical` } 
                            className={ clsx( classes.pad ) }
                        />
                    </Grid>
                    
                    
                    
                </Grid>
                
           </div>
}




/*

<Grid item>
                        <pre >
                           { JSON.stringify( chapters, null, 2 ) }
                       </pre>
                    </Grid>

*/