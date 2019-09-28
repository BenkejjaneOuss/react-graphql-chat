import React, { Component } from 'react'
import { withApollo, graphql } from 'react-apollo'
import * as compose from 'lodash.flowright'
import gql from 'graphql-tag'
import generateUsername from 'sillyname'
import Chat from './Chat'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/styles.css'

const createUser = gql`
  mutation createUser($name: String!) {
    createUser(name: $name) {
        id
        name
    }
  }
`

const REACT_GRAPHQL_CHAT_ID_KEY = 'REACT_GRAPHQL_CHAT_ID'

class App extends Component {

  state = {
    userId: undefined,
  }

  async componentDidMount() {
    const userId = localStorage.getItem(REACT_GRAPHQL_CHAT_ID_KEY)
    // Check if user already exists
    if (!Boolean(userId)) {
      this._createNewUser()
    } else {
      this._updateExistingUser(userId)
    }
  }

  _createNewUser = () => {
    this.props.createUserMutation({
      variables: {
        name: generateUsername(),
      }
    }).then(result => {
      localStorage.setItem(REACT_GRAPHQL_CHAT_ID_KEY, result.data.createUser.id)
      this.setState({
        userId: result.data.createUser.id,
      })
    })
  }

  _updateExistingUser = async (userId) => {
    this.setState({
      userId: userId
    })
  }

  render() {
    return (
      <div className="messaging">
        <Chat
          userId={this.state.userId}
        />
      </div>
    )
  }
}

export default compose(
  graphql(createUser, {name: 'createUserMutation'})
)(withApollo(App))
