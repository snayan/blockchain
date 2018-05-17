import { appState } from './app/appState';
import { userState } from './user/userState';

export interface State {
  app: appState;
  user: userState;
}
