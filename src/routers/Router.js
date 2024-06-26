import React from "react";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import { Route, Routes, Navigate } from "react-router-dom";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="home" />} />
			<Route path="home" element={<Home />} />
			<Route path="shop" element={<Shop />} />
		</Routes>
	);
};

export default Router;
