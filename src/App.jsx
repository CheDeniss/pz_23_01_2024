import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css'
import Layout from "./layout.jsx";
import Error from "./error.jsx";
import Events from "./components/Events.jsx";
import NewEvent from "./components/NewEvent.jsx";
import Calculator from "./components/CalculatorEX2.jsx";
import GameEX3 from "./components/GameEX3";

function App() {

  const route = createBrowserRouter(
      [{
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
          {path: "/podiya", element: <Events/>},
          // {path: "/podiya/:type", element: <Events/>},
          // {path: "/podiya/:type", element: <Events/>},
          {path: "/podiya/new", element: <NewEvent/>},
            {path: "/calc", element: <Calculator/>},
            {path: "/XO", element: <GameEX3/>},
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
