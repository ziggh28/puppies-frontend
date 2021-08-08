import React from 'react';

import { Link } from 'react-router-dom';

function PuppyCard({puppy, handleDeletePuppy,randNum}) {

  return(

    <div className="card" >
      <img 
				src={`https://picsum.photos/id/${randNum}/640/480`}
				className="card-img-top"
				alt="..."
			/>
      <div className="card-body">
        <h5 className="card-title">{puppy.name}</h5>
        <p className="card-text">{puppy.age}-year-old {puppy.breed}</p>
      </div>
      <div className='card-footer'>
        <Link
        className='btn btn-sm btn-warning'
        to={{
          pathname:'/edit',
          state:{puppy}
        }}
        >
          Edit
        </Link>
        <button
          className='btn btn-sm btn-danger m-left'
          onClick={() => handleDeletePuppy(puppy._id)}>
            Delete
          </button>
      </div>
      </div>
  )
}

export default PuppyCard ;