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

import Label from '@material-ui/icons/Label'
import Book from '@material-ui/icons/Book'

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

function StyledTreeItem( props) {

  const classes = useTreeItemStyles()
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props

  return (
    <TreeItem
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
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
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
    chapters,
  } = config

  return <TreeView
            className={ classes.tableOfContents }
            defaultExpanded={['chapters']}
          >

    
            <StyledTreeItem 
              nodeId={ `chapters` }
              labelText="Chapters" 
              labelIcon={ Label }
            >
                
              { chapters.map((item, i) => {
                const {
                  title,
                  entries,
                } = item
                

                return <StyledTreeItem
                          key={ `item_${i}` }
                          nodeId={ `item_${i}` }
                          labelText={ title }
                          labelIcon={ Book }>
                          { entries ? entries.map((subitem, j) => {
                            return <StyledTreeItem 
                                      key={ `${title}_${j}` }
                                      nodeId={ `subitem_${j}` }
                                      labelText={ `${subitem.title}` } 
                                      labelIcon={ Label }
                                    />
                          }) : null }

                          

                       </StyledTreeItem>
                         
              })}

              

            </StyledTreeItem>

          </TreeView>
  
}

/*
<pre>
                            { JSON.stringify( entries, null, 2 )}
                          </pre>
*/