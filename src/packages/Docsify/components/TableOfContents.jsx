import React from 'react'
import { 
    useSelector,
} from 'react-redux'
import { 
  makeStyles,
  Typography,
} from '@material-ui/core/'
import { 
  TreeView,
  TreeItem,
} from '@material-ui/lab/'

import Label from '@material-ui/icons/InsertDriveFile'
import Book from '@material-ui/icons/MenuBook'
import Entry from '@material-ui/icons/BookmarkBorder'

const useTreeItemStyles = makeStyles((theme) => ({
  tableOfContents: {
    color: theme.palette.text.secondary,
    '&:hover > $content': {
      backgroundColor: 'none',
    },
    '&:focus > $content, &$selected > $content': {
      backgroundColor: 'none',
      color: 'var(--tree-view-color)',
    },
    '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
      backgroundColor: 'transparent',
    },
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
}))

const handleClick = ( props ) => {
  const {
    entry,
  } = props
  if ( !entry ) return null
  console.log ( 'entry', entry )
  return true
}

function StyledTreeItem( props ) {

  const classes = useTreeItemStyles()
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props

  return (
    <TreeItem
      onClick={ (e) => {
        e.preventDefault()
        handleClick( props )
      }}
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  )
}

const useStyles = makeStyles({
  tableOfContents: {
    marginTop: 15,
    minWidth: 250,
  },
})

export default function TableOfContents () {

  const classes = useStyles()
  const docsifySlice = useSelector(state => state.docsify)    
  const {
      config,
  } = docsifySlice

  if ( !config ) return false
  const {
    title,
    chapters,
  } = config

  return <TreeView className={ classes.tableOfContents }
            defaultExpanded={['chapters']} >
            <StyledTreeItem 
              nodeId={ `chapters` }
              labelText={ title } 
              labelIcon={ Label }>
              { chapters.map((chapter, i) => {
                const {
                  title,
                  slug,
                  entries,
                } = chapter
                return <StyledTreeItem
                          key={ `chapter_${i}` }
                          nodeId={ `chapter_${i}` }
                          labelText={ title }
                          labelIcon={ Entry }
                          chapter={ chapter }>
                          { entries ? entries.map((entry, j) => {
                            return <StyledTreeItem 
                                      key={ `${slug}_${j}` }
                                      nodeId={ `${slug}_${j}` }
                                      labelText={ `${entry.title}` } 
                                      labelIcon={ Book }
                                      entry={ entry }
                                    />
                          }) : null }
                       </StyledTreeItem>
              })}
            </StyledTreeItem>
          </TreeView>  
}
