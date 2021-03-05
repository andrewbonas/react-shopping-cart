import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { CommonLoading } from "react-loadingg";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.css";

const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress && <CommonLoading />;
};

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <LoadingIndicator />
  </React.StrictMode>,
  document.getElementById("root")
);
