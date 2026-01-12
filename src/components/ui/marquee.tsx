type MarqueeProps = {
  items: string[]
  className?: string
  speed?: 'slow' | 'normal' | 'fast'
}

export default function Marquee({
  items,
  className,
  speed = 'normal',
}: MarqueeProps) {
  const speedClass = {
    slow: '[--marquee-duration:15s]',
    normal: '[--marquee-duration:8s]',
    fast: '[--marquee-duration:5s]',
  }[speed]

  return (
    <div
      className={`relative flex w-full overflow-x-hidden font-display ${speedClass} ${className ?? ''}`}
    >
      <div className="animate-marquee whitespace-nowrap py-3">
        {items.map((item, index) => {
          const isDot = item === '•'
          const sizeClass = isDot
            ? 'text-2xl sm:text-3xl'
            : 'text-base sm:text-lg md:text-xl'

          return (
            <span
              key={`${item}-${index}`}
              className={`mx-4 ${sizeClass} font-bold uppercase tracking-wide`}
            >
              {item}
            </span>
          )
        })}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-3">
        {items.map((item, index) => {
          const isDot = item === '•'
          const sizeClass = isDot
            ? 'text-2xl sm:text-3xl'
            : 'text-base sm:text-lg md:text-xl'

          return (
            <span
              key={`${item}-${index}-2`}
              className={`mx-4 ${sizeClass} font-bold uppercase tracking-wide`}
            >
              {item}
            </span>
          )
        })}
      </div>
    </div>
  )
}
