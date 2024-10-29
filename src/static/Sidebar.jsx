import {Link} from 'react-router-dom'
import styled from 'styled-components'


function Sidebar({toggle, setToggle}) {

    const Action = ()=>{
        setToggle(false)
    }
    
  return (
   <Container>

    <Buttons>
        <button className='btn1'>Join kuda</button>
        <button className='btn2'>Sign in</button>
    </Buttons>
        <Link to='/' onClick={Action}>
            <nav>Home</nav>
        </Link>
        <Link to='/personal' onClick={Action}>
            <nav>Personal</nav>
        </Link>
        <Link to='/business' onClick={Action}>
            <nav>Business</nav>
        </Link>
        <Link to='/companies' onClick={Action}>
            <nav>Companies</nav>
        </Link>
        <Link to='/' onClick={Action}>
            <nav>Developers</nav>
        </Link>
        <Link to='/' onClick={Action}>
            <nav>Contact Us</nav>
        </Link>
        <Link to='/' onClick={Action}>
            <nav>Help</nav>
        </Link>
   </Container>
  )
}

export default Sidebar

const Container = styled.div`
    min-height: calc(100vh - 50px);
    background-color: white ;
    border-radius: 5px;
    padding: 20px;

    a{
    text-decoration: none;

    }

    nav{
        color: white;
        margin: 30px;
        color: #40196D;
        font-size: 20px;
    
    }
`
const Buttons = styled.div`
display: flex;
gap: 2rem;
margin: 20px;
    .btn1{
        width: 100px;
        height: 40px;
        background-color: #40196D;
        border: 1px solid #40196D;
        border-radius: 10px;
        color: white;
        font-size: 15px;
    }
    .btn2{
        width: 100px;
        height: 40px;
        background-color: white;
        border: 1px solid #40196D;
        border-radius: 10px;
        color: #40196D;
        font-size: 15px;

    }
`