import React, { Component } from 'react';
import './Styles.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newItem:"",
      list: []
    }
  }

  updateInput(key, value) {
    //Atualizar o state do React
    this.setState({
      [key]: value
    })
  }

  addItem() {
    //criar um item com uma ID única
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //Cópia da lista atual de itens
    const list = [...this.state.list];

    //Adicionar um novo item a lista
    list.push(newItem);

    //Atualizar o estado com um novo item da lista e resetar o newItem input
    this.setState({
      list,
      newItem:""
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id)
    this.setState({list: updatedList});
  }

  render() {
    return(
      <div className="header">
        <div className="titulo">
          MY LIST
        </div>
        <div className="App">
          <div>
            <p>Adicionar item...</p>
            <br />
            <input type="text" placeholder="O que temos para hoje?" value={this.state.newItem}
                  onChange={e => this.updateInput('newItem', e.target.value)} className="add"/>
            <button onClick={() => this.addItem()}> Add </button>   
            <br />
            <ul>
              {this.state.list.map(item => {
                return(
                  <li key={item.id}>
                    {item.value}
                    <button onClick={() => this.deleteItem(item.id)} className="deleteButton">X</button>
                  </li>
                );
              })}
            </ul>  
          </div>
        </div>
      </div>
    );
  }
}

export default App;