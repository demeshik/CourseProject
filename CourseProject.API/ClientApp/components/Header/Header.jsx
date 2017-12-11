import React from 'react';
import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/ToolBar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Navbar from '../Navbar/Navbar';

const Header = () => {
	let navRef = null;

	let show = () => {
		navRef.show();
	};

	return (
		<AppBar position="static">
			<ToolBar>
				<IconButton onClick={show} color="contrast" aria-label="Menu">
					<MenuIcon />
				</IconButton>
				<Typography type="title">
					Clinic Helper
				</Typography>
			</ToolBar>

			<Navbar ref={(refs) => {navRef = refs;}} />
		</AppBar>
	);
};

export default Header;