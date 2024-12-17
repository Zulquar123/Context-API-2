import { useContext } from "react";
import { UserContext } from "./Context";
import { useParams } from "react-router-dom";

export default function UserDetails() {
  const { Data } = useContext(UserContext);
  const { id } = useParams();
  console.log(Data[id]);
  return (
    <div className="flex flex-col border-2 rounded w-[30%] p-10 m-auto items-center border-sky-500 text-xl font-bold">
      <h1>User Name : {Data[id - 1].name}</h1>
      <h1>User Address : {Data[id - 1].address}</h1>
    </div>
  );
}
