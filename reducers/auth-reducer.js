import INITIAL_STATE from "./initial-state";
import { TYPES } from "../actions/auth-modal-actions";

const authModalReducer = (state = INITIAL_STATE.authModal, action) => {
  switch (action.type) {
    case TYPES.OPEN_AUTH_MODAL: {
      return {
        open: true,
      };
    }

    case TYPES.CLOSE_AUTH_MODAL: {
      return {
        open: false,
      };
    }

    default:
      return state;
  }
};

export default authModalReducer;
