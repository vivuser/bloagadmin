import { createBrowserRouter } from "react-router-dom";
import User from "./Users/user";
import App from "./App";


const AppRouter =  createBrowserRouter(
    [
      {
        path:"/",
        element: <App /> ,
        children : [
            {
                path: '/user',
                element: <User />
            }
        ]
      }
    ]
  )

  export default appRouter;