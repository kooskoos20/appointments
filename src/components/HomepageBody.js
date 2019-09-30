import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'
import VerticalAppointments from './VerticalAppointments';
import Feed from '../components/Feed';


const styles = ({
    container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    root:{
        padding:'0 16.5em 0 16.5em',
        marginTop:'7em',
    }
})

class HomepageBody extends Component {
    render() {
        let {classes} = this.props
        return (
            <div className={classes.root}>
                <h1 style={{color:'#555'}}>Hello, Eve Holt</h1>
                <div className={classes.container}>                
                    <VerticalAppointments name={"Patients"}/>
                    <VerticalAppointments name={"Appointments"}/>
                    <VerticalAppointments name={"Messages"}/>
                    <div style={{marginLeft:'5em'}}>
                        <Feed />
                    </div>
                </div>
            </div>            
        );
    }
}

export default withStyles(styles)(HomepageBody);