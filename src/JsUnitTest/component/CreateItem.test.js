import { shallow } from 'enzyme';
import CreateItem from '../../component/CreateItem';

describe('rendering createItem component', () => {
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
    createItem: fn => fn
  }
  it('should call handleOnChange method', () => {
    const value = {
      target: {
        value: "Create Item"
      }
    }
    const wrapper = shallow(<CreateItem />);
    wrapper.instance().handleOnChange(value);
    expect(wrapper.state('newItemInput')).toEqual("Create Item");

  });

  it('should call handleOnCreate method', () => {
    const value = {
      target: {
        newItemInput: ""
      }
    }
    const wrapper = shallow(<CreateItem {...props} />);
    wrapper.instance().handleOnCreate({
      preventDefault: () => { },
      value
    });
    expect(wrapper.state('newItemInput')).toEqual("");
  });

  it('renders button for handleoncreate', () => {
    const wrapper = shallow(<CreateItem {...props} />);
    wrapper.find(`[id="submit-click"]`).simulate('click', { target: { newItemInput: "" }, preventDefault: fn => fn });
    expect(wrapper.state('newItemInput')).toEqual("");
  });

  it('renders inputfield for handleonchange', () => {

    const wrapper = shallow(<CreateItem {...props} />);
    const inputField=wrapper.find(`[id="Enter-Text"]`).simulate('change', { target: { newItemInput: "" } });
    expect(inputField.find('#Enter-Text').exists()).toBe(true);
  });
});
