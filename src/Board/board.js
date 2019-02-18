import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './post.js';
import './board.css';
import List from './list.js';
function Board({match}) {
    return(
        <div className="Board">
            <h1>{match.params.title}</h1>
            <List disablePadding={true} dense={true}/>
        </div>

    )
}

export default Board;