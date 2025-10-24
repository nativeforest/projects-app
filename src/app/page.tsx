"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IProject } from "./lib/interfaces/project.interface";
import Card from "./ui/components/Card";

export default function Home() {



  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from the API
    fetch('/api/v1/projects')
      .then(response => response.json())
      .then(data => {
        console.log('Projects:', data.projects);
        setProjects(data.projects);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  const onChangeSort = (sortBy: string) => {
    if (sortBy === 'dateEnd:ASC') {
      const sortedProjects = [...projects].sort((a, b) => new Date(a.dateEnd).getTime() - new Date(b.dateEnd).getTime());
      setProjects(sortedProjects);
    } else if (sortBy === 'dateEnd:DESC') {
      const sortedProjects = [...projects].sort((a, b) => new Date(b.dateEnd).getTime() - new Date(a.dateEnd).getTime());
      setProjects(sortedProjects);
    }
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50  ">
      <main className="flex flex-col min-h-screen w-full max-w-4xl  items-center py-3 px-5 bg-white dark:bg-black sm:items-start">
          <h1 className="text-5xl text-lg font-semibold mb-10  ">Projects</h1>
        <div className="w-full flex gap-2 justify-space-between">
        <select 
          className="rounded text-white p-2 mb-3 font-semibold flex  bg-[#122682]"
          onChange={(e) => {
           onChangeSort(e.target.value);
          }}
          >
            <option value="dateEnd:ASC">Date end  ASC</option>
            <option  value="dateEnd:DESC">Date end DESC</option>
          </select>
        
         
          
        </div>
       
        <div className="flex gap-3  sm:items-start sm:text-left display-flex flex-wrap">
         { projects.map((project: IProject) => (
            <Card key={project.id} project={project} />
          )) }
         
        </div>
        
        
      </main>
    </div>
  );
}
