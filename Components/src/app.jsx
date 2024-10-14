import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter, Outlet} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { lazy, Suspense } from 'react';


/* Lazy loading Grocery Component */
const Grocery = lazy(()=>import('./components/Grocery'));
const AppLayout = ()=> {
    return (
        <>
          <Header/>
          <Outlet/>
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
   ],
   errorElement:<Error/>

  }
])

export default appRouter;
