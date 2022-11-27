import React from 'react'
import { useLocation } from 'react-router-dom';
import { QuillReader } from '../components/Quill';
import "../styles/university.css"
export default function UniveristyDetails() {
  const {state} = useLocation();
  const { data } = state;
  return (
    <div className='university-detail'>
      <QuillReader value={data}/>
    </div>
  )
}
