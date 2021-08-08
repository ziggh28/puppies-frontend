import React from 'react';
import './PuppyList.css';
import PuppyCard from '../../components/PuppyCard/PuppyCard'

const PuppyList = (props) => {
  const picNums = [1025,1012,1062,1084,169,200,219,237,244,275,40,433,577,582,593,611,659,718,783,790,824,837,881,937,943]
  return ( 

    <>
      <h1>Puppy List</h1>
      <div className='PuppyList-grid'>
  {props.puppies.map(puppy =>
    <PuppyCard
      key={puppy._id}
      puppy={puppy}
      randNum={picNums[Math.floor(Math.random()*(picNums.length))]}
      handleDeletePuppy={props.handleDeletePuppy}
    />
  )}
</div>
    </>
  );
}

export default PuppyList;