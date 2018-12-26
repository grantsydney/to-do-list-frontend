import React, { Component } from 'react';
import ItemForm from './ItemForm'
import EditableItemLabel from './EditableItemLabel'
import EditableTitleLabel from './EditableTitleLabel'
//import '../App.css';


class ListDetails extends Component {
  render() {
    return (
      <div id="detail-container">
        <h1>List Details</h1>
        <h3>{this.props.clickedListId ? <EditableTitleLabel
                  clickedListId={this.props.clickedListId}
                  id={this.props.clickedListId}
                  key={this.props.id}
                  text={this.props.renderList.name}
                  labelClassName='myLabelClass'
                  inputClassName='myInputClass'
                  inputWidth='200px'
                  inputHeight='25px'
                  inputMaxLength='50'
                  labelFontWeight='bold'
                  inputFontWeight='bold'
                  onFocus={this._handleFocus}
                  onFocusOut={this._handleFocusOut}
              />
           : null}</h3>
        {this.props.clickedListId ? <ItemForm clickedListId={this.props.clickedListId} addItem={this.props.addItem}/> : null}
        <ul>{this.props.clickedListId ? this.props.renderList.items.map(i=>
          // <li key={i.id}>{i.name}</li>
          <EditableItemLabel
                    clickedListId={this.props.clickedListId}
                    id={i.id}
                    key={i.id}
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
                />

        ) : null}</ul>

      </div>
    )
  }
}

export default ListDetails;
