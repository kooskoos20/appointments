import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import * as actions from '../actions/UserActions'

const styles = ({
    ul :{
        listStyleType : 'none',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        padding:'1em',
        margin:'0',
        color:'#fff',
    },
    nav:{
        boxShadow:'1px 1px 10px #666',
        padding:'0 10em 0 10em',
        backgroundColor:'#4e4088',
    },
    logout:{
        fontSize:'14px',
        borderRadius:'30px',
        color:'#fff',
        backgroundImage:'linear-gradient(to right, rgba(247,106,101,0.93) 0%, rgba(248,113,85,0.93) 18%, rgba(255,146,10,1) 100%);',
        width:'10em'
    },
    li:{
        margin:'0',
        padding:'0'
    }
})

class Header extends Component {
    render() {
    let {classes} = this.props
        return (
            <nav className={classes.nav}>
                <ul className={classes.ul}>
                    <li><h2 className={classes.li}>Halcyon</h2></li>
                    <li>Patients</li>
                    <li>Appointments</li>
                    <li>Messages</li>
                    <li><Button onClick={() => this.props.logout()} variant="outlined" className={classes.logout}>Logout</Button></li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
logout : () => dispatch(actions.logout())
})

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Header));