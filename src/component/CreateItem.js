import React from 'react';
import content from '../mock/MockContent';
import ButtonComponent from './common/Button';

import InputField from './common/InputField';
class CreateItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      newItemInput: ''
    });
  }

  handleOnCreate(e) {
    e.preventDefault();
    Promise.resolve(this.props.createItem(this.state.newItemInput)).then(() => {
      this.setState({ newItemInput: "" });
    })
  }
  handleOnChange(e) {
    this.setState({
      newItemInput: e.target.value
    })
  }

  render() {
    return (
      <div className="create-new">
         <InputField
          type="text"
          placeholder={this.props.Content.placeholder}
          value={this.state.newItemInput}
          handleOnChange={(e) => this.handleOnChange(e)} />
        <ButtonComponent value={this.props.Content.addButtonText}
          onClick={(e) => { this.handleOnCreate(e) }} />
      </div>
    );
  }
}
CreateItem.defaultProps = {
  Content: content
};
export default CreateItem;