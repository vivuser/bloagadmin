import logo from './logo.svg';
import './App.css';
import { Link, Outlet, createBrowserRouter } from 'react-router-dom';
import User from './Users/user';

function App() {

  return (
        <>
        Hi
        <User />
          <Outlet />
        </>
  );
}

export default App;
