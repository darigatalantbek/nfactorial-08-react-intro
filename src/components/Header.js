function Header () {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <header style={{
                padding: '24px 160px',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                fontWeight: 500,
                fontSize: '18px',
                fontFamily: 'Kanit'
            }}>medium alike</header>
            <h1 style={{
                padding: '64px 160px',
                margin: '0px',
                fontWeight: 500,
                fontSize: '48px',
                fontFamily: 'Kanit'
            }}>Hello, world!</h1>
        </div>
    )
}

export default Header;

