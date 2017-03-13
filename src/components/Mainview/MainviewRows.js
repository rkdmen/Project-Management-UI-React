import React, { Component, PropTypes } from 'react';
import { Table } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { unixConverter } from '../../helper/helper';
import MainviewColumn from '../../containers/MainviewContainers/MainviewColumn';

class MainviewRows extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
   }

  handleClick(e){
    browserHistory.push(`/project/${e.target.dataset.value}`);
  }

  render() {
    console.log(this.props, ' props!')
      return (
          <Table className="table" responsive>
            <MainviewColumn />
            <tbody>
              {
                !this.props.projects.projectData?<tr><td><p>Loading...</p></td></tr>:
                this.props.projects.projectData.map((project)=>{
                return (
                  <tr key={project.id}>
                    <td><p onClick={this.handleClick} data-value={project.id} className='projectName'>{project.name}</p></td>
                    <td><p className='projectOwner'>{project.owner.name}</p></td>
                    <td><p className='projectDue'>{unixConverter(project.end_date)}</p></td>
                    <td><p className='projectSteps'>{project.total_steps}, {project.current_step}</p></td>
                    <td><p className={project.active?'circleGreen':'circleGray'}></p></td>
                  </tr>
                )
               })
              }
            </tbody>
          </Table>
        );
  }
}

// MainviewRows.propTypes = {
// }

export default MainviewRows;