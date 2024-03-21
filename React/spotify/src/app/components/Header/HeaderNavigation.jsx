const HeaderNavigation = () => {
    return (
        <ul>
            <li><a href="#/Premium">Premium</a></li>
            <li><a href="#/Support">Support</a></li>
            <li><a href="#/Download">Download</a></li>
            <li className='hidden-mobile'>|</li>
            <li className='active'><a href="#/Sign up">Sign Up</a></li>
            <li className='active'><a href="#/Login">Login</a></li>
            
        </ul>
    );
}

export default HeaderNavigation;