import { Button } from '@mui/material';
import { useEffect } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { useAppDrawerContext, useAppThemeContext } from '../shared/contexts';
export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  const { toggleDrawerOpen, setDrawerOptions } = useAppDrawerContext();

  useEffect(()=> {
    setDrawerOptions([
      {
        icon:'home',
        path:'/pagina-inicial',
        label:'Página incial'
      },
      {
        icon:'stars',
        path:'/favoritos',
        label:'Favoritos'
      }
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant='contained' color="primary" onClick={toggleDrawerOpen}>Teste</Button>}/>
      <Route path="/favoritos" element={<Button variant='contained' color="primary" onClick={toggleDrawerOpen}>Teste</Button>}/>
      <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
    </Routes>
  );
};