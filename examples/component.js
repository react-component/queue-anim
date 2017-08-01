/* eslint-disable no-console,react/no-multi-comp */
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';
import Icon from 'antd/lib/icon';
import Menu from 'antd/lib/menu';
import 'antd/lib/style/index.less';
import 'antd/lib/menu/style/index.less';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class Demo extends React.Component {
  render() {
    return (<QueueAnim
      component={Menu}
      style={{ width: 240, margin: 20 }}
      componentProps={{ mode: 'vertical' }}
      type="left"
    >
      <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Iteom 2">
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="sub4" title={<span><icon type="setting" /><span>Navigation Three</span></span>}>
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    </QueueAnim>);
  }
}
ReactDom.render(<Demo />, document.getElementById('__react-content'));
