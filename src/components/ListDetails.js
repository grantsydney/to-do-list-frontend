import React, { Component } from 'react';
import ItemForm from './ItemForm'
//import '../App.css';


class ListDetails extends Component {
  render() {
    return (
      <div id="detail-container">
        <h1>List Details</h1>
        <h3>{this.props.clickedListId ? this.props.renderList.name : null}</h3>
        {this.props.clickedListId ? <ItemForm clickedListId={this.props.clickedListId} addItem={this.props.addItem}/> : null}
        <ul>{this.props.clickedListId ? this.props.renderList.items.map(i=><li key={i.id}>{i.name}</li>) : null}</ul>

      </div>
    )
  }
}

export default ListDetails;
