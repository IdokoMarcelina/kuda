import styled from "styled-components"
import { FaBorderAll } from "react-icons/fa";

const Info = () => {

    const cardArray = [
        {
            icon: <FaBorderAll />,
            dsc: "Order a Kuda card on the app with pickup and delivery options."
        },
        {
            icon: <FaBorderAll />,
            dsc: "Enjoy cashless payment options online and offline."
        },
        {
            icon: <FaBorderAll />,
            dsc: "Pay your essential bills and buy gift cards easily."
        },
        {
            icon: <FaBorderAll />,
            dsc: "Get 25 free transfers to Nigerian banks every month."
        },
        {
            icon: <FaBorderAll />,
            dsc: "Save money automatically any time you spend."
        },
    ]

    return(
        <Main>
        <div className="maincon">
           {cardArray.map((infoo, i)=>(
            <Card key={i}>
            <h1>{infoo.icon} </h1>
            <p>{infoo.dsc} </p>
           </Card>
           ))}
        </div>

        </Main>
    )
}

export default Info

const Card = styled.div`
height: 100px;
width: 300px;
margin: 10px;
padding: 6px;
background-color: gainsboro;
color: #40196D;
display: flex;
gap: 1rem;
`

const Main = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between; 

    .maincon{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
`

