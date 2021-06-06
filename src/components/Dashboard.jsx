import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
    makeStyles,
    Grid,
    Typography,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  dashboard: {
  },
}))

export default function Dashboard() {
  
  const classes = useStyles()
  const docsifySlice = useSelector(state => state.docsify)
  const {
    config,
  } = docsifySlice


  return <div className={ clsx( classes.dashboard ) } >
              <Grid container>

                <Grid item xs={ 12 } >
                  <Typography gutterBottom>
                    Maintains useful, up to date documentation for internal and external use
                  </Typography>

                  <pre>
                    { JSON.stringify( config, null, 2 ) }
                  </pre>
                  
                </Grid>

                
              </Grid>
          </div>
}

/*

*/