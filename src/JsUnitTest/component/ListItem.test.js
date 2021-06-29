import { shallow } from 'enzyme';

import ListItem from '../../component/ListItem';

describe('<ListItem />', () => {
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
    task: "Edited Item",
    editInput: "updated value",
    deleteItem: fn => fn,
    saveItem: fn => fn,

  }


  it('should call handleModal method', () => {
    const value = {
      target: {
        show: true
      }
    }
    const wrapper = shallow(<ListItem {...props} />);
    wrapper.instance().handleModal(value);
    expect(wrapper.state('show')).toEqual(true);

  });
  it('should call onEditClick method', () => {
    const value = {
      target: {
        editing: true
      }
    }
    const wrapper = shallow(<ListItem {...props} />);
    wrapper.instance().onEditClick(value);
    expect(wrapper.state('editing')).toEqual(true);
  });

  it('should call onCancelClick method', () => {
    const value = {
      target: {
        editing: false
      }
    }
    const wrapper = shallow(<ListItem {...props} />);
    wrapper.instance().onCancelClick(value);
    expect(wrapper.state('editing')).toEqual(false);
  });

  it('should call handleEdit method', () => {
    const value = {
      target: {
        show: true
      }
    }
    const wrapper = shallow(<ListItem {...props} />);
    wrapper.instance().handleEdit(value);
    expect(wrapper.state('show')).toEqual(true);
  });
  it('should call handleOnChange method', () => {
    const value = {
      target: {
        editInput: "make changes"
      }
    }
    const wrapper = shallow(<ListItem {...props} />);
    wrapper.instance().handleOnChange(value);
    expect(wrapper.exists()).toBe(true);
    
  });
  it('should call onSaveClick method', () => {
    const value = {
      preventDefault: fn => fn,

    }
    const wrapper = shallow(<ListItem {...props} />);
    wrapper.instance().onSaveClick(value);
    expect(wrapper.exists()).toBe(true);
  });
  
  it('renders inputfield for handleModal', () => {
    const wrapper = shallow(<ListItem {...props} />);
    wrapper.find(`[id="edited-popup"]`).simulate('hide', { target: { show: true } });
    expect(wrapper.state('show')).toEqual(true);
  });

  it('renders inputfield for handleoncreate', () => {
    const wrapper = shallow(<ListItem {...props} />);
    wrapper.find(`[id="cancel-button"]`).simulate('click', { target: { editing: false } });
    expect(wrapper.state('editing')).toEqual(false);
  });

  it('renders button for saveItem', () => {
    const wrapper = shallow(<ListItem {...props} />);
    const editField = wrapper.find(`[id="edited-field"]`).simulate('change', { target: { editInput: "Edited task" } });
    expect(editField.find('#edited-field').exists()).toBe(true);
  });

  it('renders button for handleOnEdit', () => {
    const wrapper = shallow(<ListItem {...props} />);
    const editButton = wrapper.find(`[id="edit-button"]`).simulate('click', { onEditClick: fn => fn, handleModal: fn => fn });
    expect(editButton.find('#edit-button').exists()).toBe(true);
  });
});
