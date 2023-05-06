import './App.css';
import EventList from "./components/EventList";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import EventCreate from "./components/EventCreate";
import NotFound from "./components/NotFound";
import EventView from "./components/EventView";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <EventList/>,
            errorElement: <NotFound/>
        },
        {
            path: "/create",
            element: <EventCreate/>,
            errorElement: <NotFound/>
        },
        {
            path: "/view/:id",
            element: <EventView/>,
            errorElement: <NotFound/>
        }
    ]);
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
