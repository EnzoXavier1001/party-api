import * as C from './styles'

interface ButtonProps {
    text: string,
    buttonColor: string,
    buttonBackground: string
}

export const Button = ({ text, buttonColor, buttonBackground }: ButtonProps) => {
  return (
    <C.Button buttonBackground={buttonBackground} buttonColor={buttonColor}>
        {text}
    </C.Button>
  )
}
