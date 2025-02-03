import { ClickProvider } from './components/CounterProviders/ContextClick'
import { Button } from "./components/Button/Button"
import { Main } from './components/Main'

const App = () => {
  return(
    <ClickProvider>
      <div className="app">
        <Main>
          <Main.Button size={36} colorBg={'#ff7d32'} variant={'primary'} count={true} focused={true} vord={'Vkontakte super prosto'}>
            <Button.Counter size={20} variant="primary" pulse={true} color='#ffcdb0'/>
          </Main.Button>
        </Main>
      </div>  
    </ClickProvider>
  )
}
export default App

