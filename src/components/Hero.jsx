import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import styled from "styled-components";


export default function Hero() {
  return (
    <>
    <Wrapper>
        <Container>
            <Textdiv>

                <h1>The money App for Africans.</h1>
                <p>Make free transfers, enjoy cashless payment
                     options and earn interest on your saving
                      with Kuda</p>

                <Buttons>
                    <button><FaApple size={20} /> <span>Download on the <br />App Store</span></button>
                    <button><IoLogoGooglePlaystore size={20} /> <span>Download on the <br />Play Store</span></button>
                </Buttons>
            </Textdiv>

            <ImageDiv>
                <img src="/hero.png" alt="" />
            </ImageDiv>
        </Container>
    </Wrapper>
    </>
  )
}

const Buttons = styled.div`

display: flex;
gap: 2rem;
align-items: center;
justify-content: center;
    button{
        background-color: black;
        color: white;
        font-size: 10px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span{
        font-size: 10px;
    }
    
`

const Textdiv = styled.div`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        color: #40196D;
    }
`

const Wrapper = styled.div`
max-width: 85%;
margin-left: auto;
margin-right: auto;
padding: 0px 10px;
min-height: calc(100vh -70px);
    
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    

    @media (max-width: 800px){
        flex-wrap: wrap;
        display: block;
        justify-content: center;
        align-items: center;
        img{
           max-width:100% ;
        }
    }
`

const ImageDiv = styled.div`
   img{
    max-width: 100%;
   }
`
