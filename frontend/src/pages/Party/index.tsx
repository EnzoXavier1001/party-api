import { useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import api from "../../services/api"
import * as C from './styles'
import { Parties } from '../../types/parties'

export const Party = () => {
  const { id } = useParams()
  const [party, setParty] = useState({} as Parties)

  useEffect(() => {
    const getParty = async () => {
      try {
          const { data } = await api.get(`/parties/${id}`)
          setParty(data)
      } catch (error) {
        console.log(error)
      }
    }
    getParty()
  }, [])

  console.log(party)

  return (
    <>
      <Header />
      <C.Party>
        <C.Title>{party.title}</C.Title>
        <p>Orçamento: {party.budget}</p>
        <C.Subtitle>Serviços contratados:</C.Subtitle>
      </C.Party>
    </>
  )
}
