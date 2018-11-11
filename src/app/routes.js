import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import NotFound from "../views/notfound"
import Home from "../views/home"
import NavBar from '../views/NavBar'
import Sidebar from '../views/sidebar'
import Solution from '../views/solution'
import Contact from '../views/contact'
import Footersm from '../components/footersm'
import Isrlogn from '../components/isrlogn'
import Toplogin from '../components/toplogin'
import Nightaudit from '../components/nightaudit'
import Review from '../components/review'
import Pdfviewr from '../components/pdfviewr'
import Fileupload from '../components/fileupload'
import Scandoc from '../components/scandoc'
import Scandocpre from '../components/scandocpre'


/**
 * Defines components to routes mapping.
 *
 * Everytime a new view is created, entry is required here to map the component to a specific route.
 *
 * [IMPORTANT]
 * All route entries are required to be done before the notFound component.
 *
 * @returns {XML}
 */
export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path='/navbar' component={NavBar}/>
      <Route exact path='/sidebar' component={Sidebar}/>
      <Route exact path='/solutions' component={Solution}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/footersm' component={Footersm}/>
      <Route exact path='/isrlogin' component={Isrlogn}/>
      <Route exact path='/toplogin' component={Toplogin}/>
      <Route exact path='/nightaudit' component={Nightaudit}/>
      <Route exact path='/repview' component={Review}/>
      <Route exact path='/pdfviwer' component={Pdfviewr}/>
      <Route exact path='/fileupload' component={Fileupload}/>
      <Route exact path='/scandoc' component={Scandoc}/>
      <Route exact path='/scandocpre' component={Scandocpre}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  );
}