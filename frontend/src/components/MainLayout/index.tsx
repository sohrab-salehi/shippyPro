import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Drawer, Layout, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import "./main-layout.scss";
import digitLogo from "../../assets/Shippypro-logo.png";

const { Header, Content, Footer } = Layout;

function MainLayout(): JSX.Element {
    const [mobileMenu, setMobileMenu] = useState(false);
    const location = useLocation();
    const selectedNavbarItem = () => {
        switch (location.pathname) {
            case "/":
                return "home";
            case "/airports":
                return "airports";
            case "/flights":
                return "flights";
            case "/best-flights":
                return "best-flights";
            default:
                return "home";
        }
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header className="header">
                <div className="logo">
                    <Link to="/">
                        <img src={digitLogo} alt="logo" />
                    </Link>
                </div>
                <span className="main-nav">
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={[selectedNavbarItem()]}
                        items={[
                            {
                                key: "airports",
                                label: <Link to="/airports">Airports</Link>,
                            },
                            {
                                key: "flights",
                                label: <Link to="/flights">Flights</Link>,
                            },
                            {
                                key: "best-flights",
                                label: (
                                    <Link to="/best-flights">Best Flights</Link>
                                ),
                            },
                        ]}
                    />
                </span>

                <div className="mobile-menu-button">
                    <MenuOutlined onClick={() => setMobileMenu(true)} />
                </div>
                <Drawer
                    open={mobileMenu}
                    onClose={() => setMobileMenu(false)}
                    style={{ backgroundColor: "#001628" }}
                    closable={false}
                >
                    <Menu
                        theme="dark"
                        mode="vertical"
                        selectedKeys={[selectedNavbarItem()]}
                        items={[
                            {
                                key: "flights",
                                label: <Link to="/flights">Flights</Link>,
                            },
                        ]}
                    />
                </Drawer>
            </Header>
            <Content style={{ padding: "50px" }}>
                <Outlet />
            </Content>
            <Footer style={{ textAlign: "center" }}>
                ShippyPro ©2023 Created by Sohrab
            </Footer>
        </Layout>
    );
}

export default MainLayout;
