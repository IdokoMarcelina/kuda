




import styled from "styled-components"
import {FaArrowRight} from 'react-icons/fa'


function Sixthsection() {
  return (
   <Wrapper>

        <Image>
        <img src="/img3.jpg" alt="" />
        </Image>

        <Text>
            <h2>
            Turn off access, turn on safety.
            </h2>
            <p>Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try.</p>
            <a href="">Learn more about Cards</a>
        
        </Text>

       
    
   </Wrapper>
  )
}

export default Sixthsection


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