import React from 'react';
import axios from 'axios';


import User from './components/User'
import FollowerList from './components/FollowerList'

class App extends React.Component {
  state = {
    user: '',
    followers: [],
    input: 'moua0061'
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/moua0061')
      .then(resp => {
          // console.log(resp) it is working
          this.setState({
            ...this.state,
            user: resp.data
          })
          // console.log(this.state)
      })
      .catch(err=> {
        console.log('your shit aint working!');
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.user !== prevState.user){
      axios.get(`https://api.github.com/users/${this.state.input}/followers`)
        .then(res => {
          this.setState({
            ...this.state,
              followers: res.data
          })
        })
        .catch(err=> {
          console.log(err)
        })
        .finally(this.setState({
          ...this.state,
          input: ''
        }))
    }
  }
  


  handelChange = (event) => {
    this.setState({
      ...this.state,
        input: event.target.value
    });
    // console.log(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.input}`)
      .then(resp => {
        this.setState({
          ...this.state,
            user: resp.data
        })
      })
      .catch(err=> {
        console.log('bruh, youre shit not working still...')
      })
  }

  render() {


    return(
    
    <div className='app'>
      <header>
        <h1>Github Info</h1>
      </header>
      <div className='form-container'>
        <form onSubmit={this.handleSubmit}>
        <input 
        type='text'
        name='search'
        placeholder='enter git username'
        onChange={this.handelChange}
        value={this.state.input}
        />
        <button >Search</button>
        </form>
      </div>
      
      <br />
      
        <User user={this.state.user} />
      
      <div className='followers-container'>
        <FollowerList followers={this.state.followers} />
      </div>
    </div>
    );
  }
}

export default App;
