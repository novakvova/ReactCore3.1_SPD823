import React, { Component } from 'react';
import "./index.scss";
// import Background from 'https://images.unsplash.com/photo-1493847242172-d46053a1f671?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f91dd5d50f16ba80af53a62d4caf2ce&auto=format&fit=crop&w=500&q=60';

class Post extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <h1>News</h1> 
                <div className="card ">
                    <div className="card-img" >
                        <div className="overlay">
                            <div className="overlay-content">
                                <a className="hover" href="#!">View Project</a>
                            </div>
                        </div>
                    </div>

                    <div className="card-content">
                        <a href="#!">
                            <h2>Title</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, lorem ipsum dolor</p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Post;