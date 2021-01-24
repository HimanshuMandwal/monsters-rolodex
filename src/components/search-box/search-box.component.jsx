import React from "react";

import './search-box.styles.css';

/* a functional compnent is component where we just want to return the Html
code dont need the state and other lifecycle methods  */

export const SearchBox = ({placeholder,handleOnChange}) => (
    <input className="search " onChange = {handleOnChange} type="search" placeholder={placeholder}/>
)

//this searchBox is made a reusable component as it takes the placeholder as well as other things to be dynamic