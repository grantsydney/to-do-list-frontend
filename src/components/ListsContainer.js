import React, { Component } from 'react'
//import '../App.css';

import List from './List';

class ListsContainer extends Component {
  render() {
    return (
      <div>
      <span className="view-all-to-dos">
      <input
      type="checkbox"
        checked={this.props.isChecked}
        onChange={()=>this.props.handleCheckBoxChangeForAll(this.props.lists)}
      />View All To-Dos
      </span>
      <div>
        {this.props.lists.map(l => {
          return <List allLists={this.props.lists} list={l} key={l.id} getListId={this.props.getListId} checked={this.props.isChecked} handleCheckBoxChange={this.props.handleCheckBoxChange} toggle={this.props.handleToggle}/>
        })}
      </div>
      </div>
    )
  }
}

export default ListsContainer
