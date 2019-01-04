import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import ListsContainer from './components/ListsContainer'
import ListDetails from './components/ListDetails';
import ListForm from './components/ListForm'

class App extends Component {

  state={
    lists: [],
    clickedListId: '',
    currentText: 'Does this work???',
    isChecked: false
  }

  _handleFocus(text) {
    console.log('Focused with text: ' + text);
  }

  _handleFocusOut(text) {
    console.log('Left editor with text: ' + text);
  }


//fetch list data and set State
  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/users/1/lists`)
      .then(r => r.json())
      .then(listData => {
        const data = listData.map(l => ({...l, checked:false}))
        this.setState({ lists: data }, ()=>console.log(this.state.lists))
      })
  }

  //add new list
  addList = (list) => {
    this.setState({
      lists: [...this.state.lists, list]
    })
  }

  //update state with added list item
  addItem = (item, clickedListId) => {
    let foundList = this.state.lists.find(l=> clickedListId === l.id)
    foundList.items.push(item)
    let updatedLists = this.state.lists.map(l=> {
      if (l.id === clickedListId){
        return foundList
      } else {
        return l
      }
    })
    this.setState({
      lists: updatedLists
    })
  }


//find list by id
  getListId = clickedListId => {
    this.setState({
      clickedListId: clickedListId
    })
  }


  renderList() {
    return this.state.lists.find(l =>{
      return l.id === this.state.clickedListId
    })
  }

  //map through lists to locate list that has been checked. Change value to opposite of current
  handleCheckBoxChange = (id) => {
    const newData = this.state.lists.map( l => {
      if (l.id === id)  {
        return {...l, checked:!l.checked}
      } return l
    })

    this.setState({ lists: newData })
  }

  //change style based on clicking check mark or not. set state of updated items with complete value of true or false
  handleCompletedItem = (itemId, listId) => {

    const newLists = this.state.lists.map(l=>{
      if (l.id === listId ) {
        return {...l, items: l.items.map(item=>{
          if(item.id === itemId){
            return {...item, completed:!item.completed}
          } return item
        })}
      } return l
    })

    console.log(newLists);
    this.setState({
      lists: newLists
    })
  }

  //show all to-do items in ListDetails
  handleCheckBoxChangeForAll = (lists) => {
    const newLists = this.state.lists.map( l => {
        return {...l, checked:!l.checked}
      })


    this.setState({ lists: newLists })
  }


  render() {

    //filtered lit constant will be all lists who are checked off--thos with the chcked value of true
    const filteredLists = this.state.lists.filter(l => {
      return l.checked === true
    })


    return (
      <div>
      <Header />
      <ListForm addList={this.addList} />
      <div className='all-lists'>
        <div className="list-names">
          <ListsContainer lists={this.state.lists} getListId={this.getListId} checked={this.state.isChecked} handleCheckBoxChange={this.handleCheckBoxChange} handleCheckBoxChangeForAll={this.handleCheckBoxChangeForAll} toggle={this.handleToggle}/>
        </div>
        <div className="clicked-list">
          <ListDetails handleCompletedItem={this.handleCompletedItem} filteredLists={filteredLists} renderList={this.renderList()} clickedListId={this.state.clickedListId} addItem={this.addItem}/>
        </div>
      </div>
      </div>

    );
  }
}

export default App;
