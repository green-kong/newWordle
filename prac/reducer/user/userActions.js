class UserActions {
  constructor() {
    this.LOGIN_REQUEST = 'USER/LOGIN_REQUEST';
    this.LOGIN_SUCCESS = 'USER/LOGIN_SUCCESS';
    this.LOGIN_FAILURE = 'USER/LOGIN_FAILURE';

    this.JOIN_REQUEST = 'USER/JOIN_REQUEST';
    this.JOIN_SUCCESS = 'USER/JOIN_SUCCESS';
    this.JOIN_FAILURE = 'USER/JOIN_FAILURE';

    this.LOGOUT = 'USER/LOGOUT';
  }

  loginRequest(payload) {
    return { type: this.LOGIN_REQUEST, payload };
  }

  loginSuccess(payload) {
    return { type: this.LOGIN_SUCCESS, payload };
  }

  loginFailure(payload) {
    return { type: this.LOGIN_FAILURE, payload };
  }

  joinRequest(payload) {
    return { type: this.JOIN_REQUEST, payload };
  }

  joinSuccess(payload) {
    return { type: this.JOIN_SUCCESS, payload };
  }

  joinFailure(payload) {
    return { type: this.JOIN_FAILURE, payload };
  }

  logout() {
    return { type: this.LOGOUT };
  }
}

export default new UserActions();
