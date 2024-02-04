import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Card = () => {

    const { loginWithRedirect,isAuthenticated,isLoading,user } = useAuth0();
    const { logout } = useAuth0();
    
    if (isLoading) {
      return <div className='flex justify-center'>Loading ...</div>;
    }
  
  return (
   <div>
    {isAuthenticated && (
        <div className='flex justify-center' >
        <h2 className='font-semibold text-xl'>Welcome , {user.name}</h2>
        </div>) }
     <section className="grid justify-center mt-[10vh] bg-green-200 w-fit m-auto p-8 rounded-lg tracking-wider shadow-2xl">
        <h2 className="font-bold text-4xl">Profile Details</h2>
        <div className="my-8 flex justify-center">
          <img
            src="https://avatar.iran.liara.run/public/1g"
            alt="randomimage"
            className="h-[12vh]"
          />
        </div>
        <div className="text-xl font-semibold">
        {user && (
          <div>
          <h3 className="font-bold">
            Name: <span className="text-gray-600">{user.name}</span>
          </h3>
          <h3 className="font-bold">
            Email : <span className="text-gray-600">{user.email}</span>
          </h3>
          </div>
          )}
        </div>
        
        {isAuthenticated?(
           <button
           onClick={() =>
             logout({ logoutParams: { returnTo: window.location.origin } })
           }
           className="bg-red-500 mt-5 p-2 text-l font-bold"
         >
           Log Out
         </button>
        ):(
          <button
          onClick={() => loginWithRedirect()}
          className="bg-red-500 mt-5 p-2 text-l font-bold"
        >
          Log In
        </button>
        )}
       
       
      </section>
   </div>
  )
}

export default Card