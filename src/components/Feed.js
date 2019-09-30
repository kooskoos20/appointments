import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'
import Message from '@material-ui/icons/QuestionAnswer'


const styles = ({
    container:{
        boxShadow:'0em 0em 15px #666',
        height:'60vh',
        width:'500px',
        padding:'1em',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        overflow:'auto'
    },
    notifications:{
        height:'60px',
        backgroundColor:'#4e4088',
        width:'60px',
        textAlign:'center',
        lineHeight:'3.4',
        color:'#fff',
        borderRadius:'60px'
    },
    msg:{
        borderBottom:'2px solid #777',
        lineHeight:'3',
        width:'90%',
        padding:'2em'
    }
})

class Feed extends Component {
    render() {
        let {classes} = this.props
        return (
            <div className={classes.container}>
                <div className={classes.msg}>
                    <Message />
                    You have message from James
                </div>

                <div className={classes.msg}>
                    <Message />
                    Your appointment is now
                </div>

                <div className={classes.msg}>
                    <Message />
                    Your turn no 10
                </div>

                <div className={classes.msg}>
                    <Message />
                    Pick up prescription
                </div>

                <div className={classes.msg}>
                    <Message />
                    You have message from Katherine
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Feed);