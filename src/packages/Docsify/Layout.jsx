import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Grid,
} from '@material-ui/core/'


const useStyles = makeStyles((theme) => ({
  dashboard: {
  },
}))

export default function Layout() {
  
  const classes = useStyles()

  return <div className={ clsx( classes.dashboard ) } >
              <Grid container>
                <Grid item xs={ 12 } >
                  <header>
                  Docsify Header
                  </header>               
                </Grid>
              </Grid>
          </div>
}
