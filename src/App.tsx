import { Header } from './components/header'
import { Footer } from './components/footer'
import { Description } from './components/description'

export function App() {
  return (
    <main className="flex flex-col justify-between px-[50px] min-h-screen bg-grey-600">
      <Header />
      <Description />
      <Footer />
    </main>
  )
}
