import * as actions from './actions';

export default (state, action) => {
  switch (action.type) {
    case actions.SET_MESSAGE:
      return {
        ...state,
        user_message: action.payload,
      };
    case actions.ENQUEUE_MESSAGE:
      return {
        ...state,
        message_queue: [...state.message_queue, action.payload],
      };
    default:
      throw new Error('Undefined Action');
  }
};
