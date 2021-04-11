import React,{useState} from 'react'

import { AddCategory } from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories=['One punch','Samurai X','Dragon Ball'],
    
    const[categories,setCategories] = useState(['One Punch']);
    
    //const handleAdd=()=>{
        //setCategories([...categories,'HunterXHunter']);
    //    setCategories(cats=>[...cats,'HunterxHunter'])
    //}
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            
            <ol>
                {
                    /*categories.map(category=>{
                        return<li key={category}>{category}</li>
                    })*/
                    categories.map(category=>(
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
