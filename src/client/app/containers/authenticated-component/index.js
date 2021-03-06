import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

export default function requireAuthentication(Component) {

  class AuthenticatedComponent extends Component {

    componentWillMount() {
      this.checkAuth(this.props.user)
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth(nextProps.user)
    }

    checkAuth(user) {
      if (!user.isAuthenticated) {
        this.props.dispatch(push('/login'))
      }
    }
    
    render() {
      return (
        <div>
          {this.props.user.isAuthenticated === true
            ? <Component {...this.props} />
            : null
          }
        </div>
      )
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.user
    }
  }

  return connect(mapStateToProps)(AuthenticatedComponent)
}
