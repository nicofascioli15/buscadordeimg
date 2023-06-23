import axios from "axios"

const searchImgs = async (term) => {

    const response = await axios.get("https://api.unsplash.com/search/photos",{
    headers:{
        Authorization: "Client-ID s3AL0jPTyORBwkrMHUTz2LuNkx-EIYAYTC40SpCSSVM"
    },
    params:{
        query: term
    }
});

return response.data.results

}

export default searchImgs

