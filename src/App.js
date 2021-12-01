import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    user:'',
    followers: [],
    input: ''
  }


  componentDidMount(){
    axios.get('https://api.github.com/users/moua0061')
    .then(resp => {
      // console.log(resp.data)
      this.setState({
        ...this.state,
        user: resp.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }


  componentDidUpdate(){
    
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      input: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.input}`)
    .then(resp => {
      // console.log(resp)
      this.setState({
        ...this.state,
        user: resp.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  // handleClick = event => {
  //   event.preventDefault();
  //   axios.get(`https://api.github.com/users/${this.state.input}`)
  //   .then(resp => {
  //     // console.log(resp)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }

  render() {
    
    // console.log(this.state.user)

    return(
    
    <div>
      <h1>Github Card</h1>
      <form onSubmit={this.handleSubmit}>
        <input 
        type="text"
        onChange={this.handleChange} 
        value={this.state.input} 
        />
        <button onClick={this.handleClick}>search</button>
      </form>

      <div className='user-container'>
        <img src={`${this.state.user.avatar_url}`} />
        <h2>{this.state.user.login}</h2>
        <h3>{this.state.user.name}</h3>
        <p>
          Total Repos: {this.state.user.public_repos}
        </p>

        <p>
          Total Followers: {this.state.user.followers}
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
