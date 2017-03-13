import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainviewRows from '../../components/Mainview/MainviewRows';
import { getList } from '../../actions/projectActions';
import { filterViewAll, filterActive, filterInctive } from '../../actions/sortActions';

export class MainviewContainer extends Component {
  constructor(props) {
    super(props);

    this.toggleActiveClass = this.toggleActiveClass.bind(this);
    this.viewAllFilter = this.viewAllFilter.bind(this);
    this.activeFilter = this.activeFilter.bind(this);
    this.inactiveFilter = this.inactiveFilter.bind(this);
    this.newProject = this.newProject.bind(this);
   }

  componentWillMount() {
      this.props.getList();
  }

  toggleActiveClass(e){
      let active = document.querySelector('.active');
      active.classList.remove('active');
      e.target.classList.add('active')
  }

  viewAllFilter(e){
    this.toggleActiveClass(e);
    this.props.filterViewAll();

  }

  activeFilter(e){
    this.toggleActiveClass(e);
    this.props.filterActive();
  }

  inactiveFilter(e){
    this.toggleActiveClass(e);
    this.props.filterInctive();
  }

  newProject(e){

  }

  render() {
    console.log(this.props, ' props in container')
    return (
      <div className='table-container container'>
        <div className='table-nav'>
          <p className='project-title'>Projects Index</p>
            <div className='btn-group'>
              <div onClick={this.viewAllFilter} className='active btn'>View All</div>
              <div onClick={this.activeFilter} className='btn'>Active</div>
              <div onClick={this.inactiveFilter} className='btn'>Inactive</div>
            </div>
          <div onClick={this.newProject} className='btn btn-newProject'>New Project</div>
        </div>
        <div className='lineBreak'></div>
        <MainviewRows
          projects={this.props.projects}
         />
      </div>
    );
  }
}

// Mainview.propTypes = {
// }

function mapStateToProps(state) {
  return {
    projects: state.reducer.projectDatas
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getList, filterViewAll, filterActive, filterInctive }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps )(MainviewContainer);