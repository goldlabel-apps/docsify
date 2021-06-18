import React from 'react'
import clsx from 'clsx'
import { 
    useSelector,
} from 'react-redux'
import {
    makeStyles,
    Grid,
} from '@material-ui/core/'
import {
    loadConfig,
    loadMarkdown,
} from './redux/actions'
import {
    TableOfContents,
    Markdown,
} from './components'

const useStyles = makeStyles( theme => ({
    docsify:{
    },
    pad:{
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
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

    React.useEffect(() => {    
        
        const {
            configLoading,
            configLoaded,
            markdownLoading,
            markdownLoaded,
        } = docsifySlice
        
        if (!configLoading && !configLoaded) loadConfig()
        if (!markdownLoading && !markdownLoaded) loadMarkdown(`/md/introduction/start.md`)

    }, [ docsifySlice ]) 

    if ( !config ) return null

    return <div className={ clsx( classes.docsify ) }>
                <Grid container>
                    <Grid item xs={ 3 }>
                        <TableOfContents />
                    </Grid>
                    <Grid item xs={ 9 }>
                        <Markdown />
                    </Grid>            
                </Grid>
           </div>
}
