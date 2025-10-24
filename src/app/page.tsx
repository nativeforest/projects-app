"use client";

import { useEffect, useState } from "react";

import Card from "./ui/components/Card";
import { IUser } from "./lib/interfaces/user.interface";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [userDetail, setUserDetail] = useState<IUser>();
  const [usersSearch, setUsersSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [word, setWord] = useState("");

  useEffect(() => {
    fetch("/api/v1/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("users:", data.users);
        setUsers(data.users);
        setUsersSearch(data.users);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  const onSearch = (word: string) => {
    if (word === "") {
      setUsersSearch(users);
      return;
    }
    fetch(`/api/v1/users/${word}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(true);
        
        setUserDetail(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50  ">
      <main className="flex flex-col min-h-screen w-full max-w-4xl  items-center py-3 px-5 bg-white  sm:items-start">
        <h1 className="text-5xl text-lg font-semibold mb-10  ">
          Test Open Atlas
        </h1>
        <div className="w-full flex gap-2 justify-space-between">
          <input
            className="rounded  p-2 mb-3 font-semibold flex border-gray-400 focus:border-gray-500 border-1"
            value={word}
            name="word"
            placeholder="Search by  DNI"
            onChange={(e) => setWord(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSearch(word);
              }
            }}
          />
        </div>
        <div className="flex gap-3  sm:items-start sm:text-left display-flex flex-wrap">
          <hr className="my-4 border-t border-gray-600" />
          {loading?"Loading...":!!userDetail && <Card key={userDetail?.id} user={userDetail} />
          }
          
        </div>
      </main>
    </div>
  );
}
