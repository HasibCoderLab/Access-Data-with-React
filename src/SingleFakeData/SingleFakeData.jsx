import React from 'react'

const SingleFakeData = ({singleData}) => {
   const {name} = singleData;
  return (
    <div>
        <h2>Name :  {name}</h2>
    </div>
  )
}

export default SingleFakeData