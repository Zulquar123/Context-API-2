import { Link, Route, Routes } from "react-router-dom";
import User from "./Component/User";
import UserDetails from "./Component/UserDetails";

export default function App() {
  return (
    <div>
      <nav className="flex justify-center items-center">
        <Link to="/user" className="px-3 py-2 bg-sky-500 rounded m-5">
          User
        </Link>
      </nav>

      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}
