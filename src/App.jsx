import { Outlet } from 'react-router-dom';
import './App.css';
import Navigation from './Componets/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Outlet /> {/* This renders child routes */}
    </>
  );
}

export default App;
