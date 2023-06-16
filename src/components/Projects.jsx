import React from 'react'
import VIT_INVENTORY from '../assets/portfolio/project1.jpeg';
import DICEE from '../assets/portfolio/project2.jpeg';
import TINDOG from '../assets/portfolio/project3.jpeg';

function portfolio() {

  const projects=[
    {
        id: 1,
        src: VIT_INVENTORY,
        style: 'shadow-blue-500',
        demo:'',//project link
        code:'https://github.com/1192-BHAVYA-SHARMA/Food_Consumption_Projection-'
    },
    {
      id: 2,
      src: DICEE,
      style: 'shadow-green-500',
      demo:'',//project link
      code:'',
    },
    {
      id: 3,
      src: TINDOG,
      style: '',//project link
      demo: '',
      code: ''

    }
  ]
  return (
  <div name="projects" className='bg-gradient-to-b from-gray-800  to-black w-full text-white md:h-screen'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500 sm:p-top-12'>Projects</p>
        <p className='py-6'>Check out some of my work right here</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-9'>
      {
        projects.map(({id,src,style,demo,code})=>(
        <div key={id} className={`duration-300 hover:scale-105 shadow-md  rounded-lg ${style}`}>
          <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
          <div className='flex items-center justify-center'>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={demo} >Demo</a></button>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={code} >Code</a></button>
          </div>
        </div>
        ))
      }
      </div>
    </div>
  </div>
  )
}

export default portfolio