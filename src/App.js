import './App.css';
import EventList from "./components/EventList";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import EventCreate from "./components/EventCreate";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <EventList/>,
        },
        {
            path: "/create",
            element: <EventCreate/>
        }
    ]);
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
