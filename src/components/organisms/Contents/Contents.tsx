import classNames from 'classnames'

type Props = {
  center?: boolean
  children: React.ReactNode
  width?: 'wide' | 'narrow'
}

const Contents: React.FC<Props> = ({ center, children, width }) => {
  let classes = classNames(
    center ? 'flex min-h-screen items-center justify-center flex-col' : 'pt-8'
  )

  switch (width) {
    case 'wide':
      classes = classNames(classes, 'max-w-7xl')
      break
    case 'narrow':
      classes = classNames(classes, 'max-w-xl')
      break
    default:
      classes = classNames(classes, 'max-w-4xl')
  }

  return <div className={`mx-auto px-4 ${classes}`}>{children}</div>
}

export default Contents
