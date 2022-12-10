
import { AppBar, Toolbar, styled, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        // font-weight: bold;
        color: #000;
        text-decoration: none;
    }
`

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');

    return (
        <Component>

            <Container>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7FL6h30SOYYHouIJI3BaVgKKnAa9So4uqEA&usqp=CAU" style={{right:'0px',height:'45px'  } } ></img>
                {/* <span class="brand-name">ZHCET-BLOG<br/></span> */}
                
                                                                 

                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/account'>LOGOUT</Link>




               
            </Container>


            
           
        </Component>
    )
}

export default Header;