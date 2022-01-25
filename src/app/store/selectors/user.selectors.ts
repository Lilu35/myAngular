import {createFeatureSelector} from "@ngrx/store";
import {User} from "../reducers/user.reducers";
import {AppState} from "../reducers";

export const selectUserState = createFeatureSelector<AppState,User>('user');
