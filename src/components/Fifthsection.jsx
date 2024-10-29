

import styled from "styled-components"
import {FaArrowRight} from 'react-icons/fa'


function Fifthsection() {
  return (
   <Wrapper>
        <Text>
            <h2>
            Save money as you spend it, seriously.
            </h2>
            <p>You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow.</p>
            <a href="">See all our savings <FaArrowRight/> </a>
        </Text>

        <Image>
        <img src="/img1.jpg" alt="" />
        </Image>
    
   </Wrapper>
  )
}

export default Fifthsection


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
    width: 50%;
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