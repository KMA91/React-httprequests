import React from 'react';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav--container">
        <label htmlFor="show-links" className="nav--showlinks">Click to Expand Menu</label>
        <input type="checkbox" id="show-links" role="button"/>
        <ul className="nav--links">
          <li><a href="#" title="Click Here to Go to the Home Page!">Home</a></li>
          <li><a href="#" title="Click Here to Contact Us!">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;
