import { Movies } from "../pages/Movies";
import { Users } from "../pages/Users";
export const  routes = [
  {path:"/movies", component:Movies, exact:true},
  {path:"/users", component:Users, exact:true},
]
