import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDetail } from '../../actions/projectActions';
import { Button, Modal } from 'react-bootstrap';
import { browserHistory } from 'react-router';


export class NewProjectModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
   }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }


  render() {

    return (
      <div>
        <Button className='btn btn-newProject' bsStyle="primary" bsSize="large" onClick={this.open}>New Project</Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>New Project</h4>
            <hr />

            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent  sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>


          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

// Mainview.propTypes = {
// }

function mapStateToProps(state) {
console.log(state , 'state')
  return {
    project: state.reducer.projectDetail.projectDetail
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDetail }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps )(NewProjectModalContainer);