import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDetail } from '../../actions/projectActions';
import { Button } from 'react-bootstrap';
import Minus from '../../../assets/images/minus.svg';
import Plus from '../../../assets/images/plus.svg';
import RightArrow from '../../../assets/images/right-arrow.svg';
import LeftArrow from '../../../assets/images/left-arrow.svg';

export class ProjectEditContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentEdit:false,
      btnTxt:'Edit'
    }
    this.handleEditContent = this.handleEditContent.bind(this);
   }
  componentWillMount(){
    this.props.getDetail(this.props.params.id)
  }

  handleEditContent(){
    if(!this.state.contentEdit) this.setState({contentEdit:true, btnTxt:'Save'});
    if(this.state.contentEdit) this.setState({contentEdit:false, btnTxt:'Edit'});

  }

  render() {
    console.log(this.props.project, ' prop')
    return (
      !this.props.project?(<div>Loading...</div>):
      <div className='project-container container'>
        <div className="project-detail-header">
          <p>{this.props.project.name}</p>
          <p>Project Details &nbsp;<img className="minus-svg" width="25" src={Minus} /></p>
        </div>
          <div className={this.state.contentEdit?'editing':'edit'} contentEditable={this.state.contentEdit}>{this.props.project.description}</div>
          <Button bsStyle="primary" onClick={this.handleEditContent}>{this.state.btnTxt}</Button>
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

export default connect(mapStateToProps, mapDispatchToProps )(ProjectEditContainer);