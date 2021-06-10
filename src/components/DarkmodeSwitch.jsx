import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  darkmodeSwitch: {
    border: '1px solid orange',
  },
}))

export default function DarkmodeSwitch() {
  
  const classes = useStyles()

  return <div className={ clsx( classes.darkmodeSwitch )}>
    DarkmodeSwitch
  </div>
}
