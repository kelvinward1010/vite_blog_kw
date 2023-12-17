import { createBrowserRouter } from "react-router-dom";
import { blogUrl, homeUrl, introducedUrl, signinUrl, signupUrl } from "./urls";
import { 
    Introduce,
    Blog,
    Signin, 
    Signup, 
    Welcome
} from "./module";
import { 
    Error, 
    Layout
} from "./components";






export const routerConfig = createBrowserRouter([
    {
        path: homeUrl,
        element: <Layout />,
        children: [
            {
                path: introducedUrl,
                errorElement: <Error />,
                element: <Introduce />
            },
            {
                path: blogUrl,
                errorElement: <Error />,
                element: <Blog />
            }
        ]
    },
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