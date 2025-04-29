import React from 'react'
import hooker_img from '../assets/hooker.jpg'
import hubblegraph_img from '../assets/hubblelaw.png'
 
function Discoveries() {
  return (
    <div className='mx-8 my-10 '>
      <h2 className='text-3xl font-semibold text-center'>Discoveries of Edwin Hubble</h2>
      {/* First discovery */}
      <div className='  mt-6 text-gray-700'>
        <h2 className='text-xl font-semibold mb-1  '>Universe goes beyond the Milky Way galaxy</h2>
        <hr />

        <div className='flex flex-col md:flex-row mt-8 gap-8'>
          
          <div className='flex flex-col gap-6'>
            <p>Edwin Hubble's arrival at Mount Wilson Observatory, California, in 1919 coincided roughly with the completion of the <span className='font-semibold'> 100-inch (2.5 m) Hooker Telescope</span>, then the world's largest. At that time, the prevailing view of the cosmos was that the universe consisted entirely of the Milky Way galaxy.</p>
            <p>Using the Hooker Telescope at Mount Wilson, Hubble identified Cepheid variables, a standard candle discovered by Henrietta Swan Leavitt. Comparing their apparent luminosity to their intrinsic luminosity gives their distance from Earth. Hubble found Cepheids in several nebulae, including the Andromeda Nebula and Triangulum Nebula. His observations, made in 1924, proved conclusively that these nebulae were much too distant to be part of the Milky Way and were, in fact, entire galaxies outside the Milky Way galaxy; thus, today they are no longer considered nebulae.</p>
            <p>Hubble's findings fundamentally changed the scientific view of the universe. Supporters state that Hubble's discovery of nebulae outside of our galaxy helped pave the way for future astronomers. Although some of his more renowned colleagues simply scoffed at his results, Hubble published his findings. This published work earned him an award titled the American Association Prize and five hundred dollars from Burton E. Livingston of the Committee on Awards.</p>
            <p>Hubble also devised the most commonly used system for classifying galaxies, grouping them according to their appearance in photographic images. He arranged the different groups of galaxies in what became known as the <span className='font-semibold'> Hubble sequence </span>.</p>

          </div>
          <img className='md:h-[500px] w-full md:object-cover' src={hooker_img}/>
        </div>
      </div>

      {/* Second Discovery */}
      <div className='mt-6 text-gray-700'>
      <h2 className='text-xl font-semibold mb-1  '>Redshift increases with distance</h2>
      <hr />

      <div className='flex flex-col md:flex-row mt-8 gap-8'>
        <img className='w-[450px]' src={hubblegraph_img} />
      <div className='flex flex-col gap-6'>
        <p>Hubble went on to estimate the distances to 24 extra-galactic nebulae, using a variety of methods. In 1929, Hubble examined the relationship between these distances and their radial velocities as determined from their redshifts. All of his estimated distances are now known to be too small, by up to a factor of about 7. This was due to factors such as the fact that there are two kinds of Cepheid variables or confusing bright gas clouds with bright stars.[32] However, his distances were more or less proportional to the true distances, and combining his distances with measurements of the redshifts of the galaxies by Vesto Slipher, and by his assistant Milton L. Humason, he found a roughly linear relationship between the distances of the galaxies and their radial velocities (corrected for solar motion), a discovery that later became known as <span className='font-semibold'>Hubble's law</span>.</p>
        <p>This meant that the greater the distance between any two galaxies, the greater their relative speed of separation. When interpreted that way, Hubble's measurements on 46 galaxies lead to a value for the Hubble constant of <span className='font-semibold'>500 km/s/Mpc</span>, which is much higher than the currently accepted values of <span className='font-semibold'>74 km/s/Mpc (cosmic distance ladder method) or 68 km/s/Mpc (CMB method)</span> due to errors in their distance calibrations.</p>
        <p>Hubble's estimate of what we now call the Hubble constant would put <span className='font-semibold'>The Big Bang</span> only 2 billion years ago.</p>
      </div>
      
      </div>

      </div>

    </div>
  )
}

export default Discoveries