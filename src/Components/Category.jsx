import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BsFillStarFill } from "react-icons/bs";
import { getSingleProduct } from '../redux/SingleProductSlice';
import LoadingScreen from './LoadingScreen';
import { useNavigate } from 'react-router-dom';

function Category() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { categoryScreen } = useSelector(state => state.categoryScreen)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 400);
    }, [categoryScreen])

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <div className='mt-6 grid grid-cols-1  gap-y-10 sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-6 xl:gap-x-1 '>
            {
                categoryScreen.map((item, index) => (

                    <div onClick={() => {
                        dispatch(getSingleProduct(item.id));
                        navigate(`/details/${item.id}`);

                    }} className='m-1  border-2 rounded-lg border-indigo-100 p-1 bg-slate-100  ' key={index} >
                        <div className='  w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 xs:mih-h-30 md:h-40 lg:h-80  h-full'> <img className='cursor-pointer h-full w-full object-fill   lg:h-full lg:w-full' src={item.image} /></div>
                        <div className='mt-4 flex justify-between '>

                            <div className=' cursor-pointer text-gray-700 overflow-hidden'> <h2>{item.title}</h2> </div>
                            <div className='ml-12'>
                                <div className='flex my-2' >{item.rating.rate} <span className='text-amber-400 absolute mx-6 my-1'><BsFillStarFill /> </span> </div>
                                <div className='text-sm font-medium text-nowrap text-orange-600  '>{item.price} TL</div>
                            </div>
                        </div>
                    </div>

                ))}

        </div>
    )
}

export default Category;
