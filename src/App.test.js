import { shallow } from 'enzyme';
import App from '../src/App';
describe('<App />', () => {
  let props = {
    content: {
      heading: "To Do List",
      addButtonText: "Add",
      editButtonText: "Edit",
      deleteButtonText: "Delete",
      modelHeaderText: "Edit your item",
      modelFooterText1: "OK",
      modelFooterText2: "Cancel",
      placeholder: "Enter task"
    },
    task: "Selected item",
    toDoItems: ["Added 1", "Added 2"]

  }
  it('should call createItem method', () => {
    const item = {
      target: {
        task: "Create new Item"
      }
    }
    const wrapper = shallow(<App {...props} />);
    wrapper.instance().createItem(item);
    wrapper.setState({
      toDoItems: [{ task: "Selected Item" }]
    })
    expect(wrapper.state('toDoItems')).toEqual([{ task: "Selected Item" }]);

  });

  it('should call findItem method', () => {
    const item = ["Selected item", "Another selected item"]
    const wrapper = shallow(<App {...props} />);
    wrapper.setState({
      toDoItems: [{ task: "Selected Item" }]
    })
    wrapper.instance().findItem(item);
    expect(wrapper.state('toDoItems')).toEqual([{ task: "Selected Item" }]);

  });
  it('should call deleteItem method', () => {
    const item = ["Selected item", "Another selected item"]
    const wrapper = shallow(<App {...props} />);
    wrapper.setState({
      toDoItems: [{ task: "Selected Item" }, { task: "Another task" }]
    })
    wrapper.instance().deleteItem(item);
    expect(wrapper.state('toDoItems')).toEqual([{ task: "Selected Item" }]);

  });

  it('should call saveItem method', () => {
    const oldItem = ["Selected item", "Another selected item"]
    const newItem = [{ selectedItem: "Added something" }, "Another aditiond item"]
    const wrapper = shallow(<App {...props} />);
    wrapper.setState({
      toDoItems: [{ task: "Selected Item" }]
    })
    wrapper.instance().saveItem(oldItem, newItem);
    expect(wrapper.state('toDoItems')).toEqual([{ task: "Selected Item" }]);

  });
});