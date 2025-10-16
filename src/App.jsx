
import { useEffect, useState } from 'react'
import './App.css'
import SingleFakeData from './SingleFakeData/SingleFakeData';

function App() {

const   [fakeData ,  setFakeData] =  useState([]);

useEffect(() =>{
fetch('FakeData.json')
.then(res => res.json())
.then(data => setFakeData(data))
},[])
  return (
   <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-12'>       
         {
          fakeData.map( singleData =>  <SingleFakeData
           singleData = {singleData}
           key = {singleData.id}
          ></SingleFakeData> )
         }
   </div>
  )
}

export default App
