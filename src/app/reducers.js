import { combineReducers } from "redux"
import homeReducer from '../views/home/reducer'
import NavBarReducer from '../views/NavBar/reducer'
import sidebarReducer from '../views/sidebar/reducer'
import solutionReducer from '../views/solution/reducer'
import contactReducer from '../views/contact/reducer'
import footersmReducer from '../components/footersm/reducer'
import isrlognReducer from '../components/isrlogn/reducer'
import toploginReducer from '../components/toplogin/reducer'
import nightauditReducer from '../components/nightaudit/reducer'
import reviewReducer from '../components/review/reducer'
import pdfviewrReducer from '../components/pdfviewr/reducer'
import fileuploadReducer from '../components/fileupload/reducer'
import scandocReducer from '../components/scandoc/reducer'
import scandocpreReducer from '../components/scandocpre/reducer'

/**
 * Defines mapping of individual view reducers to global state object.
 *
 * Every time a new view is created, entry for that view's reducer is required here.
 *
 * @type {Reducer<any>}
 */
export const reducers = combineReducers({
  home: homeReducer,
  NavBar: NavBarReducer,
  sidebar: sidebarReducer,
  solution: solutionReducer,
  contact: contactReducer,
  footersm: footersmReducer,
  isrlogn: isrlognReducer,
  toplogin: toploginReducer,
  nightaudit: nightauditReducer,
  review: reviewReducer,
  pdfviewr: pdfviewrReducer,
  fileupload: fileuploadReducer,
  scandoc: scandocReducer,
  scandocpre: scandocpreReducer,
});