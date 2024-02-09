import Image from '../image/laptop.jpg'

function Post () {
    return (
        <div style={{
            margin: '0px 160px 45px 160px',
            display: 'flex',
            gap: '200px',
            borderRight: '1px solid rgba(0, 0, 0, 0.2)',
            borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
            boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
            fontFamily: 'Inter'
        }}>
            <div>
                <p style={{
                    fontWeight: 500,
                    fontSize: '14px',
                    marginTop: '0px'
                }}>Authors name in Topics Name · 7 july</p>
                <h1 style={{
                    fontWeight: 700,
                    fontSize: '28px',
                    marginTop: '30px',
                    marginBottom: '24px'
                }}>7 Practical CSS Tips</h1>
                <p style={{
                    fontWeight: 400,
                    fontSize: '16px'
                }}>You not only learn more Python by implementing what 
                    you already know but, in the end, you can see how all
                    your hard work pays off.
                </p>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    marginTop: '70px',
                    marginBottom: '36px',
                    gap: '8px'
                }}>
                    <button style={{
                        border: 0,
                        backgroundColor: '#E1E0E5',
                        borderRadius: '100px',
                        padding: '6px 16px',
                        fontWeight: 500,
                        fontSize: '14px',
                        color: '#081E34',
                        height: '30px'
                    }}>Java Script</button>
                    <p style={{
                        fontWeight: 500,
                        fontSize: '14px',
                        opacity: 0.5
                    }}>12 min read · Selected for you</p>
                </div>              
            </div>
            <div>
                <img src={Image} alt='laptop'
                style={{
                    width: '265px',
                }}></img>
            </div>
        </div>
    )
}

export default Post;