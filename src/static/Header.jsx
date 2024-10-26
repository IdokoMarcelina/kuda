import styled from "styled-components"
import { IoMdArrowDropdown } from "react-icons/io";
import { IoReorderTwo } from "react-icons/io5";



export default function Header() {
  return (
   <Container>
        <LogoNav>
            <Logo>
                <img src="/kudaNav1.png" alt="" />
            </Logo>
            <Navigations>
                <nav>
                    <span>Personal</span>
                    <IoMdArrowDropdown  />
                </nav>
                <nav>
                    <span>Business</span>
                    <IoMdArrowDropdown />
                </nav>
                <nav>
                    <span>Company</span>
                    <IoMdArrowDropdown />
                </nav>
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

            <Ham><IoReorderTwo /></Ham>

        </Buttons>

   </Container>
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

