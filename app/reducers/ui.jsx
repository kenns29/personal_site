import {VIEW} from '../actions/action-ui';
export default function (state = {
  view: 'projects'
}, action) {
  switch(action.type){
    case VIEW.SET_VIEW:
      return Object.assign({}, state, {view:action.value});
    default:
      return state;
  }
};
