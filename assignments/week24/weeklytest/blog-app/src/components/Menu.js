import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  render() {
    return (
      <div>
        <h2 className='text-dander'>
          Blog
        </h2>
        <hr />
        <ul className='list-group'>
          <li className='list-group-item bg-primary text-white'>
            Menu
          </li>
          <li className='list-group-item'>
            <Link to='/app/search'>Blogs</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Menu;