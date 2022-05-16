import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';
const GifExpertApp = (props) => {
    
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories(categories => [...categories, 'HunterXHunter']);
    // }


    return (
    <Fragment>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />

        <ol>
            {
                categories.map( category => (
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
            }
        </ol>
    </Fragment>
  )
}


export default GifExpertApp;