import "../App.css";



function Header(){
    const myStyle={color:"green",backgroundcolor:"yellow"};
    return(
        <div class="bg-info text-center text-light p-2">
            <h1 style={{color:"red"}}>Shopping website</h1>
            <h2 style={myStyle}>Low cost..more products</h2>
            <h3 class="text-dark">explore your products</h3>
            <a href="https://www.flipkart.com/"><button class="btn btn-light " type="submit"   >Login</button></a>
        </div>

    )
} 
export default Header;