import React from 'react';
import Header from '../components/Header'
import HomepageBody from '../components/HomepageBody';
import {withStyles} from '@material-ui/core/styles'

const styles = ({
    container:{
    }
})

function Homapage(props){
    return (<div>
        <Header />
        <HomepageBody />
    </div>)
}

export default withStyles(styles)(Homapage)