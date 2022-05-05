import React, {useEffect} from 'react'
import ReactGA from 'react-ga'
import Link from '../Link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import {useTheme} from '@material-ui/core/styles'
import {makeStyles} from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'

import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuList from '@material-ui/core/MenuList'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Grid from '@material-ui/core/Grid'

function ElevationScroll(props) {
  const {children} = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  })
}

const useStyle = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '4rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '3rem'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.85rem'
    }
  },
  logo: {
    height: '8rem',
    [theme.breakpoints.down('md')]: {
      height: '7rem'
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5rem'
    }
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab, //theme-dan goturur hamsini
    minWidth: 10,
    marginLeft: '20px'
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
    '&:hover': {
      backgroundColor: theme.palette.warning.dark
    }
  },
  logoContainer: {
    padding: '0',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: '0',
    zIndex: '1302'
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1
    }
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  drawerIcon: {
    height: '50px',
    width: '50px'
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: '0'
  },
  drawerItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    color: 'white',
    '&:hover': {
      opacity: 1
    }
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.warning.dark
    }
  },
  drawerItemSelected: {
    '& ,.MuiListItemText-root': {
      opacity: 1
    }
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1
  },
  expansionClass: {
    backgroundColor: theme.palette.common.blue,
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    '&.Mui-expanded': {
      margin: 0,
      borderBottom: 0
    },
    '&::before': {
      backgroundColor: 'rgba(0 ,0 ,0, 0)'
    },
    '&:hover': {
      backgroundColor: 'rgba(0 ,0 ,0, 0.08)'
    }
  },
  expDetails: {
    backgroundColor: theme.palette.primary.light,
    padding: 0
  },
  expSummary: {
    backgroundColor: (props) => (props.value === 1 ? 'rgba(0 ,0 , 0 ,0.14)' : 'inherit')
  }
}))

