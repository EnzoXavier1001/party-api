import { useNavigate } from 'react-router-dom'
import { Parties } from '../../types/parties'
import * as C from './styles'

interface CardProps {
    item: Parties,
    key: number
}

export const Card = ({ item, key } : CardProps) => {
  const navigate = useNavigate()
  
  return (
    <C.Card key={key}>
        <C.WrapperImg>
          <img src={item.image} alt="" />
        </C.WrapperImg>
        <C.Container>
          <C.CardTitle>
              {item.title}
          </C.CardTitle>
          <C.Button onClick={() => navigate(`/party/${item._id}`)}>Detalhes</C.Button>
        </C.Container>
    </C.Card>
  )
}
