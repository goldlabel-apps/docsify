import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    // Button,
    Typography,
    Grid,
} from '@material-ui/core/'
import { 
  // goTo,
  goToSlug,
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
  const docsifySlice = useSelector(state => state.docsify)
  const {
    appRoute,
  } = appSlice
  const {
    markdown,
  } = docsifySlice
  
  console.log ('markdown', markdown)

  React.useEffect(() => {
    const {
      appRoute,
    } = appSlice
    const { 
      slug,
    } = appRoute
    if ( getHistory().location.pathname !== slug) {
       // console.log ( 'getRoutebySlug', getRoutebySlug( slug ) )
       let route = getRoutebySlug( slug )
       // console.log ( 'route', route )
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

                
              </Grid>
            </Grid>
        </div>
}
