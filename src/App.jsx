
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
   <div>
         <h1>Length : {fakeData.length} </h1>
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
