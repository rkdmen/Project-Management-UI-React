import * as type from '../constants/ActionTypes';

export function projectDetail_Reducer(state = {}, action) {
    switch (action.type) {

      case type.GET_PROJECT_DETAIL:
      console.log(action.payload.data[0], ' reducer1')
      console.log(action.payload.data, ' reduce22r')
        return Object.assign({}, state, {
          projectDetail:action.payload.data[0]
        });

      default:
          return state;
    }

}


