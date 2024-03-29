import React, {Fragment} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/Login-Page";
// import RegistrationPage from "./pages/Registration-Page";
import DashboardPage from "./pages/Dashboard-Page/";
import CreatePage from "./pages/Create-Page";
import Page404 from "./pages/Page-404";
import FullscreenLoader from "./components/masterLayout/Fullscreen-Loader";
import {getToken} from "./helper/SessionHelper";

const App = () => {

    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<DashboardPage/>}/>
                    <Route exact path="/Create" element={<CreatePage />}/>
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </BrowserRouter>
            <FullscreenLoader/>
        </Fragment>
    );

    // if(getToken()){
    //     return (
    //         <Fragment>
    //             <BrowserRouter>
    //                 <Routes>
    //                     {/* <Route exact path="/" element={<DashboardPage/>}/> */}
    //                     <Route path="*" element={<Page404/>}/>
    //                 </Routes>
    //             </BrowserRouter>
    //             <FullscreenLoader/>
    //         </Fragment>
    //     );
    // }
    // else {
    //     return (
    //         <Fragment>
    //             <BrowserRouter>
    //                 <Routes>
    //                     <Route path="/" element={<Navigate to="/Login" replace />}/>
    //                     <Route exact path="/Login" element={<LoginPage />}/>
    //                     {/* <Route exact path="/Registration" element={<RegistrationPage />}/> */}
    //                     <Route path="*" element={<Page404/>}/>
    //                 </Routes>
    //             </BrowserRouter>
    //             <FullscreenLoader/>
    //         </Fragment>
    //     );
    // }
};

export default App;