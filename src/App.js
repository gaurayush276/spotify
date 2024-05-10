import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import SideBar from './components/SideBar';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import MainContainer from './components/maincontainer';
import Playlist from './components/Playlist';


function App() {

  const appRouter = createBrowserRouter([{
    path :'/' ,
    element : <Body/> , 
    children: [{
      path : '/',
      element:<MainContainer/> ,
    } 
    ,{
    path: '/search' ,
    element:<Search/> , 
    }
  ]
  },{
    path : '/playlist',
    element : <Playlist/>
  }
 ])
  return (
   
    <Provider store={appStore}>
       <div className="flex bg-black h-screen gap-2 ">
      <SideBar/>
       < RouterProvider router={appRouter} />
    
    
    </div> </Provider>
   
  );
}

export default App;