export default function Header(props) {
  const classes = useStyle(props)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const [openMenu, setOpenMenu] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const [openDraw, setOpenDraw] = React.useState(false)
  const [previousPage, setPreviousPage] = React.useState('')
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (e, newVal) => {
    props.setValue(newVal)
    // console.log(newVal)
  }
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }
  // console.log(e.currentTarget)

  const handleMenuClick = (e, index) => {
    props.setSelected(index)
  }
  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }
  const handleChangePanel = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  const menuOptions = [
    {
      name: 'Custom Software Development',
      link: '/customsoftware',
      activeIndex: 1,
      selectedIndex: 0
    },
    {
      name: 'IOS/Android App Development',
      link: '/mobileapps',
      activeIndex: 1,
      selectedIndex: 1
    },
    {
      name: 'Website Development',
      link: '/websites',
      activeIndex: 1,
      selectedIndex: 2
    }
  ]
  const routes = [
    {name: 'Home', link: '/', activeIndex: 0},
    {
      name: 'Services',
      link: '/services',
      activeIndex: 1,
      ariaHasPopup: openMenu ? true : undefined,
      areaOwns: anchorEl ? 'simple-menu' : undefined,
      onMouseOver: (event) => handleClick(event)
    },
    {name: 'Revulation', link: '/revulation', activeIndex: 2},
    {name: 'About us', link: '/about', activeIndex: 3},
    {name: 'Contact', link: '/contact', activeIndex: 4},
    {name: 'Estimate', link: '/estimate', activeIndex: 5}
  ]
  useEffect(() => {
    if (previousPage !== window.location.pathname) {
      //sehife refresh olanda eleme icindekini ancaq seh deyisende bas verir icindeki
      setPreviousPage(window.location.pathname)
      ReactGA.pageview(window.location.pathname + window.location.search) //  mes /about bu gedir google analyticsde qeyd olunurki yeni bu sehifeye bas cekib
    }
    ;[...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex)
            if (route.selectedIndex && route.selectedIndex !== props.selected)
              props.setSelected(route.selectedIndex)
          }
          break
        case '/estimate':
          if (props.value !== 5) {
            props.setValue(5)
          }
          break
        default:
          break
      }
    })
  }, [props.value, menuOptions, props.selected, routes, props])
  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value === 5 ? 0 : props.value}
        onChange={handleChange}
        aria-label="simple tabs example"
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((opt, index) =>
          opt.name !== 'Estimate' ? (
            <Tab
              key={`Menu${opt.name}${index}`}
              className={classes.tab}
              component={Link}
              href={opt.link}
              label={opt.name}
              aria-haspopup={opt.ariaHasPopup}
              area-owns={opt.areaOwns}
              onMouseLeave={() => {
                setOpenMenu(false)
              }}
              onMouseOver={opt.onMouseOver}
            />
          ) : null
        )}
      </Tabs>

      <Popper
        open={openMenu}
        anchorEl={anchorEl}
        role={undefined}
        transition
        disablePortal
        onClose={handleClose}
        MenuListProps={{onMouseLeave: handleClose}}
        placement="bottom-start"
      >
        {({TransitionProps, placement}) => (
          <Grow {...TransitionProps} style={{transformOrigin: '  top left'}}>
            <Paper classes={{root: classes.menu}} elevation={0}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  onMouseOver={() => {
                    setOpenMenu(true)
                  }}
                  onMouseLeave={handleClose}
                  disablePadding
                  autoFocusItem={false}
                  id="simple-menu"
                >
                  {menuOptions.map((option, index) => (
                    <MenuItem
                      key={index}
                      component={Link}
                      href={option.link}
                      onClick={(e) => {
                        handleMenuClick(e, index)
                        props.setValue(1)
                        handleClose()
                      }}
                      selected={
                        index === props.selected &&
                        props.value === 1 &&
                        window.location.pathname !== '/services'
                      }
                      classes={{root: classes.menuItem}}
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      <Button
        variant="contained"
        color="secondary"
        style={{backgroundColor: props.value === 5 ? theme.palette.warning.dark : null}}
        className={classes.button}
        component={Link}
        href="/estimate"
        onClick={() => {
          props.setValue(5)
          ReactGA.event({
            category: 'Estimate',
            action: 'button in header'
          })
        }}
      >
        Free Estimate
      </Button>
    </React.Fragment>
  )
  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDraw}
        onClose={() => setOpenDraw(false)}
        onOpen={() => setOpenDraw(true)}
        classes={{paper: classes.drawer}}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((opt, index) =>
            opt.name !== 'Estimate' && opt.name !== 'Services' ? (
              <ListItem
                button
                divider
                onClick={() => {
                  setOpenDraw(false)
                  setExpanded(false)
                  props.setValue(0)
                }}
                component={Link}
                selected={props.value === opt.activeIndex}
                href={opt.link}
                key={`List${opt.name}${index}`}
                classes={{selected: classes.drawerItemSelected}}
              >
                <ListItemText disableTypography className={classes.drawerItem}>
                  {opt.name}
                </ListItemText>
              </ListItem>
            ) : opt.name === 'Services' ? (
              <ExpansionPanel
                expanded={expanded === 'panel1'}
                onChange={handleChangePanel('panel1')}
                classes={{root: classes.expansionClass}}
                key={opt.name}
                elevation={0}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon color="secondary" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  classes={{root: classes.expSummary}}
                >
                  <ListItemText
                    disableTypography
                    className={classes.drawerItem}
                    onClick={() => {
                      setOpenDraw(false)
                      props.setValue(opt.activeIndex)
                    }}
                    style={{opacity: props.value === 1 ? 1 : null}}
                  >
                    <Link href={opt.link} color="inherit">
                      {opt.name}
                    </Link>
                  </ListItemText>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails classes={{root: classes.expDetails}}>
                  <Grid item container direction="column">
                    {menuOptions.map((option, index) => (
                      <Grid item key={`List${option.name}${index}`}>
                        <ListItem
                          button
                          divider
                          onClick={() => {
                            setOpenDraw(false)
                            props.setSelected(option.selectedIndex)
                          }}
                          component={Link}
                          selected={
                            props.selected === option.selectedIndex &&
                            props.value === 1 &&
                            window.location.pathname !== '/services'
                          }
                          href={option.link}
                          classes={{selected: classes.drawerItemSelected}}
                        >
                          <ListItemText disableTypography className={classes.drawerItem}>
                            {option.name
                              .split(' ')
                              .filter((word) => word !== 'Development')
                              .join(' ')}
                            <br />
                            <span style={{fontSize: '0.75rem'}}>Development</span>
                          </ListItemText>
                        </ListItem>
                      </Grid>
                    ))}
                  </Grid>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ) : null
          )}
          <ListItem
            button
            divider
            onClick={() => {
              setOpenDraw(false)
              props.setValue(5)
              ReactGA.event({
                category: 'Estimate',
                action: 'button in drawer (mobile)'
              })
            }}
            component={Link}
            href="/estimate"
            selected={props.value === 5}
            classes={{root: classes.drawerItemEstimate}}
            style={{backgroundColor: props.value === 5 ? theme.palette.warning.dark : null}}
          >
            <ListItemText
              disableTypography
              className={classes.drawerItem}
              component={Link}
              href="/estimate"
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDraw(!openDraw)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  )
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar color="primary" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              href="/"
              className={classes.logoContainer}
              onClick={() => props.setValue(0)}
              disableRipple
            >
              <img src="/assets/logo.svg" className={classes.logo} alt="company logo" />
            </Button>
            <Hidden mdDown>{tabs}</Hidden>
            <Hidden lgUp>{drawer}</Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}
