import { getUser } from "../../api";

export const fetchUsersRequest = () => ({
  type: "FETCH_USERS_REQUEST",
});

export const fetchUsersSuccess = users => ({
  type: "FETCH_USERS_SUCCESS",
  users,
});

export const fetchUsersFailure = error => ({
  type: "FETCH_USERS_FAILURE",
  error,
});

export const deleteUser = userId => ({
  type: "DELETE_USER",
  userId
});

export const editUser = (userId, visible) => ({
  type: "EDIT_USER",
  payload: {
    userId,
    visible
  }
 
});

export const updateUser = (user, visible) => ({
  type: "UPDATE_USER",
  payload: {
    user,
    visible
  }
})

export const addUser = obj => ({
  type: "ADD_USER",
  obj
});

export const modalOpen = visible => ({
  type: "MODAL_OPEN",
  visible,
})

export const fetchUsers = () => dispatch => {
  dispatch(fetchUsersRequest());

  getUser()
    .then(({data}) => dispatch(fetchUsersSuccess(data)))
    .catch(error => dispatch(fetchUsersFailure(error)));
};
