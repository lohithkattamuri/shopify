import { useEffect } from "react";
import logo from "../logo.svg";
import Axios from "axios";

function Footer(){
    useEffect(()=>{
        Axios.get()

    },[])
   
    return(
        <div class="row bg-warning " style={{backgroundcolor:"blue" }} >
            <div class="col-4 ">
                <h2>choose your products</h2>
                <div >
                <ol >
                    <li><a class="text-dark text-decoration-none"  href="#">Mens wear
                        </a>
                        <ul>
                            <li ><a class="text-dark text-decoration-none"   href="#">shirts </a></li>
                            <li><a class="text-dark text-decoration-none"  href="#">trousers </a></li>
                            <li><a class="text-dark text-decoration-none"  href="#">t-shirts </a></li>
                            <li><a class="text-dark text-decoration-none"  href="#">jeans</a></li>
                            </ul>
                            </li>
                    <li><a class="text-dark text-decoration-none"  href="#">Womens wear</a>
                    <ul>
                            <li><a class="text-dark text-decoration-none"  href="#">sarees </a></li>
                            <li><a class="text-dark text-decoration-none"  href="#">skirts </a></li>
                            <li><a class="text-dark text-decoration-none"  href="#">kurthis </a></li>
                            <li><a class="text-dark text-decoration-none"  href="#">nightware</a></li>
                            </ul></li>
                    <li><a class="text-dark text-decoration-none"  href="#">Childrens wear</a></li>
                </ol>
                </div>
            
            </div>
            <div class="col-4">
            <h2>Any queris-contact</h2>
             <ol>
                <li><a class="text-dark text-decoration-none" href="#">Instagram</a></li>
                <li><a class="text-dark text-decoration-none" href="#">Whatsapp</a></li>
                <li><a class="text-dark text-decoration-none" href="#">Facebook</a></li>
                <li><a class="text-dark text-decoration-none" href="#">Twitter</a></li>

             </ol>

                
            </div>
            <div class="col-4">
                <a href="https://flipcart.com"><img src={logo} alt="image" /></a>
                
            </div>

        </div>
    );
}
 export default Footer;

