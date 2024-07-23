import { useLocation } from 'react-router-dom';

export default function PathGet(){

    const location = useLocation()
    
       return(
         <><p>Hello, useLocation</p></>
       )
    
    }