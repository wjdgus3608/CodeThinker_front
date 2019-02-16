import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './post.js';
import './board.css';

function Board({title,tag,number,time,writer,up,down}) {
    return(
        <div className="Board">
                {/*<Post title={title} tag={tag} number={number} time={time} writer={writer} up={up} down={down}/>*/}
            <Post title="title" tag="tag" number="number" time="time" writer="writer" up="up" down="down"/>
        </div>
    )
}

export default Board;