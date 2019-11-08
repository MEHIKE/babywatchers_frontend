import React from 'react';

function Admin(props) {
  return (
    <div>
      Admin Page= {props.logedIn ? 'true' : 'false'}*{props.username}*
      {props.logged ? 'true' : 'for testing reason only=false'}*
    </div>
  );
}

export default Admin;
