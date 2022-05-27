import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./components/screens/homeScreen/HomeScreen";
import "./_app.scss";

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <Header handleSidebar={handleSidebar} />
      <div className="app__container  ">
        <Sidebar showSidebar={showSidebar} handleSidebar={handleSidebar} />

        <Container fluid className="app_main  border">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><HomeScreen /></Layout>}/>
          <Route path="/search" element={<h1>search</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
