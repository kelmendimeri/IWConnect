import Main from "../containers/home/components/Main/Main";
import React from "react";
import { Route, Routes as RRDRoutes } from "react-router-dom";

function Routes() {
  return (
    <RRDRoutes>
      <Route path="/" element={<Main />} />
      <Route path="/explore" element={<div>explore</div>} />
      <Route path="/notifications" element={<div>notifications</div>} />
      <Route path="/messages" element={<div>messages</div>} />
      <Route path="/bookmarks" element={<div>bookmarks</div>} />
      <Route path="/lists" element={<div>lists</div>} />
      <Route path="/profile" element={<div>profile</div>} />
      <Route path="/more" element={<div>more</div>} />
      <Route path="/explore" element={<div>explore</div>} />
      <Route path="*" element={<div>Page does not exist</div>} />
    </RRDRoutes>
  );
}

export default Routes;
