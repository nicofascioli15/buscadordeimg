import SearchBar from "./components/SearchBar";
import searchImage from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";
import "./app.css"

const App = () => {

    const [images,setImages] = useState([]);

    const handleSubmit = async (term) =>{
        const resultado = await searchImage(term);
        setImages(resultado);
    }

    return(
    <>
        <div>
            <SearchBar enSubmit={handleSubmit}/>
            <ImageList images={images}/>
        </div>
    </>
    )
}

export default App