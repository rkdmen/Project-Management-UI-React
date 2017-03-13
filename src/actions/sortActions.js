import * as type from '../constants/ActionTypes';
import axios from 'axios';

export function filterViewAll(){
  const request = axios.get('api/projectData/');
    return {
      type: type.VIEW_ALL,
      payload:request
    }
}

export function filterActive(){
  const request = axios.get('api/projectData/');
    return {
      type: type.VIEW_ACTIVE,
      payload:request
    }
}

export function filterInctive(){
  const request = axios.get('api/projectData/');
    return {
      type: type.VIEW_INACTIVE,
      payload:request
    }
}

export function sortByDateAction(sortBy){
    return {
      type: type.SORT_BY_DATE,
      payload:sortBy
    }
}

