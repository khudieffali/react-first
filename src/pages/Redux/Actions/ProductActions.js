import { BASE_URL } from "../../../Api/apiConfig"
import { GET_ALL_PRODUCTS } from "../Constants/ProductConstants"

export const getall=({lang})=> async(dispatch,getState)=>{
const data=await((await fetch(`${BASE_URL}api/products/${lang}}`)).json())
data.map(proRec=>(
    <div>
        {proRec.productRecords}
    </div>
))
dispatch({
    type:GET_ALL_PRODUCTS,
     payload: data
     //{
    //     id: data.id,
    //     name:data.productRecords.name,
    //     description:data.productRecords.description,
    //     price:data.price
    // }
    
})
}