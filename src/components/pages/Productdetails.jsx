import { Outlet,useParams } from "react-router-dom";

export default function Productdetails(){
    const params = useParams()
    console.log(params)

    return {
        <div>
            <h1> Product Details </h1>
            product id{params.id}
        </div>
    }
}