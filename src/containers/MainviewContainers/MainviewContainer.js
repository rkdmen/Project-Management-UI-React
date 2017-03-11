import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';
import { addPayee } from '../../actions/actions';

export class MainviewContainer extends Component {
  constructor(props) {
    super(props);

    this.toggleActiveClass = this.toggleActiveClass.bind(this);
    this.viewAllFilter = this.viewAllFilter.bind(this);
    this.activeFilter = this.activeFilter.bind(this);
    this.inactiveFilter = this.inactiveFilter.bind(this);
   }

  toggleActiveClass(e){
      let active = document.querySelector('.active');
      active.classList.remove('active');
      e.target.classList.add('active')
  }

  viewAllFilter(e){
    this.toggleActiveClass(e);
  }

  activeFilter(e){
    this.toggleActiveClass(e);
  }

  inactiveFilter(e){
    this.toggleActiveClass(e);

  }



  render() {
      return (
        <div className='table-container container'>
          <div className='table-nav'>
            <p className='project-title'>Projects Index</p>
              <div className='btn-group'>
                <div ref='active' onClick={this.viewAllFilter} className='active btn'>View All</div>
                <div ref='active' onClick={this.activeFilter} className='btn'>Active</div>
                <div ref='active' onClick={this.inactiveFilter} className='btn'>Inactive</div>
              </div>

          </div>
        </div>
      );
  }
}

// Mainview.propTypes = {
// }

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps )(MainviewContainer);