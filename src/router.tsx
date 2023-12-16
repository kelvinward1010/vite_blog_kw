import { createBrowserRouter } from "react-router-dom";
import { homeUrl, introducedUrl, postUrl, signinUrl, signupUrl } from "./urls";
import { 
    Introduce,
    Post,
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
        errorElement: <Error />,
        children: [
            {
                path: introducedUrl,
                element: <Introduce />
            },
            {
                path: postUrl,
                element: <Post />
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