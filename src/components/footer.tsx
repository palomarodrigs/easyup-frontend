import { Divider } from './divider'

export function Footer() {
  return (
    <footer className="w-full px-[50px] animate-downTop">
      <Divider />

      <p className="text-grey-100 text-xs lg:text-sm text-center py-5">
        developed with 💚 by{' '}
        <a
          href="https://github.com/palomarodrigs"
          target="_blank"
          className="underline hover:decoration-mint-100 duration-200 focus:outline-none focus:ring-2 focus:ring-mint-200 focus:ring-offset-2 focus:ring-offset-grey-400 rounded-sm"
        >
          Paloma Rodrigues
        </a>
      </p>
    </footer>
  )
}
