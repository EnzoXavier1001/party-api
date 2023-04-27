import { Parties } from '../../types/parties'
import * as C from './styles'

interface CardProps {
    item: Parties,
    key: number
}

export const Card = ({ item } : CardProps) => {
  return (
    <C.Card>
        <C.CardTitle>
            {item.title}
        </C.CardTitle>
    </C.Card>
  )
}
