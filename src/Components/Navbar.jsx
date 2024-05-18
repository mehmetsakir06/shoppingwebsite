import { Disclosure } from '@headlessui/react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getCategories } from '../redux/CategorySlice';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import { Link, useNavigate } from "react-router-dom";
import { getCategoryScreen } from '../redux/CategoryScreenSlice';
import { IoCartOutline } from "react-icons/io5";




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export default function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [category, setCategory] = useState('');


    const { categories } = useSelector((state) => state.categories)
    const { totalCount } = useSelector((state) => state.cart)



    useEffect(() => {

        dispatch(getCategories())
        dispatch(getCategoryScreen(category))

    }, [dispatch, category])


    return (
        <Disclosure as="nav" className="bg-gray-700 sticky top-0">

            <>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">

                        <div className="flex  items-center justify-center sm:items-stretch sm:justify-start">

                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4" >


                                    <Link to="/" className="  text-white 
                                          py-2 text-sm font-medium " >Home</Link>

                                    {categories.map((item, index) => (
                                        <Link
                                            onClick={() => setCategory(item)}
                                            key={index}
                                            to="/category"
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white ' : 'text-gray-300 hover:bg-gray-700 hover:text-white  ',
                                                'rounded-md px-3 py-2 text-sm font-medium '
                                            )}
                                            aria-current={item ? 'page' : undefined}

                                        >
                                            {item.charAt(0).toUpperCase() + item.slice(1)}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center  pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <SearchBar />
                            <div onClick={() => navigate("/Cart")} className='cursor-pointer' >
                                <div className='ml-10 text-4xl text-yellow-500 relative'  ><IoCartOutline />

                                </div>
                                <div className='mt-1 absolute -right-2 top-0 text-white text-md rounded-full bg-yellow-600 ' >{totalCount !== 0 && totalCount}</div>
                            </div>

                        </div>
                    </div>
                </div>


            </>

        </Disclosure >
    )
}
