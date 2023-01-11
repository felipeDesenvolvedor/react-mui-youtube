import React from 'react';
import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
// import Home from '@mui/icons-material/Home';
import Home from '@mui/icons-material/Home';
import { useAppDrawerContext } from '../../contexts';

interface IDrawerProps {
  children:React.ReactNode
}

export const MenuLateral:React.FC<IDrawerProps> = ({children}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const {isDrawerOpen, toggleDrawerOpen} = useAppDrawerContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} height={'100%'} display='flex' flexDirection={'column'}> 
          <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
            <Avatar sx={{height:theme.spacing(12), width:theme.spacing(12)}} src='https://mui.com/static/images/avatar/1.jpg' />
          </Box>
        
        
          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Home color='primary'/>
                  {/* <InboxIcon /> */}
                </ListItemIcon>
                <ListItemText primary='inbox'></ListItemText>
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};