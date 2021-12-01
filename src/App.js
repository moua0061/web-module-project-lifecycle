import React from 'react';

class App extends React.Component {




  render() {
    return(
    
    <div>
      <h1>Github Card</h1>
      <form>
        <input />
        <button>search</button>
      </form>

      <div className='user-container'>
        <img src='https://avatars.githubusercontent.com/u/82925208?v=4' />
        <h2>Lia Moua</h2>
        <p>
          Total Repos: 1
          Total Followers: 1
        </p>
      </div>
      <div className='followers-container'>
        <h2>Followers:</h2>
        <img src='https://avatars.githubusercontent.com/u/31264591?v=4' />
        <img src='https://avatars.githubusercontent.com/u/32182282?v=4' />
        <img src='https://avatars.githubusercontent.com/u/43353550?v=4' />
      </div>
    </div>
    
    );
  }
}

export default App;
