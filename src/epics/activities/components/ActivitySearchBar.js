import React, { useEffect, useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivities } from '../../../reducers/activitiesSlice';

const ActivitySearchBar = () => {
  const [items, setItems] = useState([]);
  const entities = useSelector((state) => state.activities.entities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  useEffect(() => {
    const activities = Object.values(entities);
    setItems(() => [...activities]);
  }, [entities]);

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
};

export default ActivitySearchBar;
