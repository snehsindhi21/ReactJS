import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const UserDetails = () => {
    let navigate = useNavigate();
    const { state } = useLocation();

    //Defensive check in case someone navigates here without state
    if(!state) {
        return(
            <div className='text-center mt-10 text-red-500'>No User Data Found.</div>
        );
    }
    
        let goBackMain =()=>{
            navigate("/");
        }
    

  return (
    <div className='max-w-5xl mx-auto p-6'>
        <h1 className='text-center text-4xl font-bold mb-8 text-gray-800'>{state.login}'s Profile</h1>
        <main className='flex flex-col md:flex-row gap-8 bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100'>
            <aside className='md:w-1/3 bg-gray-50 flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-gray-200'>
                <div className='w-48 h-48 md:w-full md:h-64 overflow-hidden rounded-xl shadow-md'>
                    <img src={state.image} alt={state.id} className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-300' />
                </div>
                <p className='mt-4 text-sm text-gray-500 font-mono uppercase tracking-widest'>ID:{state.id}</p>
            </aside>
            <article className='md-w-2/3 p-8'>
            <section>
                <h2></h2>
            </section>
            </article>
        </main>
    </div>
  )
}

export default UserDetails