import { createBrowserRouter } from "react-router-dom";
import { signinUrl, signupUrl } from "./urls";
import { Error } from "./components/error";
import { 
    Signin, 
    Signup, 
    Welcome
} from "./module";






export const routerConfig = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
        element: <Welcome />,
    },
    {
        path: signupUrl,
        errorElement: <Error />,
        element: <Signup />
    },
    {
        path: signinUrl,
        errorElement: <Error />,
        element: <Signin />
    }
])