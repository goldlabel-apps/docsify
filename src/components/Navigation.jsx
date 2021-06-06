import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
    makeStyles,
    Grid,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  navigation: {
  },
}))

export default function Navigation() {
 
  const classes = useStyles()
  const docsifySlice = useSelector(state => state.docsify)
  const {
    config,
  } = docsifySlice
  if ( !config ) return null
  // let showJSON = true
  // const {
  //   title,
    
  // } = config

  return <div className={ clsx( classes.navigation ) } >
              <Grid container>
                <Grid item xs={ 12 } >
                  Navigation
                </Grid>                
              </Grid>
          </div>
}

/*

*/