"use strict";
exports.id = 580;
exports.ids = [580];
exports.modules = {

/***/ 7580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
    return {
      type: this.LOGIN_REQUEST,
      payload
    };
  }

  loginSuccess(payload) {
    return {
      type: this.LOGIN_SUCCESS,
      payload
    };
  }

  loginFailure(payload) {
    return {
      type: this.LOGIN_FAILURE,
      payload
    };
  }

  joinRequest(payload) {
    return {
      type: this.JOIN_REQUEST,
      payload
    };
  }

  joinSuccess(payload) {
    return {
      type: this.JOIN_SUCCESS,
      payload
    };
  }

  joinFailure(payload) {
    return {
      type: this.JOIN_FAILURE,
      payload
    };
  }

  logout() {
    return {
      type: this.LOGOUT
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new UserActions());

/***/ })

};
;