import React from 'react'

const SingleFakeData = ({ singleData }) => {
  const { name, img, profession, phone, email, website } = singleData
  return (
    <div className="text-center border rounded-2xl p-4 shadow-md">
      <h2>Name: {name}</h2>
      <h2>Profession: {profession}</h2>
      <h2>Website: {website}</h2>

      <div className="flex justify-center my-4">
        <img src={img} alt="" className="w-32 h-32 rounded-full object-cover" />
      </div>

      <hr />
      <br />
    </div>
  )
}

export default SingleFakeData
