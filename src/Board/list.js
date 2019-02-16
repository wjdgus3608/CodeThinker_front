import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Post from './post.js';
const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    padding:{disablePadding:true},

});

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function SimpleList(props,{title,tag,number,time,writer,up,down}) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <List component="nav">
                <ListItem button dense={true} disableGutters={true} padding={0}>
                    <Post title="title" tag="tag" number="number" time="time" writer="writer" up="up" down="down"/>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sample" />
                </ListItem>
            </List>
            <Divider />
        </div>
    );
}

SimpleList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);