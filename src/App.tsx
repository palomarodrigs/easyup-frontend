import { Header } from './components/header'
import { Footer } from './components/footer'
import { Hero } from './components/hero'
import { FileInput } from './components/file-input'

export function App() {
  const onSubmit = () => {}
  return (
    <main className="min-h-screen px-[50px] bg-grey-600">
      <Header />

      <section className="flex flex-col items-center gap-10">
        <Hero />

        <form onSubmit={onSubmit}>
          <FileInput />
        </form>

        <Footer />
      </section>
    </main>
  )
}
