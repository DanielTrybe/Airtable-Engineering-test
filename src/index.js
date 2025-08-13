import ReactDOM from "react-dom/client";
import { Routes } from "./routes";

function App() {
  return <Routes />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
