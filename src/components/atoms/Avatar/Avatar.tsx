import classNames from 'classnames'
import Image from 'next/image'

type Props = {
  alt: string
  size: 'small' | 'medium' | 'large'
  src: string
}

const Avatar: React.FC<Props> = ({ alt, size, src }) => {
  let classes = classNames('rounded-full')
  let imageSize

  switch (size) {
    case 'small':
      classes = classNames(classes, '')
      imageSize = 40
      break
    case 'medium':
      classes = classNames(classes, '')
      imageSize = 80
      break
    case 'large':
      classes = classNames(classes, '')
      imageSize = 120
      break
    default:
      classes = classNames(classes, '')
  }

  return <Image alt={alt} className={classes} height={imageSize} src={src} width={imageSize} />
}

export default Avatar
