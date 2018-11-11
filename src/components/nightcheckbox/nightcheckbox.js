import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Lens from '@material-ui/icons/Lens';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import sortUp from '../../assets/images/sort-up.png';
import sortDown from '../../assets/images/sort-down.png';

import './nightcheckbox.css';

import { Scrollbars } from 'react-custom-scrollbars';

const styles = theme => ({
  NaCheckboxLabel:{
    color:'#000',
    fontFamily:'AvenirBook',
    fontSize:'14px',
    lineHeight:'18px',
    width: 105,
    wordWrap: 'break-word',
  },
  NaCheckboxIcon:{
    paddingTop:'4px',
    paddingBottom:'4px'
  },
  NightAuditCheckboxBlock:{
    width:'200px',
  }
});


function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}

class Nightcheckbox extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
			shown: true,
		};
  }
  toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}
 
  render () {

    var shown = {
			display: this.state.shown ? "block" : "none"
		};
		
		var hidden = {
			display: this.state.shown ? "none" : "block"
		}


    const { classes } = this.props;

    return (
      <Scrollbars style={{ height: 'calc(100vh - 240px)' }}>
      <div className="nightAuditCheckboxBlock">
        <Grid item lg={12}>
          <FormControlLabel
              classes={{
                label: classes.NaCheckboxLabel,
            }}

            control={
              <Checkbox
                className={classes.NaCheckboxIcon}
                icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>} 
                value="checkedH" 
                color="primary"
              />
            }
            label=""
          />
          <div className="sort-btn-block">
            <div className="sort-icon">
              <img src={sortUp} alt="sort"/>
            </div>

            <div className="sort-icon">
              <img src={sortDown} alt="sort"/>
            </div>
          </div>
        </Grid>

        <Grid item lg={12}>
              <FormControlLabel
                  classes={{
                    label: classes.NaCheckboxLabel,
                }}

                control={
                  <Checkbox
                    className={classes.NaCheckboxIcon}
                    onClick={this.toggle.bind(this)}
                    icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                    checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                    value="checkedH" 
                    color="primary"
                  />
                }
                label="Report A"
              />
            
              <div className="toolsdivs1" style={ hidden }>
                <Button className="checkboxBtn">
                  <a href="">
                    <div className="icond1"></div>
                  </a>
                </Button>

                <Button className="checkboxBtn">
                  <a href="">
                    <div className="icond2"></div> 
                  </a>
                </Button>

                <Button className="checkboxBtn">
                  <a href="">
                    <div className="icond3"></div> 
                  </a> 
                </Button>
              </div>

              <div className="toolsdivs" style={ shown }>  </div>  
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>} 
                  value="checkedH" 
                  color="primary"
                />
              }
              label="Report B"
            />
              <div className="toolsdivs1" style={ hidden }>
                <Button className="checkboxBtn">
                  <a href="">
                    <div className="icond1"></div>
                  </a>
                </Button>

                <Button className="checkboxBtn">
                  <a href="">
                    <div className="icond2"></div> 
                  </a>
                </Button>

                <Button className="checkboxBtn">
                  <a href="">
                    <div className="icond3"></div> 
                  </a> 
                </Button>
              </div>

              <div className="toolsdivs" style={ shown }>  </div>  
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                  value="checkedH"
                  color="primary" 
                />
              }
              label="Report C"
            />
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>} 
                  value="checkedH"
                  color="primary" 
                />
              }
              label="Report D"
            />
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                  value="checkedH"
                  color="primary" 
                />
              }
              label="Report E"
            />
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                  value="checkedH"
                  color="primary" 
                />
              }
              label="Report F"
            />
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                  value="checkedH"
                  color="primary" 
                />
              }
              label="Report E"
            />
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                  value="checkedH"
                  color="primary" 
                />
              }
              label="Report F"
            />
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                  value="checkedH"
                  color="primary" 
                />
              }
              label="Report I"
            />
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                  value="checkedH"
                  color="primary" 
                />
              }
              label="Report J"
            />
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                  value="checkedH"
                  color="primary" 
                />
              }
              label="Report K"
            />
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                  value="checkedH"
                  color="primary" 
                />
              }
              label="Report L"
            />
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                  value="checkedH"
                  color="primary" 
                />
              }
              label="Report M"
            />
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                  value="checkedH"
                  color="primary" 
                />
              }
              label="Report N"
            />
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                  value="checkedH"
                  color="primary" 
                />
              }
              label="Report O"
            />
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                  value="checkedH"
                  color="primary"
                />
              }
              label="Report O"
            />
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                  value="checkedH"
                  color="primary" 
                />
              }
              label="Report O"
            />
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                  value="checkedH"
                  color="primary" 
                />
              }
              label="Report O"
            />
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                  value="checkedH"
                  color="primary" 
                />
              }
              label="Report O"
            />
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                  value="checkedH"
                  color="primary" 
                />
              }
              label="Report O"
            />
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                  value="checkedH"
                  color="primary"
                />
              }
              label="Report O"
            />
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                  value="checkedH"
                  color="primary" 
                />
              }
              label="Report O"
            />
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                  value="checkedH"
                  color="primary" 
                />
              }
              label="Report O"
            />
          </Grid>

          <Grid item lg={12}>
            <FormControlLabel
                classes={{
                  label: classes.NaCheckboxLabel,
              }}

              control={
                <Checkbox
                  className={classes.NaCheckboxIcon}
                  onClick={this.toggle.bind(this)}
                  icon={<Lens style={{fill: "#fff",fontSize:"24px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                  checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"24px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                  value="checkedH"
                  color="primary" 
                />
              }
              label="Report O"
            />
          </Grid>
      </div>
      </Scrollbars>
    );
  }
}

export default withStyles(styles) (Nightcheckbox);