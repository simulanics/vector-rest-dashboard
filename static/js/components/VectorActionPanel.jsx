import React from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {FaBinoculars, FaCube, FaHome} from 'react-icons/fa'

import robot from '../services/api'


const styles = theme => ({
    root: {
        flexGrow: 1,
        textAlign: 'center'
    },
    iconButton: {
        fontSize: "60px"
    }
});


function VectorActionPanel(props) {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={10}>
                <Grid item xs={12}>
                    <Button onClick={robot.behavior.driveOnCharger}>
                        <FaHome className={classes.iconButton}/>
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={robot.behavior.driveOffCharger}>
                        <FaBinoculars className={classes.iconButton}/>
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={robot.behavior.dockWithCube}>
                        <FaCube className={classes.iconButton}/>
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

VectorActionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VectorActionPanel)