import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Components/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import SignUp from './Components/SignUp.jsx';
import SignIn from './Components/SignIn.jsx';
import Root from './Components/Root.jsx';
import Users from './Components/Users.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://coffee-store-server-ecru.vercel.app/coffee'),
      },
      {
        path: '/add-coffee',
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: '/update-coffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffee-store-server-ecru.vercel.app/coffee/${params.id}`),
      },
      {
        path: '/sign-up',
        element: <SignUp></SignUp>,
      },
      {
        path: '/sign-in',
        element: <SignIn></SignIn>,
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: ()=> fetch('https://coffee-store-server-ecru.vercel.app/users')
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

