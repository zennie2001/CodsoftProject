import React from 'react'
import hubble_img from '../assets/hubble.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div >
        <h1 className='text-3xl font-semibold text-center mt-4 h-' >Edwin Hubble
        </h1>

        <div className='my-10 flex flex-col md:flex-row justify-center gap-10 mx-8   '>
          <img className='w-[450px] mt-10 ' src={hubble_img}/>
          <div className='flex flex-col justify-center gap-6 text-gray-700 mt-10'>
            <div>
            <p className='text-xl font-semibold'>Introduction</p>
            <hr/>
            </div>
            <p>
            <span className='font-semibold'>Edwin Powell Hubble</span> (November 20, 1889 – September 28, 1953) was an American astronomer. He played a crucial role in establishing the fields of extragalactic astronomy and observational cosmology.
            </p>
            <p>Hubble proved that many objects previously thought to be clouds of dust and gas and classified as <span className='font-semibold'>"nebulae" </span> were actually galaxies beyond the Milky Way.</p>
            <p>Hubble confirmed in 1929 that the recessional velocity of a galaxy increases with its distance from Earth, a behavior that became known as Hubble's law, although it had been proposed two years earlier by Georges Lemaître. The Hubble law implies that <span className='font-semibold'> the universe is expanding.</span>  A decade before, the American astronomer Vesto Slipher had provided the first evidence that the light from many of these nebulae was strongly red-shifted, indicative of high recession velocities.</p>
            <p>Hubble's name is most widely recognized for the <span className='font-semibold'> Hubble Space Telescope </span>, which was named in his honor, with a model prominently displayed in his hometown of Marshfield, Missouri.</p>

          </div>
        </div>

        <div className=' mx-8 flex flex-col justify-center gap-6 mb-10'>
        <div>
        <p className='text-xl font-semibold'> Discoveries</p>
        <hr/>
        </div>
        <div className='flex gap-4 items-center'>
        <p>Some of his discoveries are: </p>
        <Link to='/discoveries'><button className='border px-4 py-1 rounded-md text-white bg-slate-700'>Discoveries</button></Link>
        </div>
        
       
        </div>
    </div>
  )
}

export default Home