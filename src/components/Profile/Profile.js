import React from 'react'
import './Profile.css'

const Profile = (props) => {

  if(props.profileStatus){
    return (
      <div className="forty-five lefted" id="profile-area">
        <div className="page-item_container fade" id="profile-container">
          <div className="page-item">
            <h2>{ props.name }</h2>
            <h2>{ props.email }</h2>
            <h2>{ props.phone }</h2>
          </div>
        </div>
      </div>
    )
  }
  else {
    return null;
  }

}

export default Profile
