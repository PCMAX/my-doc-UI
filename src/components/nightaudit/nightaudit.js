import React, { Component } from 'react';
import Layout from '../../components/layout';

import Select from 'react-select';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

import uploadbtn from '../../assets/images/actionbtns/upload.png';
import scanbtn from '../../assets/images/actionbtns/scan.png';
import downloadbtn from '../../assets/images/actionbtns/download.png';
import printbtn from '../../assets/images/actionbtns/print.png';
import deletebtn from '../../assets/images/actionbtns/delete.png';
import expirationbtn from '../../assets/images/actionbtns/retention.png';
import Review from '../review/review';
import Nightcheckbox from '../nightcheckbox/nightcheckbox';
import Nightmiddlepane from '../nightmiddlepane/nightmiddlepane';
import Nightrightpane from '../nightrightpane/nightrightpane';

import leftA from '../../assets/images/narightpane/leftA.png';
import leftDa from '../../assets/images/narightpane/leftda.png';
import rightA from '../../assets/images/narightpane/rightA.png';
import rightDa from '../../assets/images/narightpane/rightda.png';
import editTop from '../../assets/images/narightpane/edit.png';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


import { render } from 'react-dom';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import './nightaudit.css';

import bleftArrow from '../../assets/images/narightpane/leftA.png';
import bleftDArrow from '../../assets/images/narightpane/leftda.png';
import brightArrow from '../../assets/images/narightpane/rightA.png';
import brightDArrow from '../../assets/images/narightpane/rightda.png';
import zoom from '../../assets/images/narightpane/zoom.png';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import moment from 'moment';
import 'react-day-picker/lib/style.css';
import { formatDate, parseDate } from 'react-day-picker/moment';

import Collapse from '@material-ui/core/Collapse';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};








const currents = [
	'Current', 
	'ANY'
].map(temp => ({
  value: temp,
  label: temp,
}));

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
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 2,
    margin: 'auto'
  },
  input: {
    display: 'flex',
    padding: 0,
    fontFamily:'AvenirLight',
    fontSize: '15px',
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    // position: 'absolute',
    // left: 2,
    // top:0,
    fontSize: 14,
    fontFamily:'AvenirLight',
  },
  paper: {
    position: 'absolute',
    zIndex: 1200,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: 8,
    paddingRight: theme.spacing.unit,
    paddingBottom: 8,
    paddingLeft: theme.spacing.unit * 4,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  cssRoot: {
    color:'#030303',
    backgroundColor: '#fff',
    minHeight:'30px',
    paddingTop: 6,
    marginTop:'4px',
    paddingBottom: 6,
    fontFamily:'AvenirBook',
    fontSize:'14px',
    textTransform:'capitalize',
    width:'98%',
    boxShadow:'none',
    border:'1px solid #e3e3e3',
    '&:hover': {
      backgroundColor: '#f2f2f2',
    },
  },
  searchBtn:{
    lineHeight: '26px',
    fontFamily:'AvenirBook',
    fontSize: '14px',
    textTransform: 'capitalize',
    color:'#2a90ff',
    width: '100%',
    // marginLeft:'52px',
    paddingLeft:0,
  },
  DownBtn:{
    lineHeight: '26px',
    // position:'absolute',
    // right:'55px',
    minWidth:'100%',
  },
  accordianExpansion: {
    width:'100%',
    margin:'0 0 2px'
  },
  ExpansionCurrentPanel:{
    margin:'2px 0',
  },
  ExpansionPanelSummaryRoot:{
    padding:'0 5px',
  },
  ExpansionDetails:{
    padding:'0 5px 5px',
  },
  dpCollapse:{
    overflow:'inherit',
  }
});


function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

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
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

