import React from "react";
import ListItem from './ListItem';

class ToDoList extends React.Component {
  renderItems() {
    return this.props.toDoItems.map((item, index) => <ListItem key={index} {...item} {...this.props} />);
  }
  render() {
    return (
      <div className="items-list">
        {this.renderItems()}
      </div>
    );
  }
}
export default ToDoList;