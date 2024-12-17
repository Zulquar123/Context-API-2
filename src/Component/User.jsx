import { useContext } from "react";

import { Link } from "react-router-dom";
import { UserContext } from "./Context";

export default function User() {
  const { Data, setData } = useContext(UserContext);
  console.log(Data);
  return (
    <div className="flex flex-col items-center  gap-2 text-white ">
      {Data.map((item) => (
        <Link
          to={`/user/${item.id}`}
          key={item.id}
          className="bg-red-700 p-3 rounded"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
