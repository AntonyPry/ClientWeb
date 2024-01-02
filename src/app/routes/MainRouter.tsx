///Users/antonypry/Documents/Учеба/Политех/3 семестр/Веб-клиент/web-client/src/app/routes/MainRouter.tsx
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Character from "../../pages/Character";
import Characters_list from "../../pages/Characters_list";
import Episodes from "../../pages/Episodes";
import Locations from "../../pages/Locations";
import { CHARACTERS_LIST_ROUTE, LOCATIONS_ROUTE, EPISODES_ROUTE, CHARACTER_ROUTE } from './configs';

const MainRouter = ({isAuth = false}) => {
  
  const basedPath: RouteObject[] = [
    { path: CHARACTERS_LIST_ROUTE, element: <Characters_list />,},
    { path: LOCATIONS_ROUTE, element: <Locations /> },
    { path: EPISODES_ROUTE , element: <Episodes />,},
    { path: "*", element: <Navigate to={'/'} replace />},
  ]

  const authPath: RouteObject[] = [
    { path: `/${CHARACTER_ROUTE}/:id`, element: <Character /> },
  ]

  const resultPaths: RouteObject[] = basedPath
  
  if(isAuth){
    resultPaths.push(...authPath)
  }
  return useRoutes(resultPaths);
}

export default MainRouter;