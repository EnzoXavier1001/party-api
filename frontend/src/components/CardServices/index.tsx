import { Services } from "../../types/parties"
import * as C from './styles'

interface CardServices {
    item: Services,
    key: number
}


export const CardServices = ({ item, key } : CardServices) => {
  return (
    <C.Card key={key}>
        <img src={item.image} alt="" />
        <h2>{item.name}</h2>
    </C.Card>
  )
}