class Nightaudit extends Component {
  constructor(props) {
    super(props);
  this.handleFromChange = this.handleFromChange.bind(this);
  this.handleToChange = this.handleToChange.bind(this);
  
  this.state = {
    single: null,
    multi: null,
     file: './sample.pdf',
    numPages: 1,
    open:false,
    openAccordian:false,
    addClass: false,
    from: undefined,
    to: undefined,
  };
}

  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }
  handleFromChange(from) {
    // Change the from date and focus the "to" input field
    this.setState({ from });
  }
  handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
  }

  toggle = () => {
    this.setState({addClass: !this.state.addClass});
    console.log('clicked');
  }
  
  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }



  handleChange = name => value => {
    this.setState({
      [name]: value,
    });
  };
  

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  download() {
    // fake server request, getting the file url as response
    setTimeout(() => {
      const response = {
        file: 'http://releases.ubuntu.com/12.04.5/ubuntu-12.04.5-alternate-amd64.iso',
      };
      // server sent the url to the file!
      // now, let's download:
      window.location.href = response.file;
      // you could also do:
      // window.open(response.file);
    }, 100);
  }

  render () {
    const { classes, theme } = this.props;
    const { file, numPages } = this.state;

    const { from, to } = this.state;
    const modifiers = { start: from, end: to };

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
      <Layout>
        <div className={classes.root}>
          
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Do You Want To Delete The Document?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Do You Want To Delete The Document. Do You Want To Delete The Document location data to
              Do You Want To Delete The Documentsg.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
             Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
             Delete
            </Button>
          </DialogActions>
        </Dialog>
          



          <Grid container>
            <Grid item lg={12} container>
              {/* START DEFAULT LOAD DROPDOWNS */}
              <Grid item lg={10} container>
                <Grid item xs={4} md={2} lg={2}>
                  <Select
                    classes={classes}
                    styles={selectStyles}
                    options={currents}
                    className="acomplete1 current"
                    components={components}
                    value={this.state.single}
                    onChange={this.handleChange('temp')}
                    placeholder="Current"
                  />
                </Grid>

                <Grid item xs={4} md={5} lg={2}>
                  <Select
                    classes={classes}
                    styles={selectStyles}
                    options={this.props.selectedProjectIndexes[0].fieldValues.valueList.map(temp => ({value: temp, label: temp,}))}
                    className="acomplete1 current"
                    components={components}
                    value={this.state.temp}
                    onChange={this.handleChange('temp')}
                    placeholder={this.props.selectedProjectIndexes[0].name}
                  />
                </Grid>

                <Grid item xs={4} md={5} lg={2}>
                  <Select
                    classes={classes}
                    styles={selectStyles}
                    options={this.props.selectedProjectIndexes[1].fieldValues.valueList.map(temp => ({value: temp, label: temp,}))}
                    className="acomplete1 current"
                    components={components}
                    value={this.state.temp}
                    onChange={this.handleChange('temp')}
                    placeholder={this.props.selectedProjectIndexes[1].name}
                  />
                </Grid>

                <Grid item xs={6} md={5} lg={2}>
                  <Select
                    classes={classes}
                    styles={selectStyles}
                    options={this.props.selectedProjectIndexes[2].fieldValues.valueList.map(temp => ({value: temp, label: temp,}))}
                    className="acomplete1 current"
                    components={components}
                    value={this.state.temp}
                    onChange={this.handleChange('temp')}
                    placeholder={this.props.selectedProjectIndexes[2].name}
                  />
                </Grid>

                <Grid item xs={8} md={5} lg={2}>
                  <TextField
                  InputProps={{
                    disableUnderline: true,
                  }}
                    id="date"
                    type="Date"
                    className="date-text"
                    label="Submited"
                    InputLabelProps={{
                      shrink: false,
                    }}
                  />
                </Grid>

                <Grid item xs={6} md={5} lg={2}>
                  <Select
                    classes={classes}
                    styles={selectStyles}
                    options={this.props.selectedProjectIndexes[2].fieldValues.valueList.map(temp => ({value: temp, label: temp,}))}
                    className="acomplete1 current"
                    components={components}
                    value={this.state.temp}
                    onChange={this.handleChange('temp')}
                    placeholder={this.props.selectedProjectIndexes[2].name}
                  />
                </Grid>
              </Grid>
               {/* END DEFAULT LOAD DROPDOWNS */}

              <Grid item lg={1}>
                  <Button onClick={this.toggle} className={classes.DownBtn}>{this.state.addClass ? <ExpandLess /> : <ExpandMore />}</Button>
              </Grid>
             
              <Grid item lg={1}>
                  <Button className={classes.searchBtn}>Go</Button>
              </Grid>
              
              <Collapse classes={{container:classes.dpCollapse}} in={this.state.addClass}>
              {/* START CLICK LOAD DROPDOWNS */}
              <Grid item lg={12} container  className={ this.state.addClass ? "Dptoggled" : "dp"}>
                <Grid item xs={8} md={5} lg={2}>
                  <TextField
                  InputProps={{
                    disableUnderline: true,
                  }}
                    id="date"
                    type="Date"
                    className="date-text"
                  />
                </Grid>
                <Grid item xs={6} md={5} lg={2}>
                  <Select
                    classes={classes}
                    styles={selectStyles}
                    options={this.props.selectedProjectIndexes[2].fieldValues.valueList.map(temp => ({value: temp, label: temp,}))}
                    className="acomplete1 current"
                    components={components}
                    value={this.state.temp}
                    onChange={this.handleChange('temp')}
                    placeholder={this.props.selectedProjectIndexes[2].name}
                  />
                </Grid>

                <Grid item xs={8} md={5} lg={2}>
                  <div className="InputFromTo">
                    <DayPickerInput
                      value={from}
                      placeholder="Submited"
                      format="MM-DD-YYYY"
                      formatDate={formatDate}
                      parseDate={parseDate}
                      dayPickerProps={{
                        selectedDays: [from, { from, to }],
                        disabledDays: { after: to },
                        toMonth: to,
                        modifiers,
                        numberOfMonths: 2,
                        onDayClick: () => this.to.getInput().focus(),
                      }}
                      onDayChange={this.handleFromChange}
                    />
                    <span className="InputFromTo-to">
                      <DayPickerInput
                        ref={el => (this.to = el)}
                        value={to}
                        placeholder="Second submit"
                        format={"MM-DD-YYYY"}
                        formatDate={formatDate}
                        parseDate={parseDate}
                        dayPickerProps={{
                          selectedDays: [from, { from, to }],
                          disabledDays: { before: from },
                          modifiers,
                          month: from,
                          fromMonth: from,
                          numberOfMonths: 2,
                        }}
                        onDayChange={this.handleToChange}
                      />
                    </span>
                  </div>
                </Grid>

                <Grid item xs={6} md={5} lg={2}>
                  <Select
                    classes={classes}
                    styles={selectStyles}
                    options={this.props.selectedProjectIndexes[2].fieldValues.valueList.map(temp => ({value: temp, label: temp,}))}
                    className="acomplete1 current"
                    components={components}
                    value={this.state.temp}
                    onChange={this.handleChange('temp')}
                    placeholder={this.props.selectedProjectIndexes[2].name}
                  />
                </Grid>
                <Grid item xs={6} md={5} lg={2}>
                  <Select
                    classes={classes}
                    styles={selectStyles}
                    options={this.props.selectedProjectIndexes[2].fieldValues.valueList.map(temp => ({value: temp, label: temp,}))}
                    className="acomplete1 current"
                    components={components}
                    value={this.state.temp}
                    onChange={this.handleChange('temp')}
                    placeholder={this.props.selectedProjectIndexes[2].name}
                  />
                </Grid>
                <Grid item xs={6} md={5} lg={2}>
                  <Select
                    classes={classes}
                    styles={selectStyles}
                    options={this.props.selectedProjectIndexes[2].fieldValues.valueList.map(temp => ({value: temp, label: temp,}))}
                    className="acomplete1 current"
                    components={components}
                    value={this.state.temp}
                    onChange={this.handleChange('temp')}
                    placeholder={this.props.selectedProjectIndexes[2].name}
                  />
                </Grid>
                <Grid item xs={6} md={5} lg={2}>
                  <Select
                    classes={classes}
                    styles={selectStyles}
                    options={this.props.selectedProjectIndexes[2].fieldValues.valueList.map(temp => ({value: temp, label: temp,}))}
                    className="acomplete1 current"
                    components={components}
                    value={this.state.temp}
                    onChange={this.handleChange('temp')}
                    placeholder={this.props.selectedProjectIndexes[2].name}
                  />
                </Grid>
                <Grid item xs={6} md={5} lg={2}>
                  <Select
                    classes={classes}
                    styles={selectStyles}
                    options={this.props.selectedProjectIndexes[2].fieldValues.valueList.map(temp => ({value: temp, label: temp,}))}
                    className="acomplete1 current"
                    components={components}
                    value={this.state.temp}
                    onChange={this.handleChange('temp')}
                    placeholder={this.props.selectedProjectIndexes[2].name}
                  />
                </Grid>
              </Grid>
              {/* END CLICK LOAD DROPDOWNS */}
              </Collapse>
            </Grid>

            <div className="searchBlock">
              <Grid item xs={8} md={10} lg={11}>
                <div className="search">
                  <div className="searchIcon">
                    <SearchIcon />
                  </div>
                  <Input
                    placeholder="Search…"
                    disableUnderline
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>
              </Grid>

              <Grid item xs={4} md={2} lg={1}>
                <Button className="cancle-btn">Cancel</Button>
              </Grid>
            </div>

            <div className="actionbtnBlock">
              <Grid item xs={12} md={4} lg={2}>
               
              <input
              type="file"
              onChange={this.onFileChange}
              style={{ display: 'none' }}   
              ref={(ref) => this.upload = ref} 
            />
               
                <Button
                  variant="contained"
                  className={classNames(classes.cssRoot)}

                  onClick={(e) => this.upload.click() }
                > 
                  <div className="btnImageBlock">
                    <img className="btnImage" src={uploadbtn} alt="upload"/>
                  </div>
                  <span className="actionbtnLabel">
                    Upload
                  </span>
                </Button>
              </Grid>

              <Grid item xs={12} md={4} lg={2}>
                <Button
                  variant="contained"
                  className={classNames(classes.cssRoot)}
                > 
                  <div className="btnImageBlock">
                    <img className="btnImage" src={scanbtn} alt="upload"/>
                  </div>
                  <span className="actionbtnLabel">
                    Scan
                  </span>
                </Button>
              </Grid>

              <Grid item xs={12} md={4} lg={2}>
                <Button
                  variant="contained"
                  className={classNames(classes.cssRoot)}
                  onClick={this.download}
                >
                  <div className="btnImageBlock">
                    <img className="btnImage" src={downloadbtn} alt="Download"/>
                  </div>

                  <span className="actionbtnLabel">
                    Download All
                  </span>
                </Button>    
              </Grid>

              <Grid item xs={12} md={4} lg={2}>
                <Button
                  variant="contained"
                  className={classNames(classes.cssRoot)}
                  onClick={() => window.print()}
                >
                  <div className="btnImageBlock">
                    <img className="btnImage" src={printbtn} alt="Print"/>
                  </div>

                  <span className="actionbtnLabel">
                    Print All
                  </span>
                </Button>
              </Grid>

              <Grid item xs={12} md={4} lg={2}>
                <Button
                  variant="contained"
                  className={classNames(classes.cssRoot)}
                  onClick={this.handleClickOpen}
                >
                  <div className="btnImageBlock">
                    <img className="btnImage" src={deletebtn} alt="Delete"/>
                  </div>

                  <span className="actionbtnLabel">
                    Delete All
                  </span>
                </Button>
              </Grid>

              <Grid item xs={12} md={4} lg={2}>
                <Button
                  variant="contained"
                  className={classNames(classes.cssRoot)}
                >
                  <div className="btnImageBlock">
                    <img className="btnImage" src={expirationbtn} alt="Expiration/retention"/>
                  </div>

                  <span className="actionbtnLabel">
                    Expiration / Retention
                  </span>
                </Button>
              </Grid>

            </div>
          
            <Grid item md={3} lg={3} xl={2}>
              <Nightcheckbox/>
            </Grid>

            <Grid item md={9} lg={9} xl={10}>
              <Grid container>
                <Grid item container md={12} lg={12} xl={12}>

                  <Grid item xs={3}>
                    <div className="topActionBlock">
                      <div className="leftArrows">
                        <Button className="topBtnArrows">
                          <img src={leftDa} alt="arrows"/>
                        </Button>
                        <Button className="topBtnArrows">
                          <img className="imgleftArrow" src={leftA} alt="arrows"/>
                        </Button>
                      </div>

                      <div className="topActionText">
                        <span>Hotel A</span>
                        {/* <Select
                          classes={classes}
                          styles={selectStyles}
                          options={suggestions}
                          className="acompleteTop current"
                          components={components}
                          value={this.state.single}
                          onChange={this.handleChange('single')}
                          placeholder="Hotel A"
                        /> */}
                      </div>

                      <div className="editTop">
                        <Button className="checkboxBtn">
                          <img src={editTop} alt="edit"/>
                        </Button>
                      </div>

                      <div className="rightArrows">
                        <Button className="topBtnArrows">
                          <img className="imgrightArrow" src={rightA} alt="arrows"/>
                        </Button>
                        
                        <Button className="topBtnArrows">
                          <img src={rightDa} alt="arrows"/>
                        </Button>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={3}>
                    <div className="topActionBlock">
                      <div className="leftArrows">
                        <Button className="topBtnArrows">
                          <img src={leftDa} alt="arrows"/>
                        </Button>
                        <Button className="topBtnArrows">
                          <img className="imgleftArrow" src={leftA} alt="arrows"/>
                        </Button>
                      </div>

                      <div className="topActionText">
                        <span>Report A</span>
                      </div>

                      <div className="editTop">
                        <Button className="topBtnEdit">
                          <img src={editTop} alt="edit"/>
                        </Button>
                      </div>

                      <div className="rightArrows">
                        <Button className="topBtnArrows">
                          <img className="imgrightArrow" src={rightA} alt="arrows"/>
                        </Button>
                        
                        <Button className="topBtnArrows">
                          <img src={rightDa} alt="arrows"/>
                        </Button>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={3}>
                    <div className="topActionBlock">
                      <div className="topActionText2">
                        <span>Category A</span>
                      </div>

                      <div className="editTop2">
                        <Button className="topBtnEdit">
                            <img src={editTop} alt="edit"/>
                        </Button>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={3}>
                    <div className="topActionBlock">
                      <div className="topActionText2">
                        <span>Date</span>
                      </div>

                      <div className="editTop2">
                        <Button className="topBtnEdit">
                          <img src={editTop} alt="edit"/>
                        </Button>
                      </div>
                    </div>
                  </Grid>
                </Grid>

                <Grid item md={9} lg={9} xl={9}>
                  <div className="mainWrapperBottom">
                    <Grid container>
                      <Grid item md={3} lg={3} xl={2}>
                        <div className="AllPagesNa">
                          <div className="pagethumdiv">
                              <div className="pagethubdv">Page 1</div>
                          </div>

                          <div className="pagethumdiv">
                            <div className="pagethubdv">Page 2</div>
                          </div>

                          <div className="pagethumdiv">
                            <div className="pagethubdv">Page 3</div>
                          </div>
                          
                        </div>
                      </Grid>

                      <Grid item md={9} lg={9} xl={10}>
                        <div className="printrivewedivb">
                          <div className="Example__container">
                            <div className="Example__container__load">
                    
                            </div>

                            <div className="Example__container__document">
                              <Document 
                                file={file}
                                onLoadSuccess={this.onDocumentLoadSuccess}
                                options={options}
                              >
                                {
                                
                                Array.from(
                                    new Array(numPages),
                                    (el, index) => (
                                    
                                    
                                      <Page  
                                        key={'page_${index  }'}
                                        pageNumber={index }
                                        
                                      />
                                      
                                    ),
                                  )

                                }
                              </Document>
                            </div>
                          </div>

                          <div className="bottomActionWrapper">
                            <div className="previewActionBlock">
                              <div className="leftPreViewArrows">
                                <Button className="bottomBtnArrows">
                                  <img src={bleftDArrow} alt="left"/>
                                </Button>
                                <Button className="bottomBtnArrows">
                                  <img src={bleftArrow} alt="left"/>
                                </Button>
                              </div>

                              <div className="Zoom">
                                <Button className="topBtnEdit">
                                  <img src={zoom} alt="Zoom"/>
                                </Button>
                              </div>

                              <div className="RightPreViewArrows">
                                <Button className="bottomBtnArrows">
                                  <img src={brightArrow} alt="Right"/>
                                </Button>
                                <Button className="bottomBtnArrows">
                                  <img src={brightDArrow} alt="Right"/>
                                </Button>
                              </div>
                            </div>
                          </div>

                        </div>
                      </Grid>

                    </Grid>
                  </div>
                </Grid>
              
                <Grid item md={3} lg={3} xl={3} >
                  <Nightrightpane/>    
                </Grid> 
              </Grid>
            </Grid>          
          </Grid>
        </div>
      </Layout>
    );
  }
}

export default withStyles(styles, { withTheme: true }) (Nightaudit);