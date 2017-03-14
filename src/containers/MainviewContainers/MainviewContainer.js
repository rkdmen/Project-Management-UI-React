import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainviewRows from '../../components/Mainview/MainviewRows';
import NewProjectModalContainer from '../NewProjectContainer/NewProjectModalContainer';
import { getList } from '../../actions/projectActions';
import { filterViewAllAction, filterActiveAction, filterInctiveAction } from '../../actions/sortActions';

export class MainviewContainer extends Component {
  constructor(props) {
    super(props);

    this.toggleActiveClass = this.toggleActiveClass.bind(this);
    this.viewAllFilter = this.viewAllFilter.bind(this);
    this.activeFilter = this.activeFilter.bind(this);
    this.inactiveFilter = this.inactiveFilter.bind(this);
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
    this.props.filterViewAllAction();

  }

  activeFilter(e){
    this.toggleActiveClass(e);
    this.props.filterActiveAction();
  }

  inactiveFilter(e){
    this.toggleActiveClass(e);
    this.props.filterInctiveAction();
  }

  render() {
    return (
      <div className='table-container container'>
        <div className='table-nav'>
          <p className='project-title'>Projects Index</p>
            <div className='btn-group'>
              <div onClick={this.viewAllFilter} className='active btn'>View All</div>
              <div onClick={this.activeFilter} className='btn'>Active</div>
              <div onClick={this.inactiveFilter} className='btn'>Inactive</div>
            </div>
          <NewProjectModalContainer />
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
  return bindActionCreators({ getList, filterViewAllAction, filterActiveAction, filterInctiveAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps )(MainviewContainer);