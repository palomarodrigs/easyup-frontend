import { Divider } from './divider'

export function Footer() {
  return (
    <footer className="w-full px-[50px]">
      <Divider />

      <p className="text-grey-100 text-xs lg:text-sm text-center py-5">
        developed with 💚 by{' '}
        <a
          href="https://github.com/palomarodrigs"
          target="_blank"
          className="underline hover:decoration-mint-100 duration-200"
        >
          Paloma Rodrigues
        </a>
      </p>
    </footer>
  )
}
