import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';

import Dropzone from 'react-dropzone';
import './fileupload.css';

import cpclose from '../../assets/images/close.png';

const styles = theme => ({
  cpwPaper: {
      borderBottomLeftRadius:'7px',
      borderBottomRightRadius: '7px',
      borderTopLeftRadius:0,
      borderTopRightRadius: 0,

      [theme.breakpoints.down('lg')]: {
        minWidth:'750px',
      },
     
      [theme.breakpoints.up('lg')]: {
        minWidth:'1000px',
      },
  },
  margin: {
      padding:'10px 20px',
      margin:'0 4px'
  },
  cssRootSave: {
      color: '#fff',
      backgroundColor: '#3b6cb4',
      textTransform:'capitalize',
      fontSize: 15,
      fontFamily:'AvenirLight',
      minWidth:'295px',
      minHeight:'42px',
      '&:hover': {
          backgroundColor: '#2f6dc8',
      },

      [theme.breakpoints.down('md')]: {
        minWidth:'200px',
      }
  },
  cssRootCancel: {
      color: '#000',
      border:'1px solid #f1f1f2',
      textTransform:'capitalize',
      fontSize: 15,
      fontFamily:'AvenirLight',
      minWidth:'295px',
      minHeight:'42px',
      '&:hover': {
          backgroundColor: '#ebebeb',
      },

      [theme.breakpoints.down('md')]: {
        minWidth:'200px',
      }
  },
  dActionRoot:{
      justifyContent: 'flex-start',
      margin:'0 auto',
      paddingLeft:'26px',
      paddingRight:'35px',
      paddingTop:0,
      paddingBottom:'50px',
  },
  cpwContent:{
      padding:'35px 30px 50px'
  },
  borderFileUpload:{
    width:'100%',
    height:'350px',
    border:'1px solid #3b6cb4',
    borderRadius:'7px'
  },
  hide:{
    display: 'none',
  },
  show:{
    display: 'block',
  },
  borderHide:{
    border:'none',
  }
});

class Fileupload extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      files: [],
      btnblock:false,
    };
  }

  onDrop(files) {
    this.setState({
      files,
      btnblock: true
    });
  }  

  handleResetCloseFileUpload = () => {
    this.setState({ files: [] , btnblock: false, open: false });
  }

  handleResetFileUpload = () => {
    this.setState({ files: [] , btnblock: false});
  };

  handleClickOpenFileUpload = () => {
    this.setState({ open: true });
  };

  handleCloseFileUpload = () => {
    this.setState({ open: false });
  };

  render () {
    const { classes } = this.props;
    const dropzoneRef = React.createRef();
    
    return (
      <div className="fileUploadWrapper">

        <Button onClick={this.handleClickOpenFileUpload}>Open form dialog</Button>

        <Dialog
          classes={{
            paper: classes.cpwPaper,
          }}
          open={this.state.open}
          onClose={this.handleCloseFileUpload}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
              Upload Documents
              <div className="cpCloseWrapper" onClick={this.handleResetCloseFileUpload}>
                  <img src={cpclose} alt="Close"/>
              </div>
          </DialogTitle>

          <DialogContent classes={{root:classes.cpwContent}}>
            <Grid container>
                <Grid item xs={12}>
                  
                    <div className="dropzone">
                      <Dropzone
                        accept="image/jpeg, image/png, application/pdf"
                        ref={dropzoneRef}  
                        onDrop={this.onDrop.bind(this)} 
                        className={classNames(classes.borderFileUpload,this.state.btnblock ? classes.borderHide : classes.show)}
                      >
                        {({acceptedFiles}) => {
                          if (acceptedFiles.length > 0) {
                            return  <div className="DropFilesNames">
                                      <ul>
                                        {
                                          this.state.files.map(f => 
                                            <li key={f.name}>
                                              {f.name} 
                                            </li>
                                          )
                                        }
                                      </ul>
                                    </div>;
                          }
                          // else{
                          //   return <p className="dropFileText">Drop your files here!</p>;
                          // }
            
                          // return <p className="dropFileText">Drop your files here!</p>;
                          // return `Try dropping some files.`; 
                        }}
                      </Dropzone>

                      <p className={classNames("dropFileText",this.state.btnblock ? classes.hide : classes.show)}>Drop your files here!</p>
                    </div>


                  
                </Grid>
            </Grid>
            <div className={classNames("fileIploadMiddleText",this.state.btnblock ? classes.hide : classes.show)}>
                <p>Or select from your computer</p>
            </div>
          </DialogContent>

          <DialogActions
          className={classNames(classes.dActionRoot)}
          >
          
          <div className={this.state.btnblock ? classes.hide : classes.show}>
            <Button
                type="button" onClick={() => { dropzoneRef.current.open() }}
                variant="contained"
                className={classNames(classes.margin, classes.cssRootSave)}
                color="primary">
                Browse
            </Button>
          </div>

          <div className={this.state.btnblock ? classes.show : classes.hide}>
            <Button
                variant="contained"
                className={classNames(classes.margin, classes.cssRootSave)}
                color="primary">
                Upload
            </Button>

            <Button
              onClick={this.handleResetFileUpload}
              className={classNames(classes.margin, classes.cssRootCancel)}
              color="primary">
              Cancel
            </Button>
          </div>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


export default withStyles(styles) (Fileupload);