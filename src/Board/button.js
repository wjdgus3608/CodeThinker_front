import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {

    },
    input: {
        display: 'none',
    },
});

function ContainedButtons(props) {
    const { classes } = props;
    return (
        <div>
            <Button variant="contained" href={props.board_id+"/make"} className={classes.button}>
                {props.title}
            </Button>
        </div>
    );
}

ContainedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);