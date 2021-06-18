import React from 'react'
import { useSelector } from 'react-redux'
import {
  themeLight, 
  themeDark,
} from './theme'
import {
  MuiThemeProvider,  
  createMuiTheme, 
  CssBaseline,
  LinearProgress,
} from '@material-ui/core/'
import {
  Overlay,
} from './components'
import {
  Docsify,
} from './packages/Docsify'

export default function App() {

    const appSlice = useSelector(state => state.app)
    let theme = themeLight
    const {
      darkMode,
      progress,
    } = appSlice
    if ( darkMode ) theme = themeDark

    return <MuiThemeProvider theme={ createMuiTheme( theme ) }>
              <CssBaseline />
              <Overlay />
              { progress ? <LinearProgress color={ `secondary` } /> : null }
              <Docsify />
            </MuiThemeProvider> 
}
