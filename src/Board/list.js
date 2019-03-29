import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import DraftsIcon from '@material-ui/icons/Drafts';
import Post from './post.js';

import NavLink from "react-router-dom/es/NavLink";

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    padding:{disablePadding:true},

});

const state={
    selectedPost: {
        post_id: "",
            post_title: "",
    }
};

function SimpleList(props) {

    const { classes } = props;
    return (
        <div className={classes.root}>
            <List component="nav">
                {props.posts.map((post)=> {
                        return (
                            <NavLink key={post._id} exact to={props.board.board_id+'/posts/'+post._id}>
                            <ListItem button onClick={()=>{state.selectedPost=post}} dense={true} disableGutters={true} padding={0}>
                                <Post title={post.post_title} tag={post.post_tag} number={post.post_id} time={post.post_time} writer={post.post_writer} up="Up" down="Down"
                                      />
                            </ListItem>
                            </NavLink>
                        );
                    }
                )}
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