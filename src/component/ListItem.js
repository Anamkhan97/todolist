import { Modal } from 'react-bootstrap';
import React from 'react';
import ButtonComponent from './common/Button';
import content from '../mock/MockContent';
import InputField from './common/InputField';
class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      show: false,
    };
  }
  renderName() {
    return (
      <ul>
        {this.props.task}
      </ul>
    );
  }
  //static defaultProps = content
  renderButtons() {
    return (
      <div>
        <span>
          <ButtonComponent onClick={() => this.handleEdit()} value={this.props.Content.editButtonText} />
          <ButtonComponent onClick={(this.props.deleteItem.bind(this, this.props.task))} value={this.props.Content.deleteButtonText} />

        </span>
        <Modal show={this.state.show} animation={true} onHide={() => this.handleModal()}>
          <Modal.Header>{this.props.Content.modelHeaderText}</Modal.Header>
          <Modal.Body>
            <form onClick={this.onEditClick.bind(this)}>
              <InputField type="text"
                defaultValue={this.props.task}
                handleOnChange={(e) => this.handleOnChange(e)}
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <ButtonComponent onClick={this.onSaveClick.bind(this)} value={this.props.Content.modelFooterText1} />
            <ButtonComponent onClick={() => this.handleModal()} value={this.props.Content.modelFooterText2} />
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  onEditClick() {
    this.setState({ editing: true });
  }
  onCancelClick() {
    this.setState({ editing: false });
  }
  onSaveClick(e) {
    e.preventDefault();
    this.props.saveItem(this.props.task, this.state.editInput);
    this.setState({
      show: !this.state.show,
      editing: false
    });
  }
  handleOnChange(e) {
    console.log(this.state.editInput)
    this.setState({
      editInput: e.target.value
    });
  }
  handleModal() {
    this.setState({ show: !this.state.show })
  }
  handleEdit() {
    this.onEditClick();
    this.handleModal();
  }
  render() {
    return (
      <div className="to-do-item">
        <span className="name">
          {this.renderName()}
        </span>
        <span className="actions">
          {this.renderButtons()}
        </span>
      </div>
    );
  }
}
ListItem.defaultProps = {
  Content: content
};
export default ListItem;