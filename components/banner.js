import React from "react";
import Image from 'next/image'
import Socoolnft from '../public/Banner.jpg'
import RR from '../public/gif.gif'
import Bentley from '../public/bentley.gif'
import Socoolcars from '../public/cars.jpg'

const Banner = () => {
    return  (
        
<main id="socool" className="bg-slate-200" > 
          

<div className=" hero container mx-auto  text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

<div className="wrapper max-h-72">
  <div className="bg"> So Cool Cars </div>
  <div className="fg"> So Cool Cars </div>
</div>
        <div className=" justify-between flex-wrap ">


        
          <div className="object-right-top overflow-visible rounded-t top-4 left-4 static ">          
          
        </div>

        
      </div>
      <div  className=" border-4 outline-offset-2 outline-1  border-indigo-600 rounded-lg object-center columns-1 relative">
            <Image
      src={Socoolnft}
      alt="So Cool Cars NFT"
      width={1900}
      height={450}
    />    


<p className=" decoration-4  text-base md:text-2xl text-gray-700 dark:text-black border-4 outline outline-offset  outline-1 border-indigo-600 rounded-lg">
                Our design philosophy is based on 3D modelling state of the art concept cars,<br></br> while remaining faithful to every minor detail. 
                Every car is compatible with 360° visualization using Augmented Reality technology,<br></br> to give you an immersive and life-like experience with your favorite NFT car.

                   <p> Dimension of reality that makes change possible and understandable. 
                    An indefinite and homogeneous environment in which natural events and car existence take place.
                </p></p>        
               
               
                 



    <div className=" columns-4xs flex space-x-5  ">
                  <div>
<Image
src={RR}
width={350}
height={350}

/>
</div><div className="" >
<Image

src={Socoolcars}
width={1000}
height={350}

/>
</div>
<div>

<Image
src={Bentley}
width={350}
height={350}
/>
</div>
</div>     
</div>
    </div>

    </main>
    


        )
    }
    
    
    
    export default Banner;