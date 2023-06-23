import { useState } from "react";

const SearchBar = ({enSubmit}) => {
    
    const [term,setTerm] = useState ("");

    const handleChange = (e) => {
        setTerm(e.target.value);
    }

    const handleSubmit = (e) =>{
    e.preventDefault()
    enSubmit(term)

    }

    return(
        <div className="containerSearchBar" >
            <form onSubmit={handleSubmit}>
                <input placeholder="que imagen buscas?" value={term} onChange={handleChange} className="searchBar"/>
            </form>
        </div>
    )

}

export default SearchBar