import { AuthDataActionsTypes } from 'store/AuthData/actions';


const initialState: any = {
  token: 'sadsahgj',
  firstName: '',
  lastName: '',
};

const authDataReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case AuthDataActionsTypes.loginUser:
      return {
        ...state,
        token: action.payload,
      };
    case AuthDataActionsTypes.getUserPermission:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    case AuthDataActionsTypes.userLogout:
      return {
        ...state,
        token: '',
        firstName: '',
        lastName: '',
      };
    default:
      return state;
  }
};

export default authDataReducer;
