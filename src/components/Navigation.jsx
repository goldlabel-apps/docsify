import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
    makeStyles,
    Grid,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  navigation: {
    display: 'block',
  },
  section:{
    display: 'block',
    border: '1px solid green',
  },
}))

export default function Navigation() {
 
  let showJSON = false

  const classes = useStyles()
  const docsifySlice = useSelector(state => state.docsify)
  const {
    config,
  } = docsifySlice
  if ( !config ) return null
  const {
    sections,
  } = config
  if ( !sections ) return null

  return <div className={ clsx( classes.navigation ) } >
              <Grid container>
                { sections.map( (item, i) => {
                    const { 
                      name, 
                    } = item
                    return <Grid item xs={4} key={`aksd_${i}`}>
                              <div className={ clsx( classes.section )}>
                              { name }
                            </div></Grid>
                })}

                  { showJSON ? <pre>
                    { JSON.stringify( sections, null, 2 ) }
                  </pre> : null }

              </Grid>
          </div>
}

/*

*/