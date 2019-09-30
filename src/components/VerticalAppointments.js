import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'
import Accounts from '@material-ui/icons/AssignmentIndOutlined'


const styles = ({
    container:{
        boxShadow:'0em 0em 15px #666',
        height:'60vh',
        width:'200px',
        padding:'1em',
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'column',
        alignItems:'center'
    },
    notifications:{
        height:'60px',
        backgroundColor:'#4e4088',
        width:'60px',
        textAlign:'center',
        lineHeight:'3.4',
        color:'#fff',
        borderRadius:'60px'
    }
})

class VerticalAppointments extends Component {
    render() {
        let {classes} = this.props
        return (
            <div className={classes.container}>
                <div><Accounts />
                {this.props.name}</div>
                <div className={classes.notifications}>6</div>
            </div>
        );
    }
}

export default withStyles(styles)(VerticalAppointments);