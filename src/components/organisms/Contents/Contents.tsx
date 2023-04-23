import classNames from 'classnames'

type Props = {
  center?: boolean
  children: React.ReactNode
  wide?: boolean
}

const Contents: React.FC<Props> = ({ center, children, wide }) => {
  const classes = classNames(
    center ? 'flex min-h-screen items-center justify-center' : 'pt-8',
    wide ? 'max-w-7xl' : 'max-w-4xl'
  )

  return <div className={`mx-auto px-4 ${classes}`}>{children}</div>
}

export default Contents
