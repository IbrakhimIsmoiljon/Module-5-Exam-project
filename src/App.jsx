import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Components/Body/Body";
import Aside from "./Components/Aside/Aside";
import Footer from "./Components/Footer/Footer";
import Overview from "./Components/Overview/Overview";
import Repository from "./Components/Repostories/repos";
import Followers from "./Components/Followers/Followers";
import Following from "./Components/Following/Following";
import Projects from "./Components/Projects/Projects";
import Stars from "./Components/Stars/Stars"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  // let userInfo = API.getUserInfo();
  // let getFolllowers = API.getFolllowers();
  // let getFollowing = API.getFollowing();
  return (
    <>
      <BrowserRouter>
        {/* <context.Provider value={{ userInfo, getFolllowers, getFollowing }}> */}
        <Navbar />
        <Body />
        <Aside />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/following" element={<Following />} />
          <Route path="/repositories" element={<Repository />} />
          <Route
            path="*"
            element={
              <h1
                className="coming"
                style={{
                  marginTop: "-650px",
                  width: "65%",
                  height: "650px",
                  marginLeft: "500px",
                  color: "#fff",
                }}
              >
                Not found
              </h1>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/stars" element={<Stars />} />
        </Routes>
        <Footer />
        {/* </context.Provider> */}
      </BrowserRouter>
    </>
  );
};

export default App;
