import React from 'react';
import './RegionList.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Regions() {
  const country = useParams().Regions;
  const regions = useSelector((state) => state.regions);
  console.log('regions', regions);
  return (
    <div className='Regions_container'>
            <ul>
      {regions.length < 1 ? <div className='regions_error'>{`!! No regional data provided for ${country}`}</div> : (

             regions.map((region) => (
               <li key={region.id}>
                 <strong>{region.name}</strong>
                 <strong>{region.today_confirmed}</strong>
               </li>

             ))
      )}
       </ul>
    </div>
  );
}

export default Regions;
