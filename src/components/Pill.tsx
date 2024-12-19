function Pill({ text }: { text: string }) {
  return (
    <p className="px-4 py-1 leading-none text-sm font-medium tracking-wide text-center border border-gray-300 rounded-md text-gray-900">
      {text}
    </p>
  )
}

export default Pill;