import React from 'react';

function Header() {
   return (
      <div style={header}>
         <h1>TodoList</h1>
      </div>
   );
}

const header = {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   textAlign: 'center',
   marginTop: '2rem',
};

export default Header;
