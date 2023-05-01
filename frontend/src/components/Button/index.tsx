import * as C from './styles'

interface ButtonProps {
    text: string,
    buttonColor: string,
    buttonBackground: string,
    onClick?: () => void;
}

export const Button = ({ text, buttonColor, buttonBackground, onClick }: ButtonProps) => {
  return (
    <C.Button buttonBackground={buttonBackground} buttonColor={buttonColor} onClick={onClick}>
        {text}
    </C.Button>
  )
}
