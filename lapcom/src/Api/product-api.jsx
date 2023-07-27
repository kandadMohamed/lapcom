import axios from "axios";

const API = '/Products';

export const getProductsIdCategorie = async (idCtg) =>{
    // ? We Need To Get 4 Product For rach Categorie;
    try{
        const res = await axios.get(
            `${API}.json`,
        )
        const resData = res.data;
        const productTransform = [];

        for(const product in resData){
            const { title, img, desc, price, quantity, promotion, dateAdd } = resData[product];
            productTransform.push({
                id: product,
                title, 
                img,
                desc,
                price,
                quantity,
                promotion,
                dateAdd
            })
        }

        return productTransform;
    }catch(e){
        return e.message;
    }
}
