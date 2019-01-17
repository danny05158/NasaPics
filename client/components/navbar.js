import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

import AppBar from '@material-ui/core/AppBar'
import {withStyles, CssBaseline, Toolbar, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Popper from 'popper.js'

const styles = {
  root: {
    flexGrow: 1
  },
  logo: {
    height: 40
  }
}

class Navbar extends Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({anchorEl: event.currentTarget})
  }

  handleClose = () => {
    this.setState({anchorEl: null})
  }

  render() {
    const {anchorEl} = this.state
    const {classes} = this.props

    return (
      <div>
        <CssBaseline />
        <AppBar className={classes.root} position="sticky">
          <Toolbar>
            <Grid container justify="space-between" alignItems="center">
              <Grid item component={Link} to="/" xs={9}>
                <img className={classes.logo} src="/images/NasaLogo.jpg" />
              </Grid>

              <Grid item xs={1}>
                <IconButton
                  aria-owns={open ? 'menu-list-grow' : undefined}
                  aria-haspopup="true"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                  onClick={this.handleClick}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

/**
 * CONTAINER
 */

const mapState = state => ({
  isLoggedIn: !!state.user.id
})

const mapDispatch = dispatch => ({
  handleLogout: () => dispatch(logout())
})

export default connect(mapState, mapDispatch)(withStyles(styles)(Navbar))

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
