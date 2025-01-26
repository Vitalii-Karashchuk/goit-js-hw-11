
export const searchApi = searchData => {
    const fetchOption = {
            key: "48272938-5d16b358faf0ec3baa9736196",
            q: `${searchData}`,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        };

        const urlParams = new URLSearchParams(fetchOption);

    return  fetch(`https://pixabay.com/api/?${urlParams}`)
    
        .then(responce => {
            if(!responce.ok){
               
                throw new Error(responce.status );
            };
    
           
            return responce.json();
        })
}
