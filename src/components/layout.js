import * as React from "react"
import { Link } from "gatsby"
import clsx from "clsx"

import { makeStyles } from "@material-ui/core/styles"
import {
  Container,
  Grid,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

import icLogo from "../images/logo.png"
import icIzundo from "../images/logoIzundo.png"
import icTwitter from "../images/twitter.svg"
import icFacebook from "../images/facebook.svg"
import icInta from "../images/inta.svg"

const useStyles = makeStyles(theme => ({
  header: {
    // flexGrow: 1,
  },

  appBar: {
    // backgroundColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "#ffffff",
  },

  toolBar: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },

  containerHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  icLogo: {
    objectFit: "contain",
    marginRight: 40,
    maxWidth: 74,
    height: '100%',
    width: '100%',
    "@media (max-width: 1024px)": {
      maxWidth: 60,
    },

    "@media (max-width: 768px)": {
      marginRight: 20,
      maxWidth: 37,
    },
  },

  imgLogo: {
    objectFit: "contain",
    maxWidth: 171,
    height: '100%',
    width: '100%',
    "@media (max-width: 1024px)": {
      maxWidth: 150,
    },

    "@media (max-width: 768px)": {
      maxWidth: 85,
    },
  },

  menuItem: {
    // color: "rgba(196, 196, 196, 0.7)",
    color:'rgba(196, 196, 196, 0.7)',
    textDecoration: "none",
    marginRight: theme.spacing(5),
    fontSize: 12,

    "@media (max-width: 1024px)": {
      marginRight: theme.spacing(3),
    },
  },

  menuItemActive: {
    color: "#1c1c1c",
  },

  menuItemMobile: {
    textAlign: "center",
    padding: 20,
    color: "rgba(196, 196, 196, 0.7)",
    fontSize: 12,
    borderStyle: "solid",
    borderWidth: "0 0 1px 0",
    borderColor: "rgba(196, 196, 196, 0.7)",
  },

  menuItemMobileActive: {
    color: "#1c1c1c",
  },

  main: {
    paddingTop: 150,
    paddingBottom: 150,
    maxWidth:900,
  },

  alignAllItems:{
    display:'flex', 
    flexDirection:'column',
    alignItems:'center'
  },

  footer: {
    backgroundColor: "#f5f5f5",
    padding: "30px 35px 30px 35px",
    width:'100%'
  },

  aboutUs: {
    width: '100%',
    height: '100%',
    alignItems: "center",
    justifyContent: "flex-start",
    display: "flex",
    fontSize: 12,

    "@media (max-width: 768px)": {
      justifyContent: "center",
    },
  },

  contact: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",

    "@media (max-width: 768px)": {
      justifyContent: "center",
      alignItems: "center",
    },
  },

  icTwitter: {
    width: 24,
    marginRight: 16,
    display:'flex'
  },

  icFacebook: {
    width: 16,
    marginRight: 16,
    display:'flex'
  },

  icInta: {
    width: 20,
    display:'flex'
  },

  imgIcon: {
    width:'100%',
    height:'100%',
    color:'#424242',
  },

  logoIzundo:{
    display: "flex", 
    alignItems: "center"
  },

  menuIcon:{
    color: "#c4c4c4", 
    fontSize: 32
  },

  textDecorNone:{
    textDecoration:'none'
  },

  minWidth250:{
    minWidth:250
  }
}))

const NAV_CONFIG = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "PHILOSOPHY",
    href: "/philosophy",
  },
  {
    title: "WHAT WE DO",
    href: "/what_we_do",
  },
  {
    title: "HOW WE WORK",
    href: "/how_we_work",
  },
  {
    title: "TEAM",
    href: "/team",
  },
  {
    title: "CONTACT",
    href: "/contact",
  },
]

const Layout = ({ location, title, children }) => {
  const classes = useStyles()

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  // let header
  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  const [state, setState] = React.useState({
    mobileView: false,
    drawerOpen: false,
  })

  const { mobileView, drawerOpen } = state

  const displayMobile = () => {
    const handleDrawerOpen = () => {
      setState(prevState => ({ ...prevState, drawerOpen: true }))
    }

    const handleDrawerClose = () => {
      setState(prevState => ({ ...prevState, drawerOpen: false }))
    }

    return (
      <Toolbar className={classes.toolBar}>
        <Container className={classes.containerHeader}>
          <Link to="/">
            <Box className={classes.logoIzundo}>
              <img alt="Logo" src={icLogo} className={classes.icLogo} />
              <img alt="Logo" src={icIzundo} className={classes.imgLogo} />
            </Box>
          </Link>
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
        </Container>
        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.minWidth250}>
            {NAV_CONFIG.map(({ title, href }, index) => (
              <Link to={href} key={index} className={classes.textDecorNone}>
                <Box
                  className={clsx(classes.menuItemMobile, {
                    [classes.menuItemMobileActive]: location.pathname.includes(href),
                  })}
                >
                  {title}
                </Box>
              </Link>
            ))}
          </div>
        </Drawer>
      </Toolbar>
    )
  }

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolBar}>
        <Container className={classes.containerHeader}>
          <Link to="/">
            <Box className={classes.logoIzundo}>
              <img alt="Logo" src={icLogo} className={classes.icLogo} />
              <img alt="Logo" src={icIzundo} className={classes.imgLogo} />
            </Box>
          </Link>
          <Box>
            {NAV_CONFIG.map(({ title, href }, index) => (
              <Link
                key={index}
                to={href}
                className={clsx(classes.menuItem, {
                  [classes.menuItemActive]: location.pathname === href,
                })}
              >
                {title}
              </Link>
            ))}
          </Box>
        </Container>
      </Toolbar>
    )
  }

  React.useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 992
        ? setState(prevState => ({ ...prevState, mobileView: true }))
        : setState(prevState => ({ ...prevState, mobileView: false }))
    }
    setResponsiveness()
    window.addEventListener("resize", () => setResponsiveness())
  }, [])

  return (
    <div data-is-root-path={isRootPath} className={classes.alignAllItems}>
      <header className={classes.header}>
        <AppBar position="fixed" elevation={0} className={classes.appBar}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
      <main className={classes.main}>
        <Container>{children}</Container>
      </main>
      <footer className={classes.footer}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box className={classes.aboutUs}>
                <span>
                  © {new Date().getFullYear()} Izundo. All Rights Reserved.
                </span>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box className={classes.contact}>
                <Link to="/" className={classes.icTwitter}>
                  <img alt="Twitter" src={icTwitter}  className={classes.imgIcon}/>
                </Link>
                <Link to="/" className={classes.icFacebook}>
                  <img alt="Facebook" src={icFacebook}  className={classes.imgIcon}/>
                </Link>
                <Link to="/" className={classes.icInta}>
                  <img alt="Inta" src={icInta} className={classes.imgIcon}/>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  )
}

export default Layout
