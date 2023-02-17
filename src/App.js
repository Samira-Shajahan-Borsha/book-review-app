import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import Charts from "./components/Charts/Charts";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Reviews from "./components/Reviews/Reviews";
import Main from "./layout/Main";
import { reviewLoader } from "./loaders/reviewLoader";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: reviewLoader,
          element: <Home></Home>
        },
        {
          path: '/reviews',
          element: <Reviews></Reviews>
        },
        {
          path: '/statistics',
          element: <Charts></Charts>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '*',
          element: <NotFound></NotFound>
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
