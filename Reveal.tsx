import { ReactNode } from 'react'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'

interface RevealProps {
  children: ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

/** Fade-up-on-scroll wrapper. Wrap any block that should animate into view. */
export default function Reveal({ children, className = '', as = 'div' }: RevealProps) {
  const { ref, visible } = useRevealOnScroll<HTMLElement>()
  const Tag = as as any

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'in' : ''} ${className}`}>
      {children}
    </Tag>
  )
}
