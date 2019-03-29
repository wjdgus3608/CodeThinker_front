import React from 'react';
import './board.css';
import List from './list.js';
import Button from './button';
class Board extends React.Component {
    state={
        posts:[],
    };

    componentDidMount(props) {
        this._getPosts()
    }
    _getPosts= async ()=>{
        const posts = await this._callApi(this.props)
        this.setState({
            posts
        })
    }
    _callApi=()=>{
        return  fetch('http://localhost:3000/boards/'+this.props.board.board_id+'/posts')
            .then(potato => potato.json())
            .then(json=>json)
            .catch(err=>console.log(err))
    }
    render(){
        return(
            <div className="Board">
                <h1>{this.props.board.board_name}</h1>
                <List disablePadding={true} dense={true} board={this.props.board} posts={this.state.posts}/>
                <Button title="글쓰기" board_id={this.props.board.board_id}/>
            </div>
        )
    }
}

export default Board;