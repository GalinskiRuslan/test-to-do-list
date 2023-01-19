import { Header, MainPages, TaskPage, HistoryTaskPage } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPages />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/history" element={<HistoryTaskPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
