//Actions
import axios from 'axios';
import * as type from '../constants/ActionTypes';


function getList(){
  const request = axios.get('api/projectData/');
    return {
      type: type.GET_DATA,
      payload: request
    }
}