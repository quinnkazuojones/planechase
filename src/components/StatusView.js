import React, { useContext, useState } from "react";
import { Context } from "../Context";
import switchoverhead from "../assets/icons/switch_overhead.svg";
import switchcurrent from "../assets/icons/switch_current.svg";
import { Link, useLocation, useHistory } from "react-router-dom";
import useKeyPress from "../hooks/useKeyPress";
import constants from "../constants";

const StatusView = () => {
  const { status } = useContext(Context);
  const { pathname } = useLocation();
  const history = useHistory();

  useKeyPress(key => {
    if (status === constants.SETTING_UP) return;
    if (key === "Space") {
      if (pathname === "/grid") history.push("/info");
      else history.push("/grid");
    }
  });

  return !status ? (
    <Link to={pathname === "/grid" ? "/info" : "/grid"} className="status-view">
      <img src={pathname === "/grid" ? switchoverhead : switchcurrent} alt="" />
    </Link>
  ) : (
    <div className="status-view">
      <p className="status">{status}</p>
    </div>
  );
};

export default StatusView;
