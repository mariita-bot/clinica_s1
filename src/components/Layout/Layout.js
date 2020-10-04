import React from 'react';
import { useState } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { 
  Layout,
  Button, 
  Menu, 
  Dropdown, 
  message, 
  Tooltip 
} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LogoutOutlined,
  SolutionOutlined,
  ReadOutlined,
  ExperimentOutlined,
  UploadOutlined,
  SettingFilled 
} from '@ant-design/icons';
import Home from '../Home/Home';
import Ventas from '../Ventas/Ventas';
import Registros from '../Registros/Registros';
import Examen from '../Examen/Examen';
import Pacientes from '../Pacientes/Pacientes';
import Doctores from '../Doctores/Doctores';
import Resultados from '../Resultados/Resultados';
import './Layout.css';

const { Header, Sider, Content } = Layout;

function MainLayout(props) {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const salir = () => {
    props.history.push("/login")
  }

  const handleMenuClick = (e) => {
    // message.info('Click on menu item.');
    if (parseInt(e.key) === 2) salir();
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<SettingFilled />}>
        Configuracion
      </Menu.Item>
      <Menu.Item key="2" icon={<LogoutOutlined />}>
        Salir
      </Menu.Item>
    </Menu>
  );
  
  return(
    <Layout>
      <Sider style={{height: '100vh'}} trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<SolutionOutlined />}>
            <Link to="/dashboard/registros" style={{ padding: 5 }}>
              Registros
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<ReadOutlined />}>
            <Link to="/dashboard/examen" style={{ padding: 5 }}>
              Examenes
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/dashboard/pacientes" style={{ padding: 5 }}>
              Pacientes
            </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            <Link to="/dashboard/doctores" style={{ padding: 5 }}>
              Doctores
            </Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<ExperimentOutlined />}>
            <Link to="/dashboard/resultados" style={{ padding: 5 }}>
              Resultados
            </Link>
          </Menu.Item>
          <Menu.Item onClick={salir} key="6" icon={<UploadOutlined />}>
            Salir
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
          <Dropdown.Button style={{float: 'right', margin: '15px',}} overlay={menu} placement="bottomCenter" icon={<UserOutlined />}/>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}>
            <Route exact path="/dashboard/*">{ <Redirect to="/dashboard/registro" />}</Route>
            <Route exact path="/dashboard/regitro" component={Registros} />
            <Route exact path="/dashboard/examen" component={Examen} />
            <Route exact path="/dashboard/pacientes" component={Pacientes} />
            <Route exact path="/dashboard/doctores" component={Doctores} />
            <Route exact path="/dashboard/resultados" component={Resultados} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;