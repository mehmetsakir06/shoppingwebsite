
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../redux/CartSlice';
import { BsFillStarFill } from "react-icons/bs";
import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

function ProductDetail() {
    const dispatch = useDispatch();
    const { singleProduct } = useSelector(state => state.singleProducts);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <div className=' bg-gray-100 grid  justify-center '>

            {singleProduct.map((item, index) =>
                <div key={index} className=' my-1 w-500 rounded-md border-2 border-slate-800 p-1 bg-white'>
                    <div className='border-b-2  '> <img src={item.image} alt="" /> </div>
                    <div className='font-semibold my-2'>{item.title}</div>
                    <div className='my-2'> {item.description.charAt(0).toUpperCase() + item.description.slice(1)} </div>
                    <div className='flex my-2' >{item.rating.rate} <span className='text-amber-400 absolute mx-6 my-1'><BsFillStarFill /> </span> </div>
                    <div className='text-orange-600'> {item.price} TL </div>
                    <button onClick={() => { dispatch(addCart(item.id)); }} className='flex justify-center rounded-full bg-sky-600 p-2  m-auto'>Add to Cart</button>


                </div>
            )
            }


        </div >
    )
}

export default ProductDetail;