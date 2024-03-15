import { Divider } from './divider'

export function Footer() {
  return (
    <footer className="fixed bottom-0 w-full px-[50px]">
      <Divider />

      <p className="text-grey-100 text-sm text-center p-5">
        developed with 💚 by{' '}
        <a href="" className="underline hover:text-grey-100/75 duration-200">
          Paloma Rodrigues
        </a>
      </p>
    </footer>
  )
}
