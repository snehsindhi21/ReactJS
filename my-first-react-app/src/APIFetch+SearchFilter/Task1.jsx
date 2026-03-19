import React, { useEffect, useState } from 'react';
import git from './Users.json';

const Task1 = () => {
  //! State
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // New state for the search input

  //! Fetch
  const Users = async () => {
    let response = await fetch("https://api.github.com/users");
    let data = await response.json();
    setUserData(data);
  };

  //! useEffect
  useEffect(() => {
    Users();
  }, []);

  //! Filter Logic
  // We filter the data based on whether the login name or ID includes the search term.
  // We convert everything to lowercase to make the search case-insensitive.
                        //here for fetch api use userData.filter
    const filteredUsers = git.filter((user) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesName = user.login.toLowerCase().includes(searchLower);
    const matchesId = user.id.toString().includes(searchLower);
    
    return matchesName || matchesId;
  });

  return (
    <div>
      <header className='flex flex-col items-center justify-evenly h-26 w-full  px-4 bg-slate-950 border-slate-800 text-slate-200'>
        <aside className='font-bold text-xl'>Git Users List</aside>
        
        
        <input
          type="text"
          placeholder="Search by ID or Name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='border-2 border-black bg-slate-600 rounded-2xl px-3 py-1 w-74'
        />
      </header>

      <main className='flex w-full flex-wrap border-2 p-4 bg-slate-900 border-slate-800 text-slate-200 justify-evenly gap-4'>
        
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => {
            return (
              <div key={user.id}>
                <div className='bg-slate-800 border-slate-700 text-slate-200 hover:shadow-slate-950 rounded-2xl p-4 shadow-xs hover:shadow-2xl h-60 w-60 border-2 flex items-center justify-center gap-2 text-center flex-col'>
                  <img src={`${user.avatar_url}`} alt="avatar" className='h-20 w-20 rounded-full' />
                  <p className='font-bold'>ID: {user.id}</p>
                  <p className='font-bold text-sm'>Name: {user.login}</p>
                
                  <a 
                    href={user.html_url} 
                    target='_blank' 
                    rel="noreferrer" 
                    className="bg-emerald-500 text-slate-950 hover:bg-emerald-400 px-3 py-1 rounded mt-2"
                  >
                    View
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          
          <p className="text-xl font-bold mt-10">No users found matching "{searchTerm}"</p>
        )}
      </main>
    </div>
  );
};

export default Task1;