import {createReducer, on} from "@ngrx/store";
import {signInSuccess} from "../actions/user.actions";

export interface User{
  firstName: string | null
  lastName: string | null
  email: string | null
}

export const initialUserState: User = {
  firstName: null,
  lastName: null,
  email: null
};

export const reducer = createReducer(
  initialUserState,
  on(signInSuccess,(state,{user})=>({
    ...state,
    ...user
  }))
);
