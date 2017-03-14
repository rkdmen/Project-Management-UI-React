import * as type from '../constants/ActionTypes';
import axios from 'axios';

export function filterViewAllAction(){
  const request = axios.get('api/projectData/');
    return {
      type: type.VIEW_ALL,
      payload:request
    }
}

export function filterActiveAction(){
  const request = axios.get('api/projectData/');
    return {
      type: type.VIEW_ACTIVE,
      payload:request
    }
}

export function filterInctiveAction(){
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

export function sortByNameAction(sortBy){
    return {
      type: type.SORT_BY_NAME,
      payload:sortBy
    }
}

export function sortByOwnerAction(sortBy){
    return {
      type: type.SORT_BY_OWNER,
      payload:sortBy
    }
}

export function sortByStepsAction(sortBy){
    return {
      type: type.SORT_BY_STEPS,
      payload:sortBy
    }
}

export function sortByActiveAction(sortBy){
    return {
      type: type.SORT_BY_ACTIVE,
      payload:sortBy
    }
}
