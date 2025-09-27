import { createRoot } from "react-dom/client";
import Header from "./header.jsx";
import Filter from "./Filter.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <div
      className=" min-h-screen -z-10 p-10"
      style={{ background: "var(--background)" }}
    >
      <Header />
      <Filter />
    </div>
  </>
);
