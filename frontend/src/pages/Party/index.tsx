import { useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import api from "../../services/api"
import * as C from './styles'
import { Parties, Services } from '../../types/parties'
import { CardServices } from '../../components/CardServices'
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from '../../components/Button'

export const Party = () => {
  const { id } = useParams()
  const [party, setParty] = useState({} as Parties)
  const [loading, setLoading] = useState<boolean>(true)
  const services: Services[] = party.services

  useEffect(() => {
    const getParty = async () => {
      try {
          const { data } = await api.get(`/parties/${id}`)
          setParty(data)
          setLoading(false)
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
    {!loading ? (
      <>
          <C.Title>{party.title}</C.Title>
          <C.WrapperButtons>
            <Button text="Editar" buttonColor="#ffffff" buttonBackground="#6f2dbd" />
            <Button text="Excluir" buttonColor="#ffffff" buttonBackground="#5e6472" />
          </C.WrapperButtons>
          <p>Orçamento: R$ {party.budget.toLocaleString('pt-br', {minimumFractionDigits: 2})}</p>
          <C.Subtitle>Serviços contratados:</C.Subtitle>
          <C.CardContainer>
            {services?.map((item, key) => (
                <CardServices 
                  item={item}
                  key={key}
                />
            ))}
          </C.CardContainer>

      </>
    ):  
    <>
      <ClipLoader
      color='#6f2dbd'
      loading={loading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
      />
      <h2>Carregando...</h2>
    </>
  }
  </C.Party>
      
       
    </>
  )
}
