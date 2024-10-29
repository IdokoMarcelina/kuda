import styled from "styled-components"
import {FaArrowRight} from 'react-icons/fa'


function ThirdSection() {
  return (
   <Wrapper>
        <Text>
            <h2>
                Your phone + our app + a debit card = a simpler life.

            </h2>
            <p>we designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves</p>
            <a href="">Open An Account in Minutes <FaArrowRight/> </a>
        </Text>

        <Image>
        <img src="/hero2.jpg" alt="" />
        </Image>
    
   </Wrapper>
  )
}

export default ThirdSection


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