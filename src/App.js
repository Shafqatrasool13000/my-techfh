import React, { createContext, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Layout/AuthScreens/Login/Index";
import Signup from "./Layout/AuthScreens/SignUp/Index";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Estimates from "./Layout/Estimates/Index";
import Locations from "./Layout/Locations/Index";
import Contacts from "./Layout/Contacts/Index";
import Clients from "./Layout/Clients/Index";
import USerDetail from "./Layout/Estimates/EstimateUserDetail/Index";
import UserLocation from "./Layout/Locations/UserLocation/Index";
import ClientDetail from "./Layout/Clients/ClientDetail/Index";
import ForgetPassword from "./Layout/AuthScreens/ForgotPassword/Index";
import ResetPassword from "./Layout/AuthScreens/ResetPassword/Index";
import USerContact from "./Layout/Contacts/UserContact/Index";
import CreateNew from "./Layout/Estimates/CreateNew/CreateNew";
import AddItem from "./Layout/Estimates/CreateNew/AddItems/Index";
import Home from "./Layout/Home/Index";
import Delete from "./Components/Delete/Index";
import MobileSiderBar from "./Components/Drawer/Drawer";
import Cakes from "./Components/Cakes/Cakes";
import Icecream from "./Components/Icecream/Icecream";
import UpdateEstiamte from "./Layout/Estimates/UpdateEstiamte/Index";
import { QueryClientProvider, QueryClient } from "react-query";
// this is the devTool the react query provides
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();
export const CollapsedContext = createContext();

function App() {
  const [collapse, setCollapse] = useState(false);
  const menuCollapsed = (data) => {
    setCollapse(data);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <CollapsedContext.Provider value={{ menuCollapsed, collapse }}>
        <MobileSiderBar />
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/estimates" element={<Estimates />} />
          <Route path="/estimates/delete" element={<Delete />} />
          <Route path="/estimates/createNew" element={<CreateNew />} />
          <Route path="/estimates/update" element={<UpdateEstiamte />} />
          <Route path="/estimates/createNew/addItem" element={<AddItem />} />
          <Route path="/estimates/:estimstesId" element={<USerDetail />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:locationsId" element={<UserLocation />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/contact/:contactId" element={<USerContact />} />
          <Route path="/client" element={<Clients />} />
          <Route path="/clients/:clientId" element={<ClientDetail />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/icecream" element={<Icecream />} />
        </Routes>
      </CollapsedContext.Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
