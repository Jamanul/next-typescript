import React, { useState } from 'react';
type Links ={
    id:number,
    title:string,
    link:string
}
const NavLinks=[
    {
        id:1,
        title:'title1',
        link:'/title2'
    },
    {
        id:1,
        title:'title1',
        link:'/title2'
    },
    {
        id:1,
        title:'title1',
        link:'/title2'
    },
    {
        id:1,
        title:'title1',
        link:'/title2'
    },
    {
        id:1,
        title:'title1',
        link:'/title2'
    },
] 
const State = ():JSX.Element => {
    const [name,setName]=useState('hello')
    const [number,setNumber]=useState(1)
    const [links,setLinks]=useState<Links[]>(NavLinks)
    return (
        <div>
            <h2 className='text-3xl'>Exploring State types</h2>
            <button onClick={()=>{setLinks([...links,{id:2,title:'hello',link:'/hello'}])}} className='px-2 py-1'>Button</button>
        </div>
    );
};

export default State;