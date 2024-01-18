import React, { useState } from 'react';
import { 
  HomeOutlined, 
  AppstoreOutlined, 
  SendOutlined, 
  UserOutlined,
  IdcardOutlined,
  GithubOutlined,
  LinkedinOutlined,
  ProjectOutlined,
  PaperClipOutlined,
  ScheduleOutlined,
  ToolOutlined,
  ClockCircleFilled
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom'
import Logo from '../../assets/images/logo-with-bgcolor.png'
import './Layout.scss'

const { Header, Sider } = Layout;
const mainMenuItems = [
  {
    label: 'Home',
    icon: HomeOutlined,
    subItems: []
  },
  {
    label: 'About Me',
    icon: IdcardOutlined,
    to: '/about',
    subItems: [
      {
        label: 'Resume',
        icon: UserOutlined,
        options: [],
      },
      {
        label: 'Github',
        icon: GithubOutlined,
        options: []
      },
      {
        label: 'Linkedin',
        icon: LinkedinOutlined,
        options: []
      }
    ]
  },
  {
    label: 'Project Management',
    icon: ProjectOutlined,
    to: '/project-management',
    subItems: [
      {
        label: 'Tickets',
        icon: PaperClipOutlined,
        options: [],
      },
      {
        label: 'Scheduler',
        icon: ScheduleOutlined,
        options: []
      }
    ]
  },
  {
    label: 'Games',
    icon: AppstoreOutlined,
    subItems: [
      {
        label: 'Game 1',
        icon: '',
        options: []
      },
      {
        label: 'Game 2',
        icon: '',
        options: []
      }
    ]
  },
  {
    label: 'Utility',
    icon: ToolOutlined,
    subItems: [
      {
        label: 'Timer',
        icon: ClockCircleFilled,
        options: []
      }
    ]
  },
  {
    label: 'Contact',
    icon: SendOutlined,
    subItems: [],
    target: '/contact'
  }
]

const mainMenu = mainMenuItems.map((item, index) => ({
  index,
  label: `${item.label}`,
}));

const responsiveSubItems = mainMenuItems.map((item, index) => {
  const key = String(index + 1);
  const subItem = {
    key: `sub${key}`,
    icon: React.createElement(item.icon),
    label: `${item.label}`
  };

  if(item.subItems.length > 0){
    subItem.children = item.subItems.map((sub, j) => {
      const subKey = String(j + 1);
      return {
        key: `sub${key}.${subKey}`,
        label: `${sub.label}`,
      };
    })
  }
  return subItem
});

const App = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && responsiveSubItems.map(i => i.key).indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuHandleOk = (e) => {
    console.log(e.key);
    
    let target = null;
  
    for (let index = 0; index < mainMenuItems.length; index++) {
      const item = mainMenuItems[index];
      const key = `sub${String(index + 1)}`;
      if(key === e.key) target = item;
  
      for (let j = 0; j < item.subItems.length; j++) {
        const subItem = item.subItems[j];
        const subKey = `${key}.${String(j + 1)}`;
        if(subKey === e.key) target = subItem;
      }
    }
  
    console.log('menuItem', target);
  }
  return (
    <Layout>
      <Header>
        <div className='logo'>
          <img src={Logo} alt="Weiss" />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={mainMenu}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={responsiveSubItems}
            onClick={menuHandleOk}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
            items={[
              {title: 'Home'},
              {title: 'List'},
              {title: 'App'}
            ]}
          >
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet/>
          </div>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;