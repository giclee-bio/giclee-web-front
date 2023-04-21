type Props = {
  children: React.ReactNode
}

const Contents: React.FC<Props> = ({ children }) => {
  return <div className='mx-auto max-w-4xl pt-8'>{children}</div>
}

export default Contents
