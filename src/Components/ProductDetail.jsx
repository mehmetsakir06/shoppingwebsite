
import { useSelector } from 'react-redux'

function ProductDetail() {

    const { singleProduct } = useSelector(state => state.singleProducts);
    console.log(singleProduct)





    return (
        <div>

            {singleProduct.map((a, i) =>
                <div key={i}>

                    <div>{a.title}</div>
                    <div>{a.price} </div>
                </div>
            )}

        </div>
    )
}

export default ProductDetail;