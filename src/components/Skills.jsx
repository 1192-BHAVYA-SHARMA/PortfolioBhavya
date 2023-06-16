import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import java from '../assets/java1.jpg'
import python from '../assets/python.jpeg'
import tableau from '../assets/tableau.jpeg'
import IBM from '../assets/IBM COGNOS.jpeg'
import mysql from '../assets/sql1.jpeg'

function Skills() {

    const techs=[
        {
            id:1,
            src: java,
            title: 'Java',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: python,
            title: 'Python',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src: mysql,
            title: 'SQL',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src: tableau,
            title: 'Tableau',
            style: 'shadow-blue-500'
        },
        {
            id:5,
            src: IBM,
            title: 'IBM COGNOS',
            style: 'shadow-purple-500'
        },
        {
            id:6,
            src: html,
            title: 'HTML',
            style: 'shadow-green-500'
        },
        {
            id:7,
            src: css,
            title: 'CSS',
            style: 'shadow-sky-500'
        },
        {
            id:8,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-blue-500'
        },
    ]
  return (
    <div name='skills' className='bg-gradient-to-b from-black to to-gray-800 w-full h-screen sm:p-4'>
         <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 sm:py-4 inline'>
                    Skills
                </p>
                <p className='py-6'> These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    techs.map(({id,src,title,style})=>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                    ))
                }
            </div>
         </div>
    </div>
  )
}

export default Skills