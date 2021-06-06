import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
    makeStyles,
    Grid,
} from '@material-ui/core/'
import { CollapsingMenu } from './'

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
    pages,
  } = config
  if ( !sections ) return null

  return <div className={ clsx( classes.navigation ) } >
              <Grid container>


                { pages.map( (item, i) => {
                  
                  const {
                    name,
                  } = item
                  
                  return <React.Fragment key={ `section_page_${i}` }>
                            { name }
                          </React.Fragment>
                })}

                { sections.map( (item, i) => {
                    
                    const {
                      name,
                      icon,
                      defaultExpanded,
                      pages,
                      sections,
                    } = item

                    return <React.Fragment key={ `section_${i}` }>

                            


                            <Grid item xs={ 12 }>
                              <CollapsingMenu
                                options={{
                                  defaultExpanded,
                                  title: name,
                                  icon,
                                }} >

                                { pages ? <React.Fragment>
                                  { pages.map( (item, i ) => {
                                        return <div key={ `section_page_${i}` }>
                                          {item.name}
                                        </div>
                                  })}
                                </React.Fragment> : null }


                                { sections ? <React.Fragment>
                                  got sections
                                </React.Fragment> : null }

                                  
                              </CollapsingMenu>
                            </Grid>
                          </React.Fragment>
                })}

                  { showJSON ? <pre>
                    { JSON.stringify( sections, null, 2 ) }
                  </pre> : null }

              </Grid>
          </div>
}

/*

*/