import React, { Component } from 'react'

class List extends Component {


deleteList = (event) => {
  event.target.parentElement.remove()
  fetch(`http://localhost:3001/api/v1/users/1/lists/${this.props.list.id}`, { method: 'DELETE' })
}

  render() {
    return (
      <div>
        <div onClick={() => this.props.getListId(this.props.list.id)}>{this.props.list.name}</div>
        <button onClick={this.deleteList}>Delete</button>
      </div>
    )
  }
}

export default List;
