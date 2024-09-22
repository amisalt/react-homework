import { AuthPage } from "../pages/AuthPage";
import { ContentPage } from "../pages/ContentPage";
export const privateRoutes = [
    {path:"/auth", element:AuthPage, exact:true},
    {path:"/content", element:ContentPage, exact:true}
]
export const publicRoutes = [
    {path:"/auth", element:AuthPage, exact:true},
]