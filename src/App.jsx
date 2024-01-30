import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css'
import Layout from "./layout.jsx";
import Error from "./error.jsx";
import Events from "./components/Events.jsx";

function App() {

  const route = createBrowserRouter(
      [{
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
          {path: "/podiya/:type", element: <Events/>},
          {path: "/podiya/:type", element: <Events/>},
          {path: "/podiya/:type", element: <Events/>}
        ]
      }]
  );

  return (
      <div>
        <RouterProvider router={route} />
      </div>
  )
}

export default App
