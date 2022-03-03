import React, { useState } from "react";
import "./css/layout.css";
import pic from "./images/download.png";
import { Layout, Menu, Breadcrumb } from "antd";
import * as AiIcons from "react-icons/ai";
import Lay from "./layout";

const { Header, Content, Sider } = Layout;
const HomePage = () => {
  const [collapsed, setCollapsed] = useState(true);
  //const [log, setLog] = useState(false);
  const [pro, setPro] = useState(false);
  const onSider = () => {
    setCollapsed(!collapsed);
  };
  const handleonProfile = () => {
    setPro(true);
    //setLog(false);
  };
  const onBread = () => {
    if (pro) {
      return <span>Profile</span>;
    }
  };

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ textAlign: "center" }}>
          <img src={pic} alt="Logo" className="logo" onClick={onSider} />
          <h3 style={{ color: "white" }}>HomePage</h3>
        </Header>
        <Layout>
          {collapsed ? (
            <Sider>
              <Menu defaultSelectedKeys={["1"]} theme="dark" mode="inline">
                <Menu.Item
                  key="1"
                  icon={<AiIcons.AiFillDatabase />}
                  onClick={handleonProfile}
                >
                  Dashboard
                </Menu.Item>
              </Menu>
            </Sider>
          ) : null}
          <Layout className="site-layout">
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>{onBread()}</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Lay />
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default HomePage;

// const { Header, Sider, Content } = Layout;

// function Homepage() {
//   const [content, setContent] = useState(false);
//   const [content1, setContent1] = useState(false);
//   const [logo, setLogo] = useState(false);

//   const onSider = () => {
//     if (logo) {
//       setLogo(false);
//     } else {
//       setLogo(true);
//     }
//   };
//   const onLogin = () => {
//     setContent(true);
//   };

//   const onProfile = (e) => {
//     setContent1(true);
//   };
//   const handleClick = (e) => {
//     setContent(e.key);
//   };
//   return (
//     <IconContext.Provider value={{ color: "red" }}>
//       <Layout>
//         <Header>
//           <img src={pic} alt="Logo" className="logo" onClick={onSider} />
//           <h3>HomePage</h3>
//         </Header>
//         <Layout>
//           {logo ? (
//             <Sider>
//               <Menu onClick={handleClick}>
//                 <Menu.Item key="1">
//                   <label className="label" onClick={onLogin}>
//                     <AiIcons.AiOutlineUnlock className="icons" /> Login
//                   </label>
//                 </Menu.Item>
//                 <Menu.Item key="2">
//                   <label className="label" onClick={onProfile}>
//                     <AiIcons.AiFillDatabase className="icons" /> Profile
//                   </label>
//                 </Menu.Item>
//                 <Menu.Item key="3">
//                   <label className="label">
//                     <AiIcons.AiOutlineBarChart className="icons" /> Graph
//                   </label>
//                 </Menu.Item>
//               </Menu>
//             </Sider>
//           ) : null}
//           <Content>
//             {SidebarData?.map((item, index) => {
//               return (
//                 <li key={index} className={item.cName}>
//                   <Link to={item.path}>
//                     {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             })}
//             {/* {content ? <Demo /> : null}
//             {content1 ? <Lay /> : null} */}
//           </Content>
//         </Layout>
//       </Layout>
//     </IconContext.Provider>
//   );
// }

// export default Homepage;

/* <Menu.Item
                  key="1"
                  icon={<AiIcons.AiOutlineUnlock />}
                  onClick={onLogin}
                >
                  Login
                </Menu.Item> */

// if (log) {
//   return <span>Login</span>;
// }

// const OnNav = () => {
//   // if (log) {
//   //   return <Demo />;
//   // }
//   if (pro) {
//     return <Lay />;
//   }
// };
