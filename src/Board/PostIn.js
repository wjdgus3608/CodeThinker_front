import React from 'react';
import './post.css'
class PostIn extends React.Component {
    state={
        post:{},
    };

    componentDidMount(props) {
        this._getPosts()
    }
    _getPosts= async ()=>{
        const post = await this._callApi(this.props)
        this.setState({
            post
        })
    }
    _callApi=()=>{
        return  fetch('http://localhost:3000'+this.props.url)
            .then(potato => potato.json())
            .then(json=>json)
            .catch(err=>console.log(err))
    }
    render() {
        return (
            <div className="Post">
                <h1>{this.state.post.post_title}</h1>
                <b>{this.state.post.post_id}</b>
                <b>{this.state.post.post_tag}</b>
                <b>{this.state.post.post_time}</b>
                <b>{this.state.post.post_writer}</b>
                <b>{this.state.post.post_text}</b>
            </div>

        )
    }
}
export default PostIn;