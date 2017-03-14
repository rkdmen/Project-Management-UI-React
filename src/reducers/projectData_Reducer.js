import * as type from '../constants/ActionTypes';

export function projectData_Reducer(state = {}, action) {
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

      case type.SORT_BY_NAME:
        let sortByName;
        if(action.payload === 'desc'){
          sortByName = state.projectData.sort((a, b)=> {
            let nameA = a.name.toLowerCase(), nameB=b.name.toLowerCase();
            if (nameA > nameB) return -1;
            if (nameA < nameB) return 1;
            return 0;
          });
        } else {
          sortByName = state.projectData.sort((a, b)=> {
            let nameA = a.name.toLowerCase(), nameB=b.name.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
          });
        }
        return Object.assign({}, ...state, {
          projectData:sortByName
        });

      case type.SORT_BY_OWNER:
        let sortByOwner;
        if(action.payload === 'desc'){
          sortByOwner = state.projectData.sort((a, b)=> {
            let nameA = a.owner.name.toLowerCase(), nameB=b.owner.name.toLowerCase();
            if (nameA > nameB) return -1;
            if (nameA < nameB) return 1;
            return 0;
          });
        } else {
          sortByOwner = state.projectData.sort((a, b)=> {
            let nameA = a.owner.name.toLowerCase(), nameB=b.owner.name.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
          });
        }
        return Object.assign({}, ...state, {
          projectData:sortByOwner
        });

      case type.SORT_BY_STEPS:
        //It sorts by converting into percentage and 100% to 0% for 'desc'. Vice versa for 'asc'.
        let sortBySteps;
        if(action.payload === 'desc'){
           sortBySteps = state.projectData.sort( (a, b)=> {
            let percA = a.current_step / a.total_steps;
            let percB = b.current_step / b.total_steps;
            return percA - percB;
           })
        } else {
           sortBySteps = state.projectData.sort( (a, b)=> {
            let percA = a.current_step / a.total_steps;
            let percB = b.current_step / b.total_steps;
            return percB - percA;
           })
        }
        return Object.assign({}, ...state, {
          projectData:sortBySteps
        });

      case type.SORT_BY_ACTIVE:
        let sortByActive;
        if(action.payload === 'desc'){
          console.log('desc')
           sortByActive = state.projectData.sort( (a, b)=> b.active - a.active);
        } else {
           sortByActive = state.projectData.sort( (a, b)=> a.active - b.active);
        }
        return Object.assign({}, ...state, {
          projectData:sortByActive
        });

      default:
          return state;
    }

}

