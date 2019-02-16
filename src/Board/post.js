import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './post.css'
function Post({title,tag,number,time,writer,up,down}) {
	return(
		<div className="Post">
			<div className="Left_column">
			    <div className="Post_number">
				    <b>{number}</b>
			    </div>
                <div className="Under_row">
			    <div className="Post_up">
				    <b>{up}</b>
			    </div>
                <div className="Post_down">
                    <b>{down}</b>
                </div>
                </div>
			</div>

            <div className="Right_column">
			    <div className="Post_title">
				    <b>{title}</b>
			    </div>
                 <div className="Under_row">
			        <div className="Post_tag">
				         <b>{tag}</b>
			        </div>
			        <div className="Post_time">
				        <b>{time}</b>
			        </div>
			        <div className="Post_writer">
				        <b>{writer}</b>
			        </div>
                 </div>
</div>

		</div>

	)
}
function Post_title({title}) {
	return(
		<span>{title}</span>
	)
}
function Post_tag({tag}) {
	return(
		<span>{tag}</span>
	)
}
function Post_number({number}) {
	return(
		<span>{number}</span>
	)
}
function Post_time({time}) {
	return(
		<span>{time}</span>
	)
}
function Post_writer({writer}) {
	return(
		<span>{writer}</span>
	)
}
function Post_up({up}) {
	return(
		<span>{up}</span>
	)
}
function Post_down({down}) {
	return(
		<span>{down}</span>
	)
}
export default Post;