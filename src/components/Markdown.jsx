import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Typography,
    Grid,
} from '@material-ui/core/'
import { 
  // goTo,
  goToSlug,
  getRoutebySlug,
} from '../redux/app/actions'
import { getHistory } from '../'

const useStyles = makeStyles((theme) => ({
  help: {
  },
}))

export default function Markdown() {
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const docsifySlice = useSelector(state => state.docsify)
  const {
    appRoute,
  } = appSlice
  const {
    markdown,
  } = docsifySlice
  
  React.useEffect(() => {
    const {
      appRoute,
    } = appSlice
    const { 
      slug,
    } = appRoute
    if ( getHistory().location.pathname !== slug) {
       let route = getRoutebySlug( slug )
       if (route){
         goToSlug( route )
       }
    }
  }, [appSlice])

  const {
    name,
  } = appRoute

  return <div className={clsx( classes.help )}>

            <Grid container>
              <Grid item xs={ 12 } >

                <Typography variant={ `h4` }>
                  { name }
                </Typography>

                <ReactMarkdown remarkPlugins={[[gfm, {singleTilde: false}]]}>
                  { markdown }
                </ReactMarkdown>
                
              </Grid>
            </Grid>
        </div>
}
