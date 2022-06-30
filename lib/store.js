import React from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import reducers, { INITIAL_STATE } from "../reducers";
import isServer from "../utils/is-server";

export function initializeStore(initialState = INITIAL_STATE) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}

// eslint-disable-next-line no-underscore-dangle
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

export function getOrCreateStore(initialState = INITIAL_STATE) {
  if (isServer()) {
    return initializeStore(initialState);
  }

  // eslint-disable-next-line no-underscore-dangle
  if (!window[__NEXT_REDUX_STORE__]) {
    // eslint-disable-next-line no-underscore-dangle
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  // eslint-disable-next-line no-underscore-dangle
  return window[__NEXT_REDUX_STORE__];
}

export function withReduxStore(App) {
  return class AppWithRedux extends React.Component {
    static async getInitialProps(appContext) {
      const reduxStore = getOrCreateStore();

      // eslint-disable-next-line no-param-reassign
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
}
