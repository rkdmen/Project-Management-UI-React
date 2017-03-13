import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDetail } from '../../actions/projectActions';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
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
    this.handleKeyDown = this.handleKeyDown.bind(this);
   }

  componentWillMount(){
    this.props.getDetail(this.props.params.id)
    document.addEventListener("keydown", this.handleKeyDown);
    /* Below console.error removes Warning:
      A component is contentEditable and contains children managed by React.
    */
    console.error = (function() {
      let error = console.error
      return function(exception) {
        if ((exception + '').indexOf('Warning: A component is `contentEditable`')){
          error.apply(console, arguments);
        }
      }
    })();
  }

  handleEditContent(){
    if(!this.state.contentEdit) this.setState({contentEdit:true, btnTxt:'Save'});
    if(this.state.contentEdit) this.setState({contentEdit:false, btnTxt:'Edit'});

  }

  handleClick(e){
  }

  collapseDetail(e){
    let idx = e.target.dataset.value === 'project' ? 0 : 1;
    let desc = document.getElementsByClassName('descContent');
    let img = document.getElementsByClassName('minus-plus');
    if(desc[idx].style.display === 'none'){
      desc[idx].style.display = 'block';
      img[idx].src = Minus;
      return;
    }
    desc[idx].style.display = 'none';
    img[idx].src = Plus;
  }


  handleKeyDown(e) {
    let ESCAPE_KEY = 27;
    if (e.keyCode === ESCAPE_KEY) {
      browserHistory.push('/');
    }
  }

   componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyDown);
   }

  render() {
    console.log(this.props.project, ' prop')
    return (
      !this.props.project?(<div>Loading...</div>):
      <div onKeyDown={this.handleKeyDown}  className='project-container container'>
        <div className="project-detail-header">
          <p>{this.props.project.name}</p>
          <p><img onClick={this.collapseDetail} data-value='project' className="minus-plus" width="22" src={Minus} /> &nbsp;Project Details</p>
        </div>
          <div className={this.state.contentEdit?'editing descContent':'edit descContent'} contentEditable={this.state.contentEdit}>{this.props.project.description}</div>
          <Button bsStyle="primary" className="pull-right" onClick={this.handleEditContent}>{this.state.btnTxt}</Button>
          <div>
            <p><img onClick={this.collapseDetail} className="minus-plus" width="22" src={Minus} />&nbsp;Project Owner</p>
            <div className='descContent'>
              <p><img src={this.props.project.owner.image} data-value='ownerDetail' className="profile-pic" alt="owner-image"/>{this.props.project.owner.name}</p>
              <div className="overLay-progressBar" style={{height:'24px',width:'25%'}}>
                <div className="inner-progressBar" style={{height:'24px',width:'25%'}}></div>
              </div>
              <div className="steps">{this.props.project.current_step}&nbsp;/&nbsp;{this.props.project.total_steps}</div>
            </div>
          </div>
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