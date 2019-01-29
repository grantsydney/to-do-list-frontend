import React, { Component } from 'react';
import ItemForm from './ItemForm'
import EditableItemLabel from './EditableItemLabel'
//import '../App.css';


class ListDetails extends Component {

  //delete item from page and backend
  deleteItem = (event) => {
    event.target.parentElement.remove()
    let itemId = parseInt(event.target.dataset.id)
    fetch(`http://localhost:3001/api/v1/users/1/lists/${this.props.clickedListId}/items/${itemId}`, { method: 'DELETE' })
  }

  addItemToList = (item) => {
    this.props.addItem(item, this.props.clickedListId)
  }

  render() {
    return (
      <div id="detail-container">

        {this.props.clickedListId ? <ItemForm listName={this.props.renderList.name} clickedListId={this.props.clickedListId} addItemToList={this.addItemToList}/> : null}

        <div>
        <ul>
        {this.props.filteredLists.map(l=>
          l.items.map(i=>
            <div key={i.id}>
                <li className="list-details-items-text" style={{textDecoration: i.completed?"line-through":"none", color:`#${l.color}`}} ><EditableItemLabel

                        item={i}
                        clickedListId={this.props.clickedListId}
                        id={i.id}
                        text={i.name}
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass'
                        inputWidth='200px'
                        inputHeight='25px'
                        inputMaxLength='50'
                        labelFontWeight='bold'
                        inputFontWeight='bold'
                        onFocus={this._handleFocus}
                        onFocusOut={this._handleFocusOut}
                    /></li>

                    <span onClick={() => this.props.handleCompletedItem(i.id, l.id)} style={{color:`#${l.color}`}}>&#10003;</span>
                <span data-id={i.id} onClick={this.deleteItem} style={{color:`#${l.color}`}}>x
                </span>
                </div>

          ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default ListDetails;
