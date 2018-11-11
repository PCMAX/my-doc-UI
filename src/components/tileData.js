import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';

import solutions from  '../assets/images/navbar/solutions.png';
import recycle from  '../assets/images/navbar/recycle.png';
import admin from  '../assets/images/navbar/admin.png';
import conSupport from  '../assets/images/navbar/con-support.png';

import { Scrollbars } from 'react-custom-scrollbars';

class Navlist extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      solutionOpen: false,
      adminOpen: false,
    };
  }

  handleClickSolution = () => {
    this.setState(state => ({ solutionOpen: !state.solutionOpen }));
  };

  handleClickAdmin = () => {
    this.setState(state => ({ adminOpen: !state.adminOpen }));
  };

  render() {
    const { hits } = this.state;
    return (
  <div className="isrNav">

    <ListItem button className="isr-nav-listItem" onClick={event => {
        this.handleClickSolution();
        this.props.handleDrawerOpen();
      }
    }>
      <ListItemIcon className="isr-nav-icon">
        <img src={solutions} alt="Solutions"/>
      </ListItemIcon>
      <ListItemText className="isr-nav-item" inset primary="Solutions" />
      {this.state.solutionOpen ? <ExpandLess /> : <ExpandMore />}
    </ListItem>

    <Collapse in={this.state.solutionOpen} timeout="auto" unmountOnExit>
      <Scrollbars 
        autoHeight autoHeightMin="100%" autoHeightMax={300}
        renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{display:"none"}}/>}
        renderThumbHorizontal={props => <div {...props} className="thumb-horizontal" style={{display:"none"}}/>}
      >
        <List component="div" disablePadding>

          {this.props.projects.map(project => 
          <ListItem button className="liNested">
            <ListItemText inset primary={project.projectName} id={project.projectId} onClick={() => this.props.onClickProject(project)} />
          </ListItem>)}

        </List>
      </Scrollbars>
    </Collapse>
    

    <ListItem button className="isr-nav-listItem">
      <ListItemIcon className="isr-nav-icon">
        <img src={recycle} alt="recycle"/>
      </ListItemIcon>
      <ListItemText className="isr-nav-item" primary="Recycle Bin" />
    </ListItem>

    <ListItem button className="isr-nav-listItem" onClick={event => {
        this.handleClickAdmin();
        this.props.handleDrawerOpen();
      }
    }>
      <ListItemIcon className="isr-nav-icon">
        <img src={admin} alt="admin"/>
      </ListItemIcon>
      <ListItemText className="isr-nav-item" inset primary="Administation" />
      {this.state.adminOpen ? <ExpandLess /> : <ExpandMore />}
    </ListItem>

    <Collapse in={this.state.adminOpen} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {/* <ListItemText className="subtitle">
          <ListItemText primary="Project Configuration" />
        </ListItemText> */}

        <ListItem button className="liNested">
          <ListItemText inset primary="Add New Project" />
        </ListItem>

        <ListItem button className="liNested">
          <ListItemText inset primary="Edit Project" />
        </ListItem>

        <ListItem button className="liNested">
          <ListItemText inset primary="Workflow Definition" />
        </ListItem>
      </List>
    </Collapse>

    <ListItem button className="isr-nav-listItem contact-support">
      <ListItemIcon className="isr-nav-icon">
        <img src={conSupport} alt="Cont-support"/>
      </ListItemIcon>
      <ListItemText className="isr-nav-item" primary="Contact Support" />
    </ListItem>

  </div>
  );
}
}

export default Navlist;