import { useEffect, useState } from 'react'
import api from "../../services/api"
import { Parties } from '../../types/parties'
import { Card } from '../../components/Card'
import * as C from './styles'

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
    <C.Container>
      {parties.map((item, index) => (
        <Card item={item} key={index}/>
      ))}
    </C.Container>
  )
}
