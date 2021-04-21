const initialState = {
  items: [],
  isLoading: false,
  error: null,
  modalOpening: false,
  isEditingUser: false,
  editingUser: { id: null, name: "", email: "" },
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case "FETCH_USERS_REQUEST":
      return {
        items: [],
        isLoading: false,
        error: null,
        modalOpening: false,
        isEditingUser: false,
        editingUser: { id: null, name: "", email: "" },
      };

    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        items: action.users,
        isLoading: true,
      };

    case "FETCH_USERS_FAILURE":
      return {
        ...state,
        error: action.error,
      };

    case "DELETE_USER":
      const currentUser = state.items.find(item => item.id === action.userId);
      const indexUser = state.items.findIndex(
        (item) => item.id === currentUser.id
      );

      return {
        ...state,
        items: [
          ...state.items.slice(0, indexUser),
          ...state.items.slice(indexUser + 1),
        ],
      };
    case "MODAL_OPEN":
      return {
        ...state,
        modalOpening: action.visible,
      };

    case "ADD_USER":
      action.obj.id = state.items.length + 1;
      const addedUser = action.obj;
      return {
        ...state,
        items: [...state.items, addedUser],
      };

    case "EDIT_USER":
      const curentItem = state.items.find( item => item.id === action.payload.userId
      );

      return {
        ...state,
        isEditingUser: action.payload.visible,
        editingUser: curentItem,
      };

    case "UPDATE_USER":
      return {
        ...state,
        isEditingUser: action.payload.visible,
        items: state.items.map(item => item.id === action.payload.user.id ? action.payload.user : item),
      };
    default:
      return state;
  }
};
