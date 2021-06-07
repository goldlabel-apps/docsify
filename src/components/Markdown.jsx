import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Button,
    Typography,
    Grid,
} from '@material-ui/core/'
import { 
  goTo,
  getRoutebySlug,
} from '../redux/app/actions'
import { getHistory } from '../'
// import { Icon } from '../../theme'

const useStyles = makeStyles((theme) => ({
  help: {
  },
}))

export default function Markdown() {
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    appRoute,
  } = appSlice

  React.useEffect(() => {
    const {
      appRoute,
    } = appSlice
    const { 
      slug,
    } = appRoute
    if ( getHistory().location.pathname !== slug) {
       console.log ( 'getRoutebySlug', getRoutebySlug( slug ) )
       
    }
  }, [appSlice])

  const {
    name,
  } = appRoute

  return <div className={clsx( classes.help )}>

            <Grid container>
              <Grid item xs={ 12 } >

                <Typography variant={ `h3` }>
                  { name }
                </Typography>

                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Praesent lacinia mi dolor, vel dignissim justo molestie sed. 
                  Fusce tincidunt ante in porta finibus. Donec a metus neque. 
                </Typography>
              </Grid>
              <Grid item xs={ 12 } >
                <Button
                  color={ `primary` }
                  variant={ `outlined` } 
                  onClick={ ( e ) => {
                    e.preventDefault()
                    goTo( `/help`, `Help` )
                  }}>
                  Help
                </Button>
              </Grid>
            </Grid>
        </div>
}
