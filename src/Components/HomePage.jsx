import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/ProductListSlice';
import ReactPaginate from 'react-paginate';

function HomePage() {
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.products)

    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 15;
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = product.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(product.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % product.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };



    useEffect(() => {
        dispatch(getProducts())

    }, [dispatch])

    return (
        <>
            <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-6 xl:gap-x-8 '>

                {
                    currentItems.map((item, index) => (

                        <div className='m-2  border-2 rounded-lg border-indigo-100 p-4 bg-slate-100 ' key={index} >
                            <div className=' aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 '> <img className='cursor-pointer h-full w-full object-fill   lg:h-full lg:w-full' src={item.image} /></div>
                            <div className='mt-4 flex justify-between '>

                                <div className=' cursor-pointer text-gray-700 '> <h2>{item.title}</h2> </div>
                                <div className='ml-12'>
                                    <div className='mb-2'>{item.rating.rate}</div>
                                    <div className='text-sm font-medium text-gray-900 text-nowrap'>{item.price} TL</div>
                                </div>
                            </div>
                        </div>

                    ))}

            </div>
            <ReactPaginate
                className=' flex  bg-gray-700  justify-center basis-2/5  my-4 p-2'
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< prev"
                renderOnZeroPageCount={null}
            />
        </>
    )
}

export default HomePage;