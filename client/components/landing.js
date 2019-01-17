import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    alignItems: 'center',
    direction: 'column',
    justify: 'flex-start'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    background: 'url(/images/marsRover.jpeg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'fixed',
    height: '100vh',
    justifyContent: 'center'
  }
})

class Landing extends Component {
  render() {
    const {classes} = this.props
    return (
      <div
        style={{
          background:
            'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(/images/marsRover.jpeg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
          position: 'fixed',
          height: '100vh',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: 'primary'
        }}
      >
        <Grid container className={classes.root}>
          <Grid item>
            <Typography component="h1" variant="h2">
              <b>Welcome to NASA Pictures</b>
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

Landing.propTypes = {
  classes: PropTypes.object.isRequired
}
export default connect(mapStateToProps)(withStyles(styles)(Landing))
