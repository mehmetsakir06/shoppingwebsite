import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/ProductListSlice';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { getSingleProduct } from '../redux/SingleProductSlice';
import { BsFillStarFill } from "react-icons/bs";

function HomePage() {


    const navigate = useNavigate();
    const dispatch = useDispatch();


    const { product } = useSelector(state => state.products)


    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 15;
    const endOffset = itemOffset + itemsPerPage;

    const currentItems = product.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(product.length / itemsPerPage);



    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % product.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {

        dispatch(getProducts())

    }, [])



    return (
        <>
            <div className='mt-6 grid grid-cols-1  gap-y-10 sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-6 xl:gap-x-1 '>

                {
                    currentItems.map((item, index) => (

                        <div onClick={() => {

                            dispatch(getSingleProduct(item.id));
                            navigate(`/details/${item.id}`);

                        }} className='m-1  border-2 rounded-lg border-indigo-100 p-1 bg-slate-100  ' key={index} >

                            <div className='  w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 '> <img className='cursor-pointer h-60 w-full object-fill   lg:h-full lg:w-full' src={item.image} /></div>
                            <div className='mt-4 flex justify-between '>

                                <div className=' cursor-pointer text-gray-700 overflow-hidden'> <h2>{item.title}</h2> </div>
                                <div className='ml-12'>
                                    <div className='mb-2'>{item.rating.rate} <span className='text-amber-400 absolute mx-2 my-1'><BsFillStarFill /> </span></div>
                                    <div className='text-sm font-medium text-gray-900 text-nowrap '>{item.price} TL</div>
                                </div>
                            </div>
                        </div>

                    ))}

            </div>
            <ReactPaginate

                className=' grid grid-cols-4 bg-gray-300 rounded-full  w-40 m-auto my-1 p-2'
                nextLabel="nt>"
                onPageChange={handlePageClick}
                pageCount={pageCount}
                previousLabel="<pv"

            />
        </>
    )
}

export default HomePage;