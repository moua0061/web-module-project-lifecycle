import React from 'react';

class Follower extends React.Component {



    render ( ) {
        // console.log(this.props)
        return (
            <div>
                
                <img src={this.props.follower.avatar_url} className='follower-img' />
                <br />
                <p>{this.props.follower.login}</p>
                
            </div>
        )
    }
}

export default Follower;