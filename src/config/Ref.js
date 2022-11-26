import React,{useState} from 'react';
import {getDoc,getDocs} from "firebase/firestore";
import { db } from './firebase';
import { doc } from 'firebase/firestore';
export default function Ref({docRef,children}) {
  const [data,setdata]=React.useState({})
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(false)
  const getData=async ()=>{
    setLoading(true)
    const docSnap = await getDoc(docRef)
    .then(res=>res.data())
    .then(data=>setdata(data))
    .catch(e=>setErr(true))
    .finally(()=>setLoading(false))
  }
  React.useEffect(()=>{
      getData() 
  },[])
  return (
    <div>
      {err?<div>error</div>:(loading?<div>Loading</div>:children(data))}
    </div>
  );
}
export function Refs({docRef,children}) {
    const [data,setdata]=React.useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)
    const getData=async ()=>{
      setLoading(true)
      const docSnap = await getDocs(docRef)
      setdata([]);
      docSnap.forEach(doc=>setdata(d=>[...d,{id:doc.id,...doc.data()}]))
      setLoading(false)
    }
    React.useEffect(()=>{
        getData() 
    },[])
    
    return (
      <div>
        {err?
          <div>error</div>
          :(
            loading?
            <div>Loading</div>
            :(
              data?
              children(data):
              <div>{'Nothin to show :('}</div>
            )
              
          )
        }
      </div>
    );
}
export function RefRef({docRef,children}) {
  const [data,setdata]=React.useState([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(false)
  React.useEffect(()=>console.log(data),[data])
  const getData=async ()=>{
    setLoading(true)
    const docSnap = await getDocs(docRef)
    setdata([]);
    docSnap.forEach(async doc_=>{
      const item1 = await getDoc(doc(db,doc_.data().ref));
      setdata(d=>[...d,{id:item1.id,...item1.data()}])
    })
    setLoading(false)
  }
  React.useEffect(()=>{
      getData() 
  },[])
  
  return (
    <div>
      {err?<div>error</div>:(loading?<div>Loading</div>:children(data))}
    </div>
  );
}


//   const docRef = doc(db, "project", "oz3HYc78y1wXrix6tQaL");
