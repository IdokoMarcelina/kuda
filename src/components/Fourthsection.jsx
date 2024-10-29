


import styled from "styled-components"
import {FaArrowRight} from 'react-icons/fa'


function Fourthsection() {
  return (
   <Wrapper>

        <Image>
        <img src="/img2.jpg" alt="" />
        </Image>

        <Text>
            <h2>
                It's your money, we just help you manage it.

            </h2>
            <p>Save it, spend it, send it. it's up to you. whatever you choose to do with your money, we will make sure it's done better and free of charge. we take responsiility for that.</p>
        </Text>

       
    
   </Wrapper>
  )
}

export default Fourthsection


const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin:  110px;

  img{
    max-width: 420px;
    @media (max-width: 768px) {
        max-width: 100%
  }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 60px 40px;
    text-align: center;
  }
  
`
const Text = styled.div`
width: 40%;

h2{
    width: 100%;
    font-size: 30px;
    color: #40196D;
    font-weight: bolder;
  }

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;
  }

  @media (max-width: 768px) {
    width: 100%;
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 0.9rem;
    }
  }
`

const Image = styled.div`
width: 50%;
`