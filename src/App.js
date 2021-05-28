import React from 'react';
import './App.css';
import CreateItem from './component/CreateItem';
import ToDoList from './component/TodoList';
import content from './mock/MockContent';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoItems: []
    };
  }

  createItem(item) {
    this.state.toDoItems.unshift({
      task: item
    });
    this.setState({
      toDoItems: this.state.toDoItems
    });
  }

  findItem(item) {
    return this.state.toDoItems.filter((element) => element.task === item)[0];
  }
  saveItem(oldItem, newItem) {
    let selectedItem = this.findItem(oldItem);
    selectedItem.task = newItem;
    this.setState({ toDoItems: this.state.toDoItems });
  }

  deleteItem(item) {
    let index = this.state.toDoItems.map(element => element.task).indexOf(item);
    this.state.toDoItems.splice(index, 1);
    this.setState({ toDoItems: this.state.toDoItems });
  }

  render() {
    return (
      <div className="to-do-app">
        <div className="header">
          <h1>{this.props.Content.heading}</h1>
        </div>
        <CreateItem createItem={this.createItem.bind(this)} />
        <ToDoList toDoItems={this.state.toDoItems} deleteItem={this.deleteItem.bind(this)} saveItem={this.saveItem.bind(this)} />
      </div>
    );
  }
}
App.defaultProps = {
  Content: content
};

export default App;