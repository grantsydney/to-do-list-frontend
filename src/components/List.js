import React, { Component } from 'react'

class List extends Component {
  render() {
    return (
      <div>
        <div onClick={() => this.props.getListId(this.props.list.id)}>{this.props.list.name}</div>
      </div>
    )
  }
}

export default List;
