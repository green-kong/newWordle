"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/outline.jsx


const OutlineDiv = external_styled_components_default().div.withConfig({
  displayName: "outline__OutlineDiv",
  componentId: "sc-19cugj1-0"
})(["padding:0;width:600px;margin:0 auto;"]);

const Outline = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(OutlineDiv, {
    children: children
  });
};

/* harmony default export */ const outline = (Outline);
;// CONCATENATED MODULE: ./components/header.jsx


const StyledHeader = external_styled_components_default().div.withConfig({
  displayName: "header__StyledHeader",
  componentId: "sc-1udy5j1-0"
})(["width:100%;height:100px;border-bottom:2px solid black;line-height:100px;text-align:center;font-size:30px;font-weight:700;"]);

const Header = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(StyledHeader, {
    children: "WORDLE"
  });
};

/* harmony default export */ const header = (Header);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "redux-saga"
const external_redux_saga_namespaceObject = require("redux-saga");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_namespaceObject);
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
// EXTERNAL MODULE: ./reducer/user/userActions.js
var userActions = __webpack_require__(7580);
;// CONCATENATED MODULE: ./reducer/user/user.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  isLogin: false,
  userInfo: null,
  loading: false,
  joinLoading: false,
  error: null
};

const user = (state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case userActions/* default.LOGIN_REQUEST */.Z.LOGIN_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case userActions/* default.LOGIN_SUCCESS */.Z.LOGIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        userInfo: payload,
        isLogin: true
      });

    case userActions/* default.LOGOUT */.Z.LOGOUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLogin: false,
        userInfo: null
      });

    case userActions/* default.JOIN_REQUEST */.Z.JOIN_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        joinLoading: true,
        isLogin: false,
        userInfo: null,
        error: null
      });

    case userActions/* default.JOIN_SUCCESS */.Z.JOIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLogin: true,
        userInfo: payload,
        joinLoading: false,
        error: null
      });

    case userActions/* default.JOIN_FAILURE */.Z.JOIN_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        joinLoading: false,
        error: payload
      });

    default:
      return state;
  }
};

/* harmony default export */ const user_user = (user);
;// CONCATENATED MODULE: ./reducer/index.js




const persist = {
  key: 'user',
  storage: (storage_default()),
  whitelist: ['user']
};
const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
  user: user_user
});
/* harmony default export */ const reducer = ((0,external_redux_persist_namespaceObject.persistReducer)(persist, rootReducer));
;// CONCATENATED MODULE: external "redux-saga/effects"
const effects_namespaceObject = require("redux-saga/effects");
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./api/user/login.js

(external_axios_default()).defaults.baseURL =  true ? '43.200.18.7' : 0;
const loginAPI = async payload => {
  const url = '/api/user/login';
  const response = await external_axios_default().post(url, payload);
  return response.data;
};
const verifyAPI = async payload => {
  const url = '/api/user/me';
  const option = {
    headers: {
      Authorization: `Bearer ${payload.token}`
    }
  };
  const response = await external_axios_default().post(url, null, option);
  return response.data;
};
const joinAPI = async payload => {
  const url = '/api/user/join';
  const response = await external_axios_default().post(url, payload);
  return response.data;
};
;// CONCATENATED MODULE: ./redux/user.js
const _excluded = ["passwordCheck"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function* login({
  type,
  payload
}) {
  const result = yield (0,effects_namespaceObject.call)(loginAPI, payload);

  if (result.token) {
    const {
      user
    } = yield (0,effects_namespaceObject.call)(verifyAPI, result);
    yield (0,effects_namespaceObject.put)(userActions/* default.loginSuccess */.Z.loginSuccess(user));
  }
}

function* join({
  type,
  payload
}) {
  const {
    passwordCheck
  } = payload,
        body = _objectWithoutProperties(payload, _excluded);

  const result = yield (0,effects_namespaceObject.call)(joinAPI, body);

  if (result.result) {
    yield (0,effects_namespaceObject.put)(userActions/* default.joinSuccess */.Z.joinSuccess(result.user));
  } else {
    console.log(result);
    yield (0,effects_namespaceObject.put)(userActions/* default.joinFailure */.Z.joinFailure(result.msg));
  }
}

function* redux_user_user() {
  yield (0,effects_namespaceObject.takeLatest)(userActions/* default.LOGIN_REQUEST */.Z.LOGIN_REQUEST, login);
  yield (0,effects_namespaceObject.takeLatest)(userActions/* default.JOIN_REQUEST */.Z.JOIN_REQUEST, join);
}
;// CONCATENATED MODULE: ./redux/index.js


function* rootSaga() {
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.fork)(redux_user_user)]);
}
;// CONCATENATED MODULE: external "redux-persist/integration/react"
const react_namespaceObject = require("redux-persist/integration/react");
;// CONCATENATED MODULE: ./store/useStore.js









const sagaMiddleware = external_redux_saga_default()();
const middlewares = [sagaMiddleware];
const enhancer =  true ? (0,external_redux_namespaceObject.compose)((0,external_redux_namespaceObject.applyMiddleware)(...middlewares)) : 0;
const store = (0,external_redux_namespaceObject.createStore)(reducer, enhancer);
sagaMiddleware.run(rootSaga);
const persistor = (0,external_redux_persist_namespaceObject.persistStore)(store);

const Store = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
    store: store,
    children: /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.PersistGate, {
      loading: null,
      persistor: persistor,
      children: children
    })
  });
};

/* harmony default export */ const useStore = (Store);
;// CONCATENATED MODULE: ./pages/_app.jsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(useStore, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(outline, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))]
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [580], () => (__webpack_exec__(5613)));
module.exports = __webpack_exports__;

})();