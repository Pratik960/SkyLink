
import {AppBar, Toolbar, styled} from "@mui/material";
import { Link } from 'react-router-dom';
import { routePath } from "../routes/route";

const StyledAppBar = styled(AppBar)({
    background : '#2d2d2d',
    height : 64,
    '& > div > *' : {
        textDecoration : 'none',
        color : 'inherit',
        marginRight : 20,
        fontSize : 14,
    }

})
 
const Header = () => {
    const logo = "https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png";
    return(
        <StyledAppBar>
            <Toolbar>
                <Link to={routePath.Home}>
                    <img src={logo} alt="logo" style={{width: 95, marginBottom: 6}}/>
                </Link>
                <Link to={routePath.Create}>Post a job</Link>
                <Link to={routePath.Posts}>Find job</Link>
            </Toolbar>
        </StyledAppBar>
    )
} 

export default Header;