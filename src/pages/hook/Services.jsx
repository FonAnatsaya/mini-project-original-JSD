import { v4 as uuid } from "uuid";
import { useState } from "react";

let activeUser = {};

export const GetActiveUser = () => {
  return activeUser;
};
export const SetActiveUser = (user) => {
  console.log(user);
  activeUser = user;
  console.log(activeUser);
};

export const UsersServices = () => {
  const keys = ["username", "password", "fullname", "organization"];
  const [users, setUsers] = useState([
    {
      id: uuid(),
      username: "admin",
      password: "admin",
      fullname: "Johnny Defoton",
      organization: "Spy007.inc,USA",
      role: "admin",
    },
    {
      id: uuid(),
      username: "sss",
      password: "sss",
      fullname: "Britney Spear",
      organization: "SingleWowWow",
      role: "user",
    },
    {
      id: uuid(),
      username: "Lilly",
      password: "6333",
      fullname: "Star World",
      organization: "Universer",
      role: "user",
    },
  ]);

  const get = () => {
    return users;
  };

  const create = (data) => {
    if (typeof data !== "object") {
      alert("Please input object of feed-post");
      return;
    }
    for (const key of keys) {
      if (!(key in data)) {
        alert(`field ${key} is missing!!`);
        return;
      }
    }
    setUsers((prev) => [...prev, { id: uuid(), ...data }]);
  };

  // const update = (data) => {
  //   if (typeof data !== "object") {
  //     alert("Please input object of feed-post");
  //     return;
  //   }
  //   for (const key of keys) {
  //     if (!(key in data)) {
  //       alert(`field ${key} is missing!!`);
  //       return;
  //     }
  //   }
  //   const updateUsers = users.map((user) => {
  //     if (user.id === data.id) return data;
  //     return user;
  //   });
  //   setUsers(updateUsers);
  // };

  // const remove = (id) => {
  //   const updateUsers = users.filter((user) => user.id !== id);
  //   setUsers(updateUsers);
  // };

  return { get, create };
};
