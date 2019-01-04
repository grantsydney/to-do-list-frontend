import React, { Component } from 'react'

class List extends Component {

  //remove list from screen and backend
  deleteList = (event) => {
    event.target.parentElement.remove()
    fetch(`http://localhost:3001/api/v1/users/1/lists/${this.props.list.id}`, { method: 'DELETE' })
  }

  render() {
    return (
      <div className="list-title">
        <input
          type="checkbox"
          checked={this.props.isChecked}
          onChange={()=>this.props.handleCheckBoxChange(this.props.list.id)}
        />
        <span onClick={() => this.props.getListId(this.props.list.id)} style={{color:`#${this.props.list.color}`}}>{this.props.list.name}
        </span>
        <span onClick={this.deleteList} style={{color:`#${this.props.list.color}`}, {float: 'right'}}>
           x
        </span>
      </div>
    )
  }
}

export default List;
