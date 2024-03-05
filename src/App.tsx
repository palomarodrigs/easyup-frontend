import { Footer } from './components/footer'
import { Header } from './components/header'

export function App() {
  return (
    <main className="flex flex-col justify-between px-[50px] min-h-screen bg-grey-600">
      <Header />
      <Footer />
    </main>
  )
}
