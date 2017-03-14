import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDetail, getNextProject } from '../../actions/projectActions';
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
    this.handleNextProjectBtn = this.handleNextProjectBtn.bind(this);
    this.handlePrevProjectBtn = this.handlePrevProjectBtn.bind(this);
   }

  componentWillMount(){
    this.props.getDetail(this.props.params.id)
    document.addEventListener('keydown', this.handleKeyDown);
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
    if(!this.state.contentEdit){
      this.setState({contentEdit:true, btnTxt:'Save'});
    }
    if(this.state.contentEdit){
      this.setState({contentEdit:false, btnTxt:'Edit'});
    }
  }

  collapseDetail(e){
    let idx = e.target.dataset.value === 'project' ? 0 : 1; //0 is Project Details 'div, 1 is Project Owner 'div'
    let desc = document.getElementsByClassName('descContent');
    let img = document.getElementsByClassName('minus-plus');
    let btn = document.getElementsByClassName('pull-right');
    if(idx === 0){
      //this block is for hiding/showing edit button only
      if(btn[0].style.display === 'none'){
        btn[0].style.display= 'block';
      } else {
        btn[0].style.display = 'none';
      }
    }
    if(desc[idx].style.display === 'none'){
      //this block changes description content display: none or block by selecting index
      //Also changes the source of image between Minus and Plus
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

  handleNextProjectBtn(){
    this.props.getNextProject(Number(this.props.params.id)+1)
    .then(()=>{
      browserHistory.push(`/project/${this.props.project.id}`)
    })
  }

  handlePrevProjectBtn(){
    this.props.getNextProject(Number(this.props.params.id)-1)
    .then(()=>{
      browserHistory.push(`/project/${this.props.project.id}`)
    })
  }

   componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown);
   }

  render() {
    return (
      !this.props.project?(<div>Loading...</div>):
      <div onKeyDown={this.handleKeyDown}  className='project-container container'>
        <div className='project-detail-header'>
          <p>{this.props.project.name}</p>
          <p><img onClick={this.collapseDetail} data-value='project' className='minus-plus' width='22' src={Minus} />&nbsp;Project Details</p>
        </div>
        <div className={this.state.contentEdit?'editing descContent':'edit descContent'} contentEditable={this.state.contentEdit}>
          {this.props.project.description}
        </div>
        <Button bsStyle='primary' className='pull-right' onClick={this.handleEditContent}>{this.state.btnTxt}</Button>
        <div>
          <p><img onClick={this.collapseDetail} className='minus-plus' width='22' src={Minus} />&nbsp;Project Owner</p>
          <div className='descContent descContent-owner'>
            <p className='owner-name'>
              <img src={this.props.project.owner.image} data-value='ownerDetail' className='profile-pic' alt='owner-image'/>&nbsp;{this.props.project.owner.name}
            </p>
            <div className='overLay-progressBar' style={{height:'24px',width:'25%'}}>
              <div className='inner-progressBar' style={{height:'24px',width:'25%'}}></div>
            </div>
            <div className='steps'>
              <span className={this.props.project.active?'greenActiveText':''}>&nbsp;&nbsp;{this.props.project.current_step}</span>
              &nbsp;/&nbsp;{this.props.project.total_steps}
            </div>
          </div>
        </div>
        <img onClick={this.handlePrevProjectBtn} className='left-arrow' src={LeftArrow} width='30' alt="right-arrow"/>
        <img onClick={this.handleNextProjectBtn} className='right-arrow' src={RightArrow} width='30' alt="right-arrow"/>
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
  return bindActionCreators({ getDetail, getNextProject }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps )(ProjectEditContainer);