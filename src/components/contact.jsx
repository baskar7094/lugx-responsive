import React from 'react'
import {Link} from 'react-router-dom'

export default function Contact() {
  return (
    <div className=' my-20 md:flex items-center justify-around'>
        <article className='text-center sm:py-5 md:p-1'>

        <p className='text-lg uppercase'>our shop</p>

<h2 className='text-xl py-3'>go pre-order buy & get best <span>prices</span> for you!</h2>

<p className='mb-5 text-sm '>lorem ipsum dlor consectours adipiscing, sed do elumod tempor incididunt.</p>
<Link to={'/'} className='bg-red-500 px-3 py-2 text-white rounded-2xl text-lg hover:shadow-2xl'>shop now</Link>


        </article>
<article className='text-center my-5 sm:py-5 md:p-1'>
    <p className='text-md uppercase py-3 '>newletter</p>
    <h2 className='text-xl mb-5'>get up to $100 off just buy <span>subscribe</span> newsletter!</h2>

<input type="email" placeholder='your email' className='ring-2 ring-slate-400  rounded-s-md py-2 px-3' />
<button className='bg-red-500 px-3 py-2 ring-red-500 ring-2  rounded-e-md text-white'>subscribe now</button>
</article>
    </div>
  )
}
