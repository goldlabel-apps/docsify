import React from 'react'
// import { useSelector } from 'react-redux'
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
  // const pingpongSlice = useSelector(state => state.pingpong)
  // const {
  //   ting,
  // } = pingpongSlice


  return <div className={ clsx( classes.dashboard ) } >
              <Grid container>

                <Grid item xs={ 12 } >
                  <Typography gutterBottom>
                    Maintains useful, up to date documentation for internal and external use
                  </Typography>

                  <Typography>
                    read the config file
                  </Typography>
                  
                  
                </Grid>

                
              </Grid>
          </div>
}

/*
<pre>
                    { JSON.stringify( ting, null, 2 ) }
                  </pre>
*/