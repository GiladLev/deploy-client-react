import { Link } from "react-router-dom"
import styled from "styled-components"

const  Info= styled.div`
  opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left : 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
      opacity: 1;
    }

`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`

const  Auction= styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    color: black;
    

    &:hover{
      background-color: #f5fbfd;
      transform: scale(1.1);
    }
`
const Product = ({item}) => {
  {console.log(item);}
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
          <Link to={`/product/${item._id}`} style={{ textDecoration: 'none' }}>
          <Auction>
          Auction
          </Auction>
          </Link>
        </Info>
    </Container>
  )
}

export default Product