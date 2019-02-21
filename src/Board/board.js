import React from 'react';
import './board.css';
import List from './list.js';
class Board extends React.Component {
    state={
        posts:[],
    };

    constructor(props){
        super(props)
    }
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
                <List disablePadding={true} dense={true} posts={this.state.posts}/>
            </div>
        )
    }

}

export default Board;