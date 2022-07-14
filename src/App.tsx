import { Page } from "./pages/home";
import { Navbar } from "./components/navbar";
import { About } from "./pages/about";
import { Background } from "./components/background";
import { Container } from "./style";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Container>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Page />} />
            <Route path={"/about"} element={<About />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
