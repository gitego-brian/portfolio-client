import actionTypes from "../actions/actionTypes";

const initState = {
  projects: [],
};
const projectsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_PROJECTS:
      return {
        ...state,
        projects: payload.projects
      };
    default:
      return state;
  }
};

export default projectsReducer;