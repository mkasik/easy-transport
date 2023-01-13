import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Header from './Pages/Header/Header';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Header></Header>
      }
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
   
   
  );
}

export default App;
