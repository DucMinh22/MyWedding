import { NavLink } from "react-router-dom";
const Thankyou = () => {
    return (
        <header className="site-header" id="header">
		<h1 className="site-header__title" style={{color: "#bd945a", textAlign: 'center', marginTop: '200px'}} data-lead-id="site-header-title">THANK YOU!</h1>
        <NavLink to="/" style={{display: 'flex', justifyContent: 'center', textDecoration: 'none'}}> 
            <div style={{
                    backgroundColor: "#bd945a", 
                    color: 'white', 
                    textAlign: 'center', 
                    lineHeight: '45px', 
                    marginTop: '45px', 
                    height: '45px', 
                    borderRadius: '5px',
                    width: '165px'
                }}>Back to home</div>
            
        </NavLink>
	</header>
    )
}

export default Thankyou;