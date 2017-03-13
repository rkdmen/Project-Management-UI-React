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
      return (
          <Table className="table" responsive>
            <MainviewColumn />
            <tbody>
              {
                !this.props.projects.projectData?<tr><td><p>Loading...</p></td></tr>:
                this.props.projects.projectData.map((project)=>{
                  let progressPercent = Math.abs(project.current_step/project.total_steps)*100
                  console.log(progressPercent, '%')
                  return (
                    <tr key={project.id}>
                      <td><p onClick={this.handleClick} data-value={project.id} className='projectName'>{project.name}</p></td>
                      <td><p className='projectOwner'>{project.owner.name}</p></td>
                      <td><p className='projectDue'>{unixConverter(project.end_date)}</p></td>
                      <td>
                      <div className='currentStep-tr'>{project.current_step}&nbsp;</div>
                      <div className="overLay-progressBar" >
                          <div className="inner-progressBar" style={{width:`${progressPercent}%`}}></div>
                        </div>
                        <div className='totalStep-tr'>{project.total_steps}</div>
                      </td>
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