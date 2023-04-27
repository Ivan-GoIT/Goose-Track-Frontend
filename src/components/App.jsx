// import CalendarPage from 'pages/CalendarPage/CalendarPage';
// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';

import RegisterPage from "pages/RegisterPage/RegisterPage";
import UserPage from "./AccountPage/accountPage";

// const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));

export const App = () => {
  return (
    <>
    <RegisterPage />
    <UserPage />
    </>
  )
};
