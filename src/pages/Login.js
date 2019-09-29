import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import * as actions from '../actions/UserActions'
import * as types from '../actions/ActionTypes'
import { connect } from 'react-redux'
import FormField from '../components/FormField'

const styles = theme => ({
  paper: {
    borderRadius:'8px',
    display: "flex",
    height:'600px',
    flexDirection: "column",
    alignItems: "stretch",
    padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 5}px ${theme
      .spacing.unit * 10}px`
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    borderRadius:'2em',
    height:'40px',
    marginBottom:'1em',
    textAlign:'center',
  },

  loginBackground:{
    minHeight : '100vh',
    width : '100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundImage:'linear-gradient(to right,#56CCF2,#2F80ED)'  
  },
  forgotPassword :{
    textAlign : 'center',
    fontSize: '15px',
    color     : `${theme.palette.primary.main}`,
    '&:hover':{
      textDecoration:'none'
    }
  },
  loginHeader:{
    fontFamily:'Josefin Sans',
    marginBottom:'2em',
    fontSize:'35px',
    textAlign:'center'
  },
  fields:{
    marginBottom:'1.5em'
  },
  buttonContainer:{
    textAlign:'center'
  },
  loginContainer:{
    width:'370px',
    height:'100%',
    margin:'0 auto',
  }
});



class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false,
      error: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.sendLoginRequest(this.state.username, this.state.password)
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  componentDidMount(){

  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.loginRequestStatus && this.props.loginRequestStatus !== 200 && prevProps.loginRequestStatus !== this.props.loginRequestStatus){
      this.setState({error : "Failed to authenticate", password : ''})
      this.props.logout();
    }
  }

  isLocalStateLoggedIn = () => this.props.loginState===types.STATE_SUCCESS

  render() {
    
    if (this.isLocalStateLoggedIn()) window.location = "http://prntscr.com/owssmf";

    const { classes } = this.props;
    return (
      <div className = {classes.loginBackground}>
        <div className={classes.loginContainer}>
          <Paper className={classes.paper}>
              <h2 className={classes.loginHeader}>
                <b>Login</b>
              </h2>
              <form onSubmit={this.handleSubmit}>
                <div className={classes.fields}>
                <FormField id="email" name="username" value={this.state.username}
                      autoComplete="email" autoFocus={true}  
                      onChange={this.handleChange} label="Email Address"/>
                </div>
                <div className={classes.fields}>

                <FormField id="password" name="password" value={this.state.password}
                      autoComplete="current-password" autoFocus={false}  type="password" 
                      onChange={this.handleChange} label="Password"/>
                </div>
                {this.state.error && <div style={{backgroundColor : "#fccaca",margin: '1vh 0 0 0', padding : '2px 2px 2px 7px', borderRadius : '5px',boxSizing: 'border-box', border : 'solid thin #f99393'}}><Typography component='h5' variant='h5' style={{color : 'red'}}>{this.state.error}</Typography></div>}
                <div className={classes.buttonContainer}>
                  <Button fullWidth
                    variant="contained" color="primary" className={classes.submit} type='submit'>
                    Sign in
                  </Button>
                </div>
                </form>
            </Paper>
          </div>
      </div>
      )
  }
}

export const mapStateToProps = state => ({loginState: state.users.loginState,
                                          loginRequestStatus: state.users.requestStatus})
export const mapDispatchToProps = dispatch => ({
  sendLoginRequest: (username, password) => dispatch(actions.login(username, password)),
  logout : () => dispatch(actions.logout)
})

export default connect (mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));