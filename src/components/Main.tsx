
import {MainProps} from '../types/types'
import { Button } from './Button/Button'

export const Main = ({children}:MainProps) => {
  return (
    <div>{children}</div>
  )
}

Main.Button = Button
