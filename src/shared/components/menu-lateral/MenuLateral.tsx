import React from 'react';
import { Avatar, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
// import Home from '@mui/icons-material/Home';
import Icon from '@mui/material/Icon';
import { useAppDrawerContext } from '../../contexts';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

interface IListItemLinkProps {
  to:string,
  icon:string,
  label:string,
  onClick: (() => void) | undefined;

}

export const ListItemLink : React.FC<IListItemLinkProps> = ({to, icon, label, onClick}) => {
  const navigate = useNavigate();

  const resolverPath = useResolvedPath(to);
  const match = useMatch({path:resolverPath.pathname, end:false});

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
        {/* <InboxIcon /> */}
      </ListItemIcon>
      <ListItemText primary={label}></ListItemText>
    </ListItemButton>
  );
};

interface IDrawerProps {
  children:React.ReactNode
}

export const MenuLateral:React.FC<IDrawerProps> = ({children}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const {isDrawerOpen, toggleDrawerOpen, drawerOptions} = useAppDrawerContext();

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
              {drawerOptions.map((drawerOption) => (
                <ListItemLink  key={drawerOption.path} to={drawerOption.path} icon={drawerOption.icon} label={drawerOption.label} onClick={smDown ? toggleDrawerOpen : undefined}/>
              ))
              }
              
              {/* <ListItemLink  to='/favoritos' icon='stars' label='Favoritos' onClick={smDown ? toggleDrawerOpen : undefined}/> */}
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