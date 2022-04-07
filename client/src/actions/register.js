import * as api from "../api ";

// Action Creators
export const registerHandler = () => async (dispatch) => {
  try {
    const { data } = await api.registerHandler();

    dispatch({ type: "REGISTER_HANDLER", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
