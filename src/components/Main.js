import { useEffect } from "react";
import logo from "../logo.svg";
import Axios from "axios";

export function Home(){

        useEffect(()=>{
            Axios.get()
    
        },[])
    return (<div><h1>welcome to Home page</h1></div>);
}

export function Orders(){
    return (<div><h1>welcome to orders page</h1></div>);
}

export function Payments(){
    return (<div><h1>welcome to payments page</h1></div>);
}

export function Personaldetails(){
    return (<div><h1>welcome to personal details page</h1></div>);
}