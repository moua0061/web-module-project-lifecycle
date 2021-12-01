
import React from 'react';

class User extends React.Component {

    render ( ) {
        return (
            <div className='user-container'>
                <div className='img-container'>
                    <img src={this.props.user.avatar_url} alt='user avatar' /> 
                </div>
                
                <div className='user-info'>
                    <h2>{this.props.user.name}</h2>
                    <h3>{this.props.user.login}</h3>
                    <p>
                    total repos: {this.props.user.public_repos}
                    <br />
                    total followers: {this.props.user.followers}
                    </p>
                </div>
            </div>
        )
    }
}

export default User;