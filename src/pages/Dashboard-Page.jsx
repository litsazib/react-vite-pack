import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/masterLayout/Master-Layout";
import LazyLoader from "../components/masterLayout/LazyLoader";
// import Dashboard from '../components/Dashboard/Dashboard';
const Dashboard = lazy(() => import("../components/Dashboard/Dashboard"));
const DashboardPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <Dashboard />
      </Suspense>
      {/* <MasterLayout>
            </MasterLayout> */}
    </Fragment>
  );
};

export default DashboardPage;
