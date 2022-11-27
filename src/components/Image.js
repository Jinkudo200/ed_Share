import React,{useState} from 'react'
import { ref,getDownloadURL } from "firebase/storage";
import { storage } from '../config/firebase'
export default function Image({url,style}) {
    const [absurl, setUrl] = useState(null)
    React.useEffect(()=>{
        const func = async()=>{
            const someref = ref(storage, 'images/'+url);
            await getDownloadURL(someref).then(x=>setUrl(x))
            .catch((e)=>console.log(e))
        }
        func();
    },[])
    return (
    <img src={absurl} width="100%" height={150} style={style}/>        
    )
}
