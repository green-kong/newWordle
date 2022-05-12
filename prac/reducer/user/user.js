import userActions from './userActions';

const initialState = {
  isLogin: false,
  userInfo: null,
  loading: false,
  joinLoading: false,
  error: null,
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case userActions.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case userActions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: payload,
        isLogin: true,
      };

    case userActions.LOGOUT:
      return {
        ...state,
        isLogin: false,
        userInfo: null,
      };

    case userActions.JOIN_REQUEST:
      return {
        ...state,
        joinLoading: true,
        isLogin: false,
        userInfo: null,
        error: null,
      };

    case userActions.JOIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        userInfo: payload,
        joinLoading: false,
        error: null,
      };

    case userActions.JOIN_FAILURE:
      return {
        ...state,
        joinLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default user;
