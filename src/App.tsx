import { Header } from './components/header'
import { Footer } from './components/footer'
import { Hero } from './components/hero'
import { FileInput } from './components/file-input'

export function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="flex-grow px-[50px]">
        <Header />

        <div className="flex flex-col items-center gap-10">
          <Hero />
          <FileInput />
        </div>
      </section>

      <Footer />
    </main>
  )
}
