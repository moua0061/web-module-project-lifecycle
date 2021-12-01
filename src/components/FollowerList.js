
import React from 'react';
import Follower from './Follower'

class FollowerList extends React.Component {

    render ( ) {
        
        // console.log(this.props.followers)


        return (
        <div className='followers-container'>
            <div className='followers-text'>
                <h2>Followers:</h2>
            </div>
            
            
            <div className='follower-card'>   
                {
                    this.props.followers.map(follower => (
                        <Follower follower={follower} />
                    ))
                }
            </div>
        </div>
        )
    }
}

export default FollowerList;