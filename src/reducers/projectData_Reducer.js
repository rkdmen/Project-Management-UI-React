import * as type from '../constants/ActionTypes';

export function projectData_Reducer(state = {}, action) {
  console.log(action.payload, ' action')

    switch (action.type) {

      case type.GET_DATA:
        return Object.assign({}, state, {
          projectData:action.payload.data.projects
        });

      case type.VIEW_ALL:
        return Object.assign({}, state, {
          projectData:action.payload.data.projects
        });

      case type.VIEW_ACTIVE:
        let active = action.payload.data.projects.filter((item)=> item.active);
        return Object.assign({}, ...state, {
          projectData:active
        });

      case type.VIEW_INACTIVE:
        let inactive = action.payload.data.projects.filter((item)=> !item.active);
        return Object.assign({}, ...state, {
          projectData:inactive
        });

      case type.SORT_BY_DATE:
        let sortByDate;
        if(action.payload === 'desc'){
           sortByDate = state.projectData.sort( (a, b)=> b.end_date - a.end_date);
        } else {
           sortByDate = state.projectData.sort( (a, b)=> a.end_date - b.end_date);
        }
        return Object.assign({}, ...state, {
          projectData:sortByDate
        });

      // case type.GET_DATA:
      //   return Object.assign({}, state, {
      //     projectData:action.payload.data.projects
      //   });

      // case type.GET_DATA:
      //   return Object.assign({}, state, {
      //     projectData:action.payload.data.projects
      //   });


      default:
          return state;
    }

}


