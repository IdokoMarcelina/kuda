import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoReorderTwo } from "react-icons/io5";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";



export default function Header() {

    const [toggle, setToggle] = useState(false)
    const action = ()=>{
        setToggle(!toggle)
    }

  return (

    <>
   <Container>
        <LogoNav>
            <Logo>
                <img src="/kudaNav1.png" alt="" />
            </Logo>
            <Navigations>
                    <Link to='/'>
                    <nav>
                    <span>Personal</span>
                    <IoMdArrowDropdown  />
                </nav>
                    </Link>
                <Link to='/business'>
                <nav>
                    <span>Business</span>
                    <IoMdArrowDropdown />
                </nav>
                </Link>
               <Link to='/companies'>
               <nav>
                    <span>Company</span>
                    <IoMdArrowDropdown />
                </nav>
               </Link>
                <nav>
                    <span>Help</span>
                    <IoMdArrowDropdown />
                </nav>
            </Navigations>
        </LogoNav>

        <Buttons>

            <SignBtn>
                Sing In
            </SignBtn>

            <JoinBtn>
                Join Kuda
            </JoinBtn>

            <ConBtn>
                <img src="/flag2.png" alt="" />
            </ConBtn>

            <Ham onClick={action}><IoReorderTwo /></Ham>

        </Buttons>

   </Container>
   {toggle === false ? null : <Sidebar toggle={toggle} setToggle={setToggle} />}

   </>
  )
}

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0px 40px;
`
const LogoNav = styled.div`
display: flex;
align-items: center;
gap: 3rem;
img{
    width: 50px;
}
`
const Logo = styled.div``
const Navigations = styled.div`
display: flex;
gap: 1rem;
color: #5e025e ;
@media (max-width:800px){
    display: none;
}
    nav{
       display: flex;
       align-items: center;
    }
`
const Buttons = styled.div`
display: flex;
gap: 2rem;

`
const SignBtn = styled.button`
background-color: transparent;
border: none;
@media (max-width:800px){
    display: none;
}

`
const JoinBtn = styled.button`
background-color: #40196D;
border: 1px solid 40196D;
border-radius: 7px;
height: 40px;
color: white;
@media (max-width:800px){
    display: none;
}
`
const ConBtn = styled.button`
border: none  ;
img{
    width: 12px
}
`

const Ham = styled.div`
    display: none;
    @media (max-width: 800px){
        display: block;
        font-size: 22px;
    }
`

