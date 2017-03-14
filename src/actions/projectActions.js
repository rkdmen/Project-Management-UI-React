//Actions
import axios from 'axios';
import * as type from '../constants/ActionTypes';


export function getList(){
  const request = axios.get('api/projectData/');
    return {
      type: type.GET_DATA,
      payload: request
    }
}

export function getDetail(id){
  const request = axios.get(`api/projectData/${id}`);
    return {
      type: type.GET_PROJECT_DETAIL,
      payload: request
    }
}


export function getNextProject(id){
  const request = axios.get(`api/projectData/${id}`);
    return {
      type: type.GET_PROJECT_DETAIL,
      payload: request
    }
}
