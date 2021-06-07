import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    LinearProgress,
} from '@material-ui/core/'
import {
  goToSlug,
  getRoutebySlug,
} from '../redux/app/actions'

import { 
  loadMarkdown,
} from '../redux/docsify/actions'


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
    markdown,
    markdownLoading,
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
       if (route) goToSlug( route )
    }
    const {
      markdownLoading,
      markdownLoaded,
    } = docsifySlice
    if ( !markdownLoading && !markdownLoaded ) loadMarkdown()
  }, [appSlice, docsifySlice])

  return <div className={clsx( classes.help )}>
          
          { markdownLoading ? <LinearProgress color={ `secondary` } /> : null}
          
          <ReactMarkdown remarkPlugins={[[gfm, {singleTilde: false}]]}>
            { markdown }
          </ReactMarkdown>
        </div>
}
