import { createBrowserRouter } from "react-router-dom";
import { blogUrl, conversationUrl, homeUrl, introducedUrl, profileUrl, signinUrl, signupUrl } from "./urls";
import { 
    Introduce,
    Signin, 
    Signup, 
    Welcome,
    LayoutBlog,
    Profile
} from "./module";
import { 
    Error, 
    Layout
} from "./components";
import { Conversation } from "./module/conversation/Conversation";






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
                element: <LayoutBlog />
            },
            {
                path: conversationUrl,
                errorElement: <Error />,
                element: <Conversation />
            },
            {
                path: profileUrl,
                errorElement: <Error />,
                element: <Profile />
            },
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