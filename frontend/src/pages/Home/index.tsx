import { useEffect, useState } from 'react'
import api from "../../services/api"
import { Parties } from '../../types/parties'
import { Card } from '../../components/Card'
import * as C from './styles'
import { Header } from '../../components/Header'

export const Home = () => {
  const [parties, setParties] = useState<Parties[]>([])

  const getParties = async () => {
    try {
      const { data } = await api.get('/parties')
      setParties(data)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getParties()
  }, [])
  

  return (
    <>
      <Header />
      <C.Home>
        <C.Title>Suas festas</C.Title>
        <C.WrapperCard>
          {parties.map((item, index) => (
            <Card 
              item={item} 
              key={index}
            />
          ))}
        </C.WrapperCard>
      </C.Home>
    </>
    
  )
}
