import { NavLink } from 'react-router-dom';

// Link와 NavLink
// Link : 클릭 시 다른 페이지로 이동하는 컴포넌트
// NavLink : 현재 경로와 일치할 때 특정 스타일이나 클래스를 적용할 수 있는 컴포넌트
const Navigation = () => {

    const flexElement = {
        listStyle: 'none',
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        paddingBottom: '1.5rem',
        borderBottom: '1px solid #ccc'
    }

    return(
        <>
            <nav>
                <ul style={flexElement}>
                    <li>
                        <NavLink 
                            style={({ isActive }) => ({color: isActive ? 'blue' : 'black', textDecoration: 'none'})} 
                            to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            style={({ isActive }) => ({color: isActive ? 'blue' : 'black', textDecoration: 'none'})} 
                            to='/About'>About</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            style={({ isActive }) => ({color: isActive ? 'blue' : 'black', textDecoration: 'none'})} 
                            to='/Products'>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;