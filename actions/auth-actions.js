import axios from 'axios';

export const TYPES = {
  SIGN_IN: "SIGN_IN",
};

export function signInUser(user) {
  return { type: TYPES.SIGN_IN, user };
}

export function signIn(authObject) {
  return (dispatch) => axios.post("users/sign_in", authObject).then(
    ({ data: { data: user } }) => {
      if (user.just_created) {
        console.log('signup success');
      }
      return dispatch(signInUser(user));
    },
  );
}
