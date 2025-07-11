import React from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "/watch", element: <WatchPage /> },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <Head />
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
