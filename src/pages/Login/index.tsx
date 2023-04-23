import React from 'react'

const Login = () => {
  return (
    <div className='h-screen flex flex-col gap-8 items-center justify-center px-4'>
        <h1 className='text-lg md:text-4xl uppercase'>Login</h1>
        <form action="" className='flex flex-col gap-4 w-full max-w-lg'>
            <input className='w-full p-4 outline-none' type="email" placeholder='Email' />
            <input className='w-full p-4 outline-none' type="password" placeholder='Password' />
            <input className='w-full p-4 outline-none cursor-pointer bg-gray-200' type="submit" placeholder='Submit' />
        </form>
    </div>
  )
}

export default Login