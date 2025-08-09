import { createHashRouter } from "react-router-dom";
import App from "../App";
import { PlantedTreesPage } from "../../pages/subpages/PlantedTreesPage";
import { GetHelp } from "../../pages/subpages/GetHelp";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/planted",
    element: <PlantedTreesPage />,
  },
  {
    path: "/getHelp",
    element: <GetHelp />
  }
]);



// {
//   path: "*",
//   element: <NotFoundPage />,
// },