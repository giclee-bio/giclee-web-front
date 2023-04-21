import classNames from 'classnames'

export type Props = {
  children: React.ReactNode
  href?: string
  isLink?: boolean
  onClick?: () => void
  type?: 'light' | 'discord' | 'default'
  width?: 'half' | 'default'
} & ({ href: string; isLink: true } | { isLink?: false; onClick: () => void })

const Button: React.FC<Props> = ({ children, href, isLink, onClick, type, width }) => {
  let classes = classNames('h-10', 'rounded', 'text-center', 'font-bold', 'leading-10')

  classes = width === 'half' ? classNames(classes, 'w-32') : classNames(classes, 'w-64')
  switch (type) {
    case 'light':
      classes = classNames(classes, 'bg-white', 'text-base')
      break
    case 'discord':
      classes = classNames(classes, 'bg-discord', 'text-white')
      break
    default:
      classes = classNames(classes, 'bg-stone-800', 'text-white')
  }

  return isLink ? (
    <a className={`inline-block ${classes}`} href={href}>
      {children}
    </a>
  ) : (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
