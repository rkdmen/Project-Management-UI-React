import { combineReducers } from 'redux';
import { projectData_Reducer } from './projectData_Reducer';
import { projectDetail_Reducer } from './projectDetail_Reducer';

const rootReducer = combineReducers({
  projectDatas: projectData_Reducer,
  projectDetail: projectDetail_Reducer
});

export default rootReducer;