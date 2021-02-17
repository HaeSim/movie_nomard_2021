import React, { Component } from 'react'

export class Detail extends Component {
  componentDidMount() {
    console.log(this.props)
    const { location, history } = this.props
    if (location.state === undefined) {
      alert('정상적인 접근이 아닙니다.')
      history.push('/')
    }
  }

  render() {
    const { location } = this.props
    return <div>{location.state.title}</div>
  }
}

export default Detail
