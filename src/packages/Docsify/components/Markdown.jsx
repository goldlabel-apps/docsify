import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  markdown: {
    // border: '1px solid yellow',
  },
}))

export default function Markdown() {
  const classes = useStyles()
  const docsifySlice = useSelector(state => state.docsify)
  const {
    markdown,
  } = docsifySlice
  
  if ( !markdown ) return null
 
  return <div className={clsx( classes.markdown )}>
          <ReactMarkdown remarkPlugins={ [[ gfm, { singleTilde: false } ]] }>
            { markdown }
          </ReactMarkdown>
        </div>
}
