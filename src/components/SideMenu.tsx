import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { StaticImage } from "gatsby-plugin-image";
import HomeComponent from './HomeComponent';
import Projects from './Projects';
import Publications from './Publications';
import Team from './Team';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function SideMenu(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = React.useState<string | null>(null);


  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleMenuItemClick = (itemName: string) => {
    setSelectedMenuItem(itemName);
  };

  const MenuItems = [
    { name: 'Home', icon: <HomeIcon /> },
    { name: 'Team', icon: <GroupsIcon /> },
    { name: 'Projects', icon: <WorkIcon /> },
    { name: 'Publications', icon: <AlignVerticalBottomIcon /> },
    { name: 'Fundings', icon: <MonetizationOnIcon /> },
    // { name: 'Join', icon: <ConnectWithoutContactIcon /> },
    { name: 'About', icon: <RecentActorsIcon /> },
  ];

  const SubMenuItems = ["CV", "Map", "Contact Info"];

  const drawer = (
    <div>
      <Toolbar>
        <StaticImage
          src="./../images/smiles_logo.png"
          alt="Logo"
          style={{ height: '70px' }}
        />

      </Toolbar>
      <Divider />


      <List>
        {MenuItems.map((menuItem, index) => (
          <ListItem key={menuItem.name} disablePadding>
              <ListItemButton onClick={() => handleMenuItemClick(menuItem.name)}>
                <ListItemIcon>
                {menuItem.icon}
              </ListItemIcon>
              <ListItemText primary={menuItem.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  // Render the component based on the selected menu item
  const renderComponentBasedOnMenu = () => {
    switch (selectedMenuItem) {
      case 'Home':
        return <HomeComponent />;
      case 'Team':
        return <Team />;
      case 'Projects': 
        return <Projects />;
      case 'Publications':
        return <Publications/>;
      // // Add cases for other menu items as needed
      default:
        return <HomeComponent />;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{height:"70px"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {selectedMenuItem || ''}
          </Typography>          
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {renderComponentBasedOnMenu()}

      </Box>
    </Box>
  );
}