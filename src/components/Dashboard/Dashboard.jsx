import React, { Fragment, useEffect } from "react";
// import { SummaryRequest } from "../../APIRequest/APIRequest";
// import { useSelector } from "react-redux";
const Dashboard = () => {

  //const SummaryList = useSelector((state) => state.summary.value)

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="animated fadeInUp">Total </h5>
                <h6 className="text-secondary animated fadeInUp">Dashbord</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
