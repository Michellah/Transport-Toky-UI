import React from 'react'

function Section() {
  return (<>
      <div className='d-flex justify-content-evenly'>
        <span className='rounded-3 w-25'><h2 className='fs-6 rounded-3'>Villes</h2></span>
        <span className='rounded-3 w-25'><h2 className='fs-6 rounded-3'>Véhicules</h2></span>
        <span className='rounded-3 w-25'><h2 className='fs-6 rounded-3'>Tarifs</h2></span>
      </div>
  </>);
}

export default Section