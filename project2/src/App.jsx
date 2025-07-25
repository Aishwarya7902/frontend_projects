import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  const { search, pathname } = useLocation();
  console.log(search, pathname);
  return (
    <div className="h-screen w-screen flex ">
      {(pathname != "/" || search.length > 0) && (
        <Link
          to={"/"}
          className="px-4 py-2 rounded-md bg-red-100 absolute right-10"
        >
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit/>} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
