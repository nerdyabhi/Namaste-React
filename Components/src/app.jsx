import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter} from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
const AppLayout = ()=> {
    return (
        <>
          <Header/>
          <Body/>
        </>
    );
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>
    },

    {
        path:"/about",
        element:<About/>,
    }
])

export default appRouter;
