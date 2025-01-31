import { createBrowserRouter } from "react-router-dom";
import Main from "../components/main";
import Error from "../Views/errors";
import App from "../App";
import UsersPage from "../Views/usersPage";
import UserDetails from "../Views/userDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/user",
        element: <UsersPage />
      },
      {
        path: "/user/:id",
        element: <UserDetails />
      }
    ]
  }
])

export default router;