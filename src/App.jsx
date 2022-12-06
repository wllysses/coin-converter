import { createGlobalStyle } from "styled-components"
import { AppRoutes } from "./routes/Routes"

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <AppRoutes />
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  .App {
    min-height: 100vh;
    background-color: #242424;
    color: #fff;
  }
`

export default App