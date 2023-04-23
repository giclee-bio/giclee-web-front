import classNames from 'classnames'

type Props = {
  children: React.ReactNode
  wide?: boolean
}

const Contents: React.FC<Props> = ({ children, wide }) => {
  const classes = classNames(wide ? 'max-w-7xl' : 'max-w-4xl')

  return <div className={`mx-auto px-4 pt-8 ${classes}`}>{children}</div>
}

export default Contents
