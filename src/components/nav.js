import { Link } from "react-router-dom";

function Nav(){
    return(
<div className=" navbar bg-secondary">
<div className="row">
    <div className="col-3"><Link  className="nav-link text-light" to="/">Home</Link></div>
    <div className="col-3"><Link className="nav-link text-light" to="/Orders">orders</Link></div>
    <div className="col-3"><Link className="nav-link text-light" to="/Payments">payments</Link></div>
    <div className="col-3 pr-2"><Link className="nav-link text-light" to="/Personaldetails"> personal details</Link></div>
    
    
    
    
    </div>
</div>
    )
}
export default Nav;