import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter, Outlet} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';

/* Lazy loading Grocery Component */
const Grocery = lazy(()=>import('./components/Grocery'));
const AppLayout = ()=> {
    return (
        <>
        <Provider store={appStore}>
          <Header/>
          <Outlet/>
        </Provider>
        </>
    );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
        {
            path:"/about",
            element:<About/>,
        },
        {
            path:"/",
            element:<Body/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },

        {
            path:"/restaurant/:restId",
            element:<RestaurantMenu/>
        }
        ,{
            path:"/Grocery/",
            element:<Suspense fallback={<h1>Lazy loading....</h1>}>  <Grocery/></Suspense>
        }
        ,{
            path:"/Cart/",
            element:<Cart/>
        }
   ],
   errorElement:<Error/>

  }
])

export default appRouter;
