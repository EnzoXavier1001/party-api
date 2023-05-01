import {
    createBrowserRouter,
} from "react-router-dom";

import { Home } from './pages/Home'
import { Party } from "./pages/Party";
import { PartyNew } from "./pages/NewParty";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/party/:id",
      element: <Party />,
    },
    {
      path: "/party/new",
      element: <PartyNew />,
    }
]);