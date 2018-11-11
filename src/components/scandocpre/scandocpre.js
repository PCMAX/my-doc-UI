import React, { Component } from 'react';
import './scandocpre.css';

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

import Select from 'react-select';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';

import cpclose from '../../assets/images/close.png';
import deletebtnScan from '../../assets/images/actionbtns/delete.png';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Lens from '@material-ui/icons/Lens';

import ScanbleftArrow from '../../assets/images/narightpane/leftA.png';
import ScanbleftDArrow from '../../assets/images/narightpane/leftda.png';
import ScanbrightArrow from '../../assets/images/narightpane/rightA.png';
import ScanbrightDArrow from '../../assets/images/narightpane/rightda.png';
import Scanzoom from '../../assets/images/narightpane/zoom.png';

const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

const styles = theme => ({
  cpwPaper: {
      borderBottomLeftRadius:'7px',
      borderBottomRightRadius: '7px',
      borderTopLeftRadius:0,
      borderTopRightRadius: 0,

      [theme.breakpoints.down('lg')]: {
        minWidth:'950px',
        minHeight:'700px'
      },

      [theme.breakpoints.up('lg')]: {
        minWidth:'1000px',
        minHeight:'700px'
      },
  },
  margin: {
      padding:'10px 12px',
      marginBottom:5,
  },
  cssRootContinueScan:{
      color: '#fff',
      backgroundColor: 'rgba(59, 108, 180, 0.61)',
      textTransform:'capitalize',
      fontSize: 15,
      fontFamily:'AvenirLight',
      minWidth:'100%',
      minHeight:'42px',
      borderRadius:0,
      '&:hover': {
          backgroundColor: '#2f6dc8',
      },
  },
  cssRootSave: {
      color: '#fff',
      backgroundColor: '#3b6cb4',
      textTransform:'capitalize',
      fontSize: 15,
      fontFamily:'AvenirLight',
      minWidth:'100%',
      minHeight:'42px',
      borderRadius:0,
      '&:hover': {
          backgroundColor: '#2f6dc8',
      },

      // [theme.breakpoints.down('md')]: {
      //   minWidth:'150px',
      // }
  },
  cssRootCancel: {
      color: '#000',
      border:'1px solid #f1f1f2',
      textTransform:'capitalize',
      fontSize: 15,
      fontFamily:'AvenirLight',
      minWidth:'100%',
      minHeight:'42px',
      borderRadius:0,
      '&:hover': {
          backgroundColor: '#ebebeb',
      },

      // [theme.breakpoints.down('md')]: {
      //   minWidth:'150px',
      // }
  },
  scanContent:{
      padding:'5px 5px'
  },
  input: {
    display: 'flex',
    padding: 0,
    fontFamily:'AvenirLight',
    fontSize: '15px',
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 14,
    fontFamily:'AvenirLight',
  },
  singleValue: {
    fontSize: 16,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  cssRootBtn: {
    color:'#030303',
    backgroundColor: '#fff',
    minHeight:'32px',
    paddingTop: 5,
    paddingBottom: 5,
    fontFamily:'AvenirLight',
    fontSize:'14px',
    textTransform:'capitalize',
    width: '86%',
    boxShadow:'none',
    border:'1px solid #e3e3e3',
    '&:hover': {
      backgroundColor: '#f2f2f2',
    },
  },
  NaCheckboxIcon:{
    paddingTop:'4px',
    paddingBottom:'4px',
    paddingLeft:4,
    paddingRight:6
  },
  NaCheckboxLabel:{
    color:'#000',
    fontFamily:'AvenirBook',
    fontSize:'14px',
    lineHeight:'18px',
    width: 160,
    wordWrap: 'break-word',
  },
  SCanCboxRoot: {
    marginLeft:0,
    padding:'1px 0',
  },
  scanCheckbGrid:{
    padding:'10px 0',
    background:'#f8f8f8'
  },
  scanGridTopAction:{
    marginBottom:5,
  }
});

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontFamily: 'AvenirBook',
        fontSize: 17,
        fontWeight: props.isSelected ? 600 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}



function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

