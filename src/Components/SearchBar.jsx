import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../redux/SearchSlice';
import { useNavigate } from 'react-router-dom';


function SearchBar() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('')
    const [filteredItems, setFilteredItems] = useState([]);
    const { product } = useSelector(state => state.products)
    const dispatch = useDispatch();
    useEffect(() => {
        handleSearching


    }, [query])


    const handleSearching = (event) => {
        const query = event.target.value;
        if (query !== '') {
            setQuery(query);

            navigate("search")
            const filtered = product.filter((item) =>
                item.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredItems(filtered)

            dispatch(searchProduct({ filteredItems }));
        }
        else {
            navigate("/")
            setQuery('')
        }
    };

    return (
        <input className='w-40 bg-gray-300 rounded-md p-2 ' type="text" placeholder='Search' value={query} onChange={handleSearching} />
    )
}

export default SearchBar