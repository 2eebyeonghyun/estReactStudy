import { Outlet, Link } from 'react-router-dom';

// Outlet : 현재 선택된 경로 랜더링
// Link : URL을 설정하고 검색 기록을 추적하는데 사용
const Layout = () => {

    const flexElement = {
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
    }

    return(
        <>
            <nav>
                <ul style={flexElement}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/blogs'>Blogs</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Layout;