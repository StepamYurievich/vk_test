import { ClickProvider } from './components/CounterProviders/ContextClick'
import { Button } from "./components/Button/Button"
import { Main } from './components/Main'

const App = () => {
  return(
    <ClickProvider>
      <div className="app">
        <Main>
          <Main.Button size={28} colorBg={'#61dafb'} variant={'primary'} count={true} focused={true}>
            <Button.Counter /*vord='vkontakte'*/ size={20} variant="primary" pulse={false} color='#FFA07A'/>
          </Main.Button>
        </Main>
      </div>  
    </ClickProvider>
  )
}
export default App

