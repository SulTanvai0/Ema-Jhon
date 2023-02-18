import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Shop from './components/Header/shop/Shop';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import SingUp from './components/SingUp/SingUp';
import Orders from './components/Orders/Orders';
import Main from './layout/Main';
import { productsAndCartLoaders } from './Loaders/productsAndCartLoaders';
import Shipping from './components/Shipping/Shipping';
import PrivateRooute from './components/Routes/PrivateRooute';


function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/', element: <Shop></Shop>,
          loader: () => fetch('products.json'),
        },
        {
          path: '/shop', element: <Shop></Shop>,
          loader: () => fetch('products.json'),
        },
        { path: '/', element: <Shop></Shop> },
        {
          path: '/orders', element: <Orders></Orders>,
          loader: productsAndCartLoaders,
        },
        { path: '/inventory', element: <PrivateRooute><Inventory></Inventory></PrivateRooute> },
        {
          path: '/about', element: <About></About>
        },
        {
          path: '/login', element: <Login></Login>
        },
        {
          path: '/singUp', element: <SingUp></SingUp>
        },
        {
          path: '/shipping', element: <PrivateRooute><Shipping></Shipping></PrivateRooute>
        },

      ]
    },
 

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
