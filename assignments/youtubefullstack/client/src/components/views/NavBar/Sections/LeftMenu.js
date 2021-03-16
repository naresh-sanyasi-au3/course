import React from 'react';
import { Menu } from 'antd';
import Search from 'antd/lib/input/Search';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu