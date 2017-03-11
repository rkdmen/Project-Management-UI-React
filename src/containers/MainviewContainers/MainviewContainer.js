import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';
import { addPayee } from '../../actions/actions';

export class MainviewContainer extends Component {
  constructor(props) {
    super(props);
   }

  toggleActiveClass(){

  }

  viewAllFilter(){

  }

  activeFilter(){

  }

  inactiveFilter(){

  }



  render() {
      return (
        <div className="table-container container">
          <div className="table-nav">
            <p className="project-title">Projects Index</p>

              <div onClick={this.viewallFilter} className='active btn'>View All</div>
              <div onClick={this.activeFilter} className='btn'>Active</div>
              <div onClick={this.inactiveFilter} className='btn'>Inactive</div>

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