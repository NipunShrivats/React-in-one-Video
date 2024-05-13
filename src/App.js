import React from 'react'
import About from './screens/About'
import Contact from './screens/Contact'
import Register1 from './screens/Register1'
import UserList from './screens/UserList'
import Register2 from './screens/Register2'
import { Provider } from 'react-redux'


// ...............................
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { store } from './store/store'
import { CountProvider } from './context/CountContext'
// ...............................
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/about",
    element: <div>About Page!</div>,
  },
  {
    path: "/register",
    element: <Register2 />,
  },
  {
    path: "/userList",
    element: <UserList />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);


export default function App() {
  return (
    <>
      {/* <About />
      <Contact /> */}
      {/* <UserList /> */}
      {/* <Register1 /> */} {/* Registration form */}
      {/* <Register2 /> */} {/* useMemo() */}

      <Provider store={store}>
        <CountProvider>
          <RouterProvider router={router} />
        </CountProvider>
      </Provider>
    </>
  )
}