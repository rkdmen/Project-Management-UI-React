import * as type from '../constants/ActionTypes';

export function projectDetail_Reducer(state = {}, action) {
  console.log(action.payload, ' detail action')

    switch (action.type) {

      case type.GET_PROJECT_DETAIL:
        return Object.assign({}, state, {
          projectDetail:action.payload.data[0]
        });

      default:
          return state;
    }

}


