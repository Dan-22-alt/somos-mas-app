import React, { useEffect, useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { ObtenerNovedades} from '../../../reducers/newsBackofficeReducer';

const NewsSearchBar = () => {
    const [items, setItems] = useState([]);
    const news = useSelector((state) => state.news.news);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ObtenerNovedades());
    }, [dispatch]);

    useEffect(() => {
        const novedades = Object.values(news);
        setItems(() => [...novedades]);
    }, [news]);

    const handleOnSelect = (item) => {
        console.log('handle on select', item.id);
    };
    
    const formatResult = (item) => {
        return item;
    };



    return ( 
        <>
        <ReactSearchAutocomplete
          items={items}
          onSelect={handleOnSelect}
          autoFocus
          formatResult={formatResult}
          styling={{
            borderRadius: '5px',
            boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 1px 0px',
          }}
        />
      </>
     );
}
 
export default NewsSearchBar;