import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import ListsContainer from './components/ListsContainer'
import ListDetails from './components/ListDetails';
import ListForm from './components/ListForm'

//import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {

  state={
    lists: [],
    clickedListId: ''
  }


  //fetch list data and set State
componentDidMount(){
  fetch(`http://localhost:3001/api/v1/users/1/lists`)
    .then(response => response.json())
    .then(listData =>
      this.setState({
        lists: listData
      }, () => console.log(this.state.lists)))
}

//add new list
addList = (list) => {
    this.setState({
      lists: [...this.state.lists, list]
    }, ()=>console.log(this.state.lists))
  }

  //*FUNCTION* add item to list

  addItem = (item) => {
    debugger
      this.setState({
        items: [...this.state.lists.items, item]
      }, ()=>console.log(this.state.items))
    }

//find list by id
getListId = clickedListId => {
  console.log(clickedListId)
  this.setState({
    clickedListId: clickedListId
  })
}

renderList() {
  return this.state.lists.find(l =>{
    return l.id === this.state.clickedListId
  })
}


  render() {
    return (
      <div>
      <Header />
      <ListForm addList={this.addList} />
      <ListsContainer lists={this.state.lists} getListId={this.getListId}/>
      <ListDetails renderList={this.renderList()} clickedListId={this.state.clickedListId} addItem={this.addItem}/>
      </div>

    );
  }
}

export default App;
