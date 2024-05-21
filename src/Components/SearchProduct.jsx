import { useSelector } from 'react-redux';
import { BsFillStarFill } from "react-icons/bs";
function SearchProduct() {

    const { query } = useSelector(state => state.querys);
    const searchingData = Object.entries(query)[0][1]

    return (

        <div className='mt-2 grid grid-cols-1 gap-x-1 gap-y-1 sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-6 xl:gap-x-8 '>
            {
                searchingData.map((item, index) => (

                    <div className='m-2  border-2 rounded-lg border-indigo-100 p-4 bg-slate-100' key={index} >
                        <div className='  h-80 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 '> <img className='cursor-pointer h-full w-full object-fill   lg:h-full lg:w-full' src={item.image} /></div>
                        <div className='mt-4 flex justify-between'>

                            <div className=' cursor-pointer text-gray-700'> <h2>{item.title}</h2> </div>
                            <div className='ml-12'>
                                <div className='mb-2'>{item.rating.rate} <span className='text-amber-400 absolute mx-2 my-1'><BsFillStarFill /> </span></div>
                                <div className='text-sm font-medium text-gray-900 text-nowrap text-orange-600'>{item.price} TL</div>
                            </div>
                        </div>
                    </div>

                ))}

        </div>

    )
}

export default SearchProduct