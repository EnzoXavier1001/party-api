import { useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import api from "../../services/api"
import * as C from './styles'
import { Parties, Services } from '../../types/parties'
import { CardServices } from '../../components/CardServices'

export const Party = () => {
  const { id } = useParams()
  const [party, setParty] = useState({} as Parties)
  const services: Services[] = party.services

  useEffect(() => {
    const getParty = async () => {
      try {
          const { data } = await api.get(`/parties/${id}`)
          setParty(data)
          console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getParty()
  }, [])

  return (
    <>
      <Header />
      <C.Party>
        <C.Title>{party.title}</C.Title>
        <p>Orçamento: {party.budget}</p>
        <C.Subtitle>Serviços contratados:</C.Subtitle>
        <C.CardContainer>
           {services?.map((item, key) => (
              <CardServices 
                item={item}
                key={key}
              />
           ))}
        </C.CardContainer>
      </C.Party>
    </>
  )
}
