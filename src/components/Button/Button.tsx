import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode; variant?: 'primary' | 'quiet' }
export default function Button({ children, variant = 'primary', className = '', ...props }: Props) {
  return <a className={`button button--${variant} ${className}`} {...props}>{children}</a>
}
