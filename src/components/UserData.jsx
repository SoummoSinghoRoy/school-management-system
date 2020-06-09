import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UserData extends Component {
  state={
    posts:[]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then(response=>{
      this.setState({
        posts: response.data
      })
    })
    .catch(error=>console.log(error))
  }

  render() {
    const {posts} = this.state;
    const postlist = posts.map(post => {
      return (
        <div className='container'>
          <div className='row mt-2'>
            <div className="col-2"></div>
            <div className="col-8">
              <div className="card mb-4">
                <div className='card-header'>
                  <p>Userid: {post.id} </p>
                </div>
                <div className='card-body'>
                  <h5 className='card-title'> {post.title} </h5>
                  <p className='card-text'> {post.body} </p>
                </div>
                <div className='card-footer text-right'>
                  <Link className='card-link btn btn-secondary' to={'/' + post.id}>View More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return(
      <div>
        {postlist}
      </div>
    )
  }
}

export default UserData;