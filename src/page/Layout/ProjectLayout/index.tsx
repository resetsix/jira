import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Card, Flex, Layout, Menu } from "antd";
import LinkButton from "components/Buttons/LinkButton";
import { PhRankingDuotone } from "components/Icons";
import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
	{ title: "排行榜", label: "排行榜", icon: <PhRankingDuotone />, key: "rank" },
	{ title: "用户列表", label: "用户列表", icon: <UserOutlined style={{ fontSize: 20 }} />, key: "user" },
];

const UserLayout: React.FC = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [collapsed, setCollapsed] = useState(false);
	const selectedKey = location.pathname.split("/")[1] || "rank";
	const handleSelect: MenuProps["onSelect"] = (selected) => navigate("/" + selected.key);

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
				<div className="demo-logo-vertical" />
				<Menu
					theme="dark"
					onSelect={handleSelect}
					defaultSelectedKeys={[selectedKey]}
					mode="inline"
					items={items}
				/>
			</Sider>
			<Layout>
				<Content style={{ margin: "16px" }}>
					<Flex vertical gap="large">
						<Card>面板</Card>
						<Card styles={{ body: { padding: 0 } }}>
							<Outlet />
						</Card>
					</Flex>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					Copyright © {new Date().getFullYear()} Powered by{" "}
					<LinkButton label="「一闪一闪亮晶晶」" href="https://github.com/resetsix" />
				</Footer>
			</Layout>
		</Layout>
	);
};

export default UserLayout;
