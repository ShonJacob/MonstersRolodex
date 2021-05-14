import React from 'react'
import './search-box.styles.css'

const SearchBox = ({placeholder, searchChange}) => {
    return (
        <div className='search'>
            <input type="search" placeholder={placeholder} onChange={searchChange} />
        </div>
    )
}

export default SearchBox
