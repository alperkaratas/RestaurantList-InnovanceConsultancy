export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_USERNAME':
      state.userName = action.payload;
      return {...state};

    default:
      return state;
  }
}