class Scandocpre extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      single: null,
      shown: true,
    }
  }

  toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}

  handleChange = name => value => {
    this.setState({
      [name]: value,
    });
  };

  handleClickOpenScanDocs = () => {
    this.setState({ open: true });
  };

  handleClickCloseScanDocs = () => {
    this.setState({ open: false });
  };

  render () {
    const { classes, theme } = this.props;
    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit',
        },
      }),
    };

    return (
      <div>
        <Button onClick={this.handleClickOpenScanDocs}>Open form dialog</Button>
          <Dialog
            classes={{
              paper: classes.cpwPaper,
            }}
            open={this.state.open}
            onClose={this.handleClickCloseScanDocs}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
                Scan Documents
                <div className="cpCloseWrapper" onClick={this.handleClickCloseScanDocs}>
                    <img src={cpclose} alt="Close"/>
                </div>
            </DialogTitle>

            <DialogContent classes={{root:classes.scanContent}}>
              <Grid container>
                <Grid item xs={12} container classes={{container:classes.scanGridTopAction}}>
                    <Grid item xs={3}>
                      <div className="deleteAllCb">
                        <FormControlLabel
                          control={
                            <Checkbox
                              className={classes.NaCheckboxIcon}
                              icon={<Lens style={{fill: "#fff",fontSize:"20px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                              checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"20px",border:'1px solid #007aff',borderRadius:'50%'}}/>} 
                              value="checkedH" 
                              color="primary"
                            />
                          }
                        />
                      </div>

                      <Button
                        variant="contained"
                        className={classNames(classes.cssRootBtn)}
                      >
                        <div className="btnImageBlock">
                          <img className="btnImage" src={deletebtnScan} alt="Delete"/>
                        </div>

                        <span className="actionbtnLabel">
                          Delete All
                        </span>
                      </Button>
                    </Grid>

                    <Grid item xs={3}>
                      <Select
                        classes={classes}
                        styles={selectStyles}
                        options={suggestions}
                        className="acompleteScan"
                        components={components}
                        value={this.state.single}
                        onChange={this.handleChange('single')}
                        placeholder="Hotel A"
                      />
                    </Grid>

                    <Grid item xs={2}>
                      <Select
                        classes={classes}
                        styles={selectStyles}
                        options={suggestions}
                        className="acompleteScan"
                        components={components}
                        value={this.state.single}
                        onChange={this.handleChange('single')}
                        placeholder="Report A"
                      />
                    </Grid>

                    <Grid item xs={2}>
                      <Select
                        classes={classes}
                        styles={selectStyles}
                        options={suggestions}
                        className="acompleteScan"
                        components={components}
                        value={this.state.single}
                        onChange={this.handleChange('single')}
                        placeholder="Category A"
                      />
                    </Grid>

                    <Grid item xs={2}>
                      <TextField
                      InputProps={{
                        disableUnderline: true,
                      }}
                        id="dateScan"
                        type="Date"
                        className="date-text-scan"
                      />
                    </Grid>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item lg={3} classes={{item:classes.scanCheckbGrid}}>
                  <Grid item xs={12}>
                    <FormControlLabel
                        classes={{
                          label: classes.NaCheckboxLabel,
                          root:classes.SCanCboxRoot,
                      }}

                      control={
                        <Checkbox
                          className={classes.NaCheckboxIcon}
                          onClick={this.toggle.bind(this)}
                          icon={<Lens style={{fill: "#fff",fontSize:"20px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                          checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"20px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                          value="checkedH"
                          color="primary" 
                        />
                      }
                      label="Report C"
                    />
                  </Grid>

                  <Grid item xs={12} wrap="nowrap">
                    <FormControlLabel
                        classes={{
                          label: classes.NaCheckboxLabel,
                          root:classes.SCanCboxRoot,
                      }}

                      control={
                        <Checkbox
                          className={classes.NaCheckboxIcon}
                          onClick={this.toggle.bind(this)}
                          icon={<Lens style={{fill: "#fff",fontSize:"20px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                          checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"20px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                          value="checkedH"
                          color="primary" 
                        />
                      }
                      label="Reportjhjhjghfghfjhgfjfhgjfhgjfhggfgfgfg"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                        classes={{
                          label: classes.NaCheckboxLabel,
                          root:classes.SCanCboxRoot,
                      }}

                      control={
                        <Checkbox
                          className={classes.NaCheckboxIcon}
                          onClick={this.toggle.bind(this)}
                          icon={<Lens style={{fill: "#fff",fontSize:"20px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                          checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"20px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                          value="checkedH"
                          color="primary" 
                        />
                      }
                      label="Report C"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                        classes={{
                          label: classes.NaCheckboxLabel,
                          root:classes.SCanCboxRoot,
                      }}

                      control={
                        <Checkbox
                          className={classes.NaCheckboxIcon}
                          onClick={this.toggle.bind(this)}
                          icon={<Lens style={{fill: "#fff",fontSize:"20px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                          checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"20px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                          value="checkedH"
                          color="primary" 
                        />
                      }
                      label="Report C"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                        classes={{
                          label: classes.NaCheckboxLabel,
                          root:classes.SCanCboxRoot,
                      }}

                      control={
                        <Checkbox
                          className={classes.NaCheckboxIcon}
                          onClick={this.toggle.bind(this)}
                          icon={<Lens style={{fill: "#fff",fontSize:"20px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                          checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"20px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                          value="checkedH"
                          color="primary" 
                        />
                      }
                      label="Report C"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                        classes={{
                          label: classes.NaCheckboxLabel,
                          root:classes.SCanCboxRoot,
                      }}

                      control={
                        <Checkbox
                          className={classes.NaCheckboxIcon}
                          onClick={this.toggle.bind(this)}
                          icon={<Lens style={{fill: "#fff",fontSize:"20px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                          checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"20px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                          value="checkedH"
                          color="primary" 
                        />
                      }
                      label="Report C"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                        classes={{
                          label: classes.NaCheckboxLabel,
                          root:classes.SCanCboxRoot,
                      }}

                      control={
                        <Checkbox
                          className={classes.NaCheckboxIcon}
                          onClick={this.toggle.bind(this)}
                          icon={<Lens style={{fill: "#fff",fontSize:"20px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                          checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"20px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                          value="checkedH"
                          color="primary" 
                        />
                      }
                      label="Report C"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                        classes={{
                          label: classes.NaCheckboxLabel,
                          root:classes.SCanCboxRoot,
                      }}

                      control={
                        <Checkbox
                          className={classes.NaCheckboxIcon}
                          onClick={this.toggle.bind(this)}
                          icon={<Lens style={{fill: "#fff",fontSize:"20px",border:'1px solid #4aa0fe',borderRadius:'50%'}}/>} 
                          checkedIcon={<CheckCircle style={{fill: "#007aff",fontSize:"20px",border:'1px solid #007aff',borderRadius:'50%'}}/>}
                          value="checkedH"
                          color="primary" 
                        />
                      }
                      label="Report C"
                    />
                  </Grid>
                </Grid>

                <Grid item xs={7} container>
                  <Grid item xs={3}>
                    <div className="AllPagesNa">
                      <div className="pageScan">
                          <div className="pageNumScan">Page 1</div>
                      </div>

                      <div className="pageScan">
                        <div className="pageNumScan">Page 2</div>
                      </div>

                      <div className="pageScan">
                        <div className="pageNumScan">Page 3</div>
                      </div>
                      
                    </div>
                  </Grid>

                  <Grid item xs={9}>
                    <div className="scanPreview">



                      <div className="bottomActionWrapper">
                        <div className="previewActionBlock">
                          <div className="leftPreViewArrows">
                            <Button className="bottomBtnArrows">
                              <img src={ScanbleftDArrow} alt="left"/>
                            </Button>
                            <Button className="bottomBtnArrows">
                              <img src={ScanbleftArrow} alt="left"/>
                            </Button>
                          </div>

                          <div className="Zoom">
                            <Button className="topBtnEdit">
                              <img src={Scanzoom} alt="Zoom"/>
                            </Button>
                          </div>

                          <div className="RightPreViewArrows">
                            <Button className="bottomBtnArrows">
                              <img src={ScanbrightArrow} alt="Right"/>
                            </Button>
                            <Button className="bottomBtnArrows">
                              <img src={ScanbrightDArrow} alt="Right"/>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
                
                <Grid item xs={2}>
                  <div className="ScanDocBtns">
                    <Button
                        variant="contained"
                        className={classNames(classes.margin, classes.cssRootContinueScan)}
                        color="primary">
                        Continue Scanning
                    </Button>

                    <Button
                        variant="contained"
                        className={classNames(classes.margin, classes.cssRootSave)}
                        color="primary">
                        Upload
                    </Button>

                    <Button
                      onClick={this.handleClickCloseScanDocs}
                      className={classNames(classes.margin, classes.cssRootCancel)}
                      color="primary">
                      Cancel
                    </Button>
                  </div>
                </Grid>

              </Grid>
            </DialogContent>
          </Dialog>
      </div>
    );
  }
}

export default withStyles(styles,{ withTheme: true }) (Scandocpre);