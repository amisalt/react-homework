import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import PostsPage from "./pages/PostsPage"
export const privateRoutes = [
    {path:"/posts", element:PostsPage, exact:true},
    {path:"/posts/:postId", element:PostPage, exact:true},
    {path:"/", element:MainPage, exact:false},
    {path:"/auth", element:AuthPage, exact:true},
]
export const publicRoutes = [
    {path:"/", element:MainPage, exact:false},
    {path:"/auth", element:AuthPage, exact:true},
]