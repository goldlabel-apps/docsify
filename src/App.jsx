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
import Docsify from './Docsify'

export default function App() {

    const appSlice = useSelector(state => state.app)
    const docsifySlice = useSelector(state => state.docsify)
    const {
      markdownLoading,
    } = docsifySlice
    let theme = themeLight
    const {
      darkMode,
    } = appSlice
    if ( darkMode ) theme = themeDark

    return <MuiThemeProvider theme={ createMuiTheme( theme ) }>
              <CssBaseline />
              <Overlay />
              { markdownLoading ? <LinearProgress color={ `secondary` } /> : null }
              <Docsify />
            </MuiThemeProvider> 
}
