import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    username: '',
    name: '',
    followers: [],

  }


  componentDidMount(){
    axios.get('https://api.github.com/users/moua0061')
    .then(resp => {
      // console.log(resp.data)
      this.setState({
        ...this.state,
        avatar: resp.data.avatar_url,
        username: resp.data.login,
        name: resp.data.name,
        totalRepos: resp.data.public_repos,
        totalFollowers: resp.data.followers
      })
    })
    .catch(err => {
      console.log(err)
    })
  }


  // componentDidUpdate(){
  //   axios.get('https://api.github.com/users/moua0061/followers')
  //   .then(resp => {
  //     this.setState({
  //       ...this.state,
  //       followersAvatars: resp.data.avatar_url,
  //       user: resp.data.login
  //     })
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }

  handleChange = event => {
    this.setState({
      ...this.state,
      user: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.get('https://api.github.com/users/${username}')
    .then(resp => {
      // console.log(resp)
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleClick = event => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.user}`)
    .then(resp => {
      // console.log(resp)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    // console.log(this.state.username)
    // console.log(this.state.avatar)
    // console.log(this.state.name)
    // console.log(this.state.totalRepos)
    // console.log(this.state.totalFollowers)
    return(
    
    <div>
      <h1>Github Card</h1>
      <form>
        <input onChange={this.handleChange} value={this.state.user} />
        <button onClick={this.handleClick}>search</button>
      </form>

      <div className='user-container'>
        <img src='https://avatars.githubusercontent.com/u/82925208?v=4' />
        <h2>{this.state.username}</h2>
        <h3>{this.state.name}</h3>
        <p>
          Total Repos: {this.state.totalRepos}
        </p>

        <p>
          Total Followers: {this.state.followers}
        </p>
      </div>
      <div className='followers-container'>
        <h2>Followers:</h2>
        <img src='https://avatars.githubusercontent.com/u/31264591?v=4' />
        <p>username1</p>
        <img src='https://avatars.githubusercontent.com/u/32182282?v=4' />
        <p>username2</p>
        <img src='https://avatars.githubusercontent.com/u/43353550?v=4' />
        <p>username3</p>
      </div>
    </div>
    
    );
  }
}

export default App;
