import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserData from '../components/UserData';


class Post extends Component {
  state={
    post: null
  }

  componentDidMount(){
    let id = this.props.match.params.post_id
    axios.get('https://jsonplaceholder.typicode.com/posts/'+ id)
    .then(response=>{
      this.setState({
        post: response.data
      })
    })
    .catch( error=>console.log(error))
  }
  render() {
    const post = this.state.post ? (
      <div className="card">
        <div className='card-header'>
          <p>Userid: {this.state.post.id} </p>
        </div>
        <div className='card-body'>
          <h5 className='card-title'> Title: {this.state.post.title} </h5>
          <p className='card-text'> {this.state.post.body} </p>
        </div>
        <div className="card-footer">
          <Link to='/users'><i class="fas fa-long-arrow-alt-left"></i><span className='pl-1'>Back To Post</span></Link>
        </div>
      </div>
    ):(
      <div className='card'>
        <h4>No Post Yet....</h4>
      </div>
    )
    return (
      <div className='container'>
        <div className="row mt-2">
          <div className="col-2"></div>
          <div className="col-8">
            {post}
          </div>
        </div>
      </div>
    )
  }
}

export default Post;