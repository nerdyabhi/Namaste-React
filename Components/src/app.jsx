import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter, Outlet} from 'react-router-dom';
import About from './components/About';
import Contact from './components/contact';
import Error from './components/Error';
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
        }
   ],
   errorElement:<Error/>

  }
])

export default appRouter;
