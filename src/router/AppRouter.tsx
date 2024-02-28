import { createBrowserRouter } from "react-router-dom";
import { RouterData } from "./RouterData";
import App from "../App";
import { Home, About, Error } from "../_root/";

const AppRouter = createBrowserRouter([
  {
    path: RouterData.home,
    element: <App />,
    children: [
      {
        path: RouterData.home,
        element: <Home />,
      },
      {
        path: RouterData.about,
        element: <About />,
      },
    ],
  },
  {
    path: RouterData.error,
    element: <Error />,
  },
]);

export default AppRouter;
