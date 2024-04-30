import { Route, Routes } from "react-router-dom"
import { Footer, Header } from "./components"
import { routes } from "./utils/routes"

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
        {
          routes.map(route => (
            <Route key={route.id} path={route.path} element={route.component} />
          ))
        }
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
