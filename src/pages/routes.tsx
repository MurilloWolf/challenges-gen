import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  RandomProject,
  RandomChallenge,
  ProjectList,
  NotFound,
} from "./index";
import { Header, Footer } from "../components/index";

export default function PagesRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-project" element={<RandomProject />} />
        <Route path="/random-challange" element={<RandomChallenge />} />
        <Route path="/project-list" element={<ProjectList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
