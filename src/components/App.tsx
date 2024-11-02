"use client";

import { useState } from "react";
import { student_data } from "@/assets/data";
import React from "react";
import Card from "./Card";
import CategoryButton from "./CategoryButton";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

export default function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const students = student_data.filter((student) => {
    const containSearch = student.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const containFilter = filter === "all" || student.attendance === filter;
    return containSearch && containFilter;
  });

  return (
    <div className="">
      <div className="flex justify-between">
        <SearchBar setSearch={setSearch} />
        <Profile />
      </div>

      <div className="flex justify-between my-8">
        <div>
          <h1 className="text-2xl font-bold">Students</h1>
        </div>
        <div className="flex">
          <CategoryButton setFilter={setFilter} />
        </div>
      </div>

      <div className="flex flex-wrap gap-10">
        {students.map((student) => (
          <Card
            key={student.id}
            name={student.name}
            attendance={student.attendance}
            department={student.department}
            profileImage={student.profileImage}
            email={student.email}
          />
        ))}
      </div>
    </div>
  );
}
