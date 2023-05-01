import Avatar from '@/components/atoms/Avatar'

const AccountAvatar = () => {
  return (
    <>
      <div>
        <button>
          <Avatar alt='aa' size='medium' src='/nacal.png' />
          <p className='mt-2 text-sm'>変更する</p>
        </button>
      </div>
    </>
  )
}

export default AccountAvatar
