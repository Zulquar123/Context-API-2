import { createContext, useState } from "react";

export const UserContext = createContext();

export default function Context(props) {
  const data = [
    { id: 1, name: "Zulquar", address: "Raniganj" },
    { id: 2, name: "Zeeshan", address: "Asansol" },
    { id: 3, name: "AliShan", address: "Kolkata" },
  ];
  const [Data, setData] = useState(data);
  return (
    <UserContext.Provider value={{ Data, setData }}>
      {props.children}
    </UserContext.Provider>
  );
}
