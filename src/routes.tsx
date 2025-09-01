import {Welcome} from "./pages/Welcome";
import {WishlistSpaces} from "./pages/WishlistSpaces";
import {ERoutes, type IRoutes} from "./interfaces/navigation.ts";

export const routes: IRoutes[] = [
    {
        path: ERoutes.MAIN,
        element: <Welcome/>,
    },
    {
        path: ERoutes.SPACES,
        element: <WishlistSpaces/>,
    }
]