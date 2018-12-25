import React, { Component } from 'react'
//import '../App.css';

import List from './List';

class ListsContainer extends Component {
  render() {
    return (
      <div>
        <h1>Lists</h1>
        {this.props.lists.map(l => {
          return <List list={l} key={l.id} getListId={this.props.getListId}/>
        })}
      </div>
    )
  }
}

export default ListsContainer
