import NavBar from "./components/navbar";

function Layout({ children }) {
	return (
		<div className="app-container">
			<NavBar />
			<div className="main-content">{children}</div>
		</div>
	);
}

export default Layout;
