export function Spinner(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 21a9 9 0 116.18-15.55.75.75 0 010 1.06.74.74 0 01-1.06 0A7.51 7.51 0 1019.5 12a.75.75 0 111.5 0 9 9 0 01-9 9z"
        fill="#FFFF"
      />
    </svg>
  )
}
