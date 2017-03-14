import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortByDateAction, sortByNameAction, sortByOwnerAction, sortByStepsAction, sortByActiveAction } from '../../actions/sortActions';

export class MainviewColumn extends Component {
  constructor(props) {
    super(props);
    this.sortByName = this.sortByName.bind(this);
    this.sortByOwner = this.sortByOwner.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    this.sortBySteps = this.sortBySteps.bind(this);
    this.sortByActive = this.sortByActive.bind(this);

    this.state = {
      defaultSortName:'asc',
      defaultSortOwner:'asc',
      defaultSortDate:'asc',
      defaultSortStep:'asc',
      defaultSortActive:'asc'
    }
  }

  sortByName(e){
    this.props.sortByNameAction(this.state.defaultSortName === 'asc'?'desc':'asc')
    this.setState({defaultSortName: this.state.defaultSortName === 'asc'?'desc':'asc'})
  }

  sortByOwner(e){
    this.props.sortByOwnerAction(this.state.defaultSortOwner === 'asc'?'desc':'asc')
    this.setState({defaultSortOwner: this.state.defaultSortOwner === 'asc'?'desc':'asc'})
  }

  sortByDate(e){
    this.props.sortByDateAction(this.state.defaultSortDate === 'asc'?'desc':'asc')
    this.setState({defaultSortDate: this.state.defaultSortDate === 'asc'?'desc':'asc'})
  }

  sortBySteps(e){
    this.props.sortByStepsAction(this.state.defaultSortStep === 'asc'?'desc':'asc')
    this.setState({defaultSortStep: this.state.defaultSortStep === 'asc'?'desc':'asc'})
  }

  sortByActive(e){
    this.props.sortByActiveAction(this.state.defaultSortActive === 'asc'?'desc':'asc')
    this.setState({defaultSortActive: this.state.defaultSortActive === 'asc'?'desc':'asc'})
  }

  render() {
      return (
            <thead>
              <tr>
                <th onClick={this.sortByName}><p>Project Name</p></th>
                <th onClick={this.sortByOwner}><p>Owner:</p></th>
                <th onClick={this.sortByDate}><p>Due:</p></th>
                <th onClick={this.sortBySteps}><p>Steps</p></th>
                <th onClick={this.sortByActive}><p>Active:</p></th>
              </tr>
            </thead>
        );
  }
}

// MainviewColumn.propTypes = {
// }


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sortByDateAction, sortByNameAction, sortByOwnerAction, sortByStepsAction, sortByActiveAction }, dispatch);
}

export default connect(null, mapDispatchToProps )(MainviewColumn);
