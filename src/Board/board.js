import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './post.js';
import './board.css';
import List from './list.js';
class Board extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this._getPosts()
    }
    _getPosts = async ()=>{
        const boards = await this._callApi()
        this.setState({
            boards
        })
    }
    render(){
        return(
            <div className="Board">
                <h1>{this.props.board.board_name}</h1>
                <List disablePadding={true} dense={true}/>
            </div>
        )
    }

}

export default Board;