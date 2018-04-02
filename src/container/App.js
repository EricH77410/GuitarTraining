import React, { Component } from 'react';
import Header from '../components/Header';
import List from './List';
import Item from '../components/Item';
import db from '../db/db';

class App extends Component {
  state = {
    db:db,
    active_jam: db[0],
    active_item: db[0].exo[0]
  }

  changeActiveItem = (id) => {
    this.setState({
      active_item: db[0].exo[id-1]
    })
  }

  render() {
    return (
      <div className="container">
        <Header title={this.state.active_jam.title}/>        
        <List exercices={this.state.active_jam.exo} setActive={this.changeActiveItem}/>
        <Item data={this.state.active_item}/>
      </div>
    );
  }
}

export default App;
