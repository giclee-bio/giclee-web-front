import Button from '@/components/atoms/Button'
import AccountAvatar from '@/components/molecules/AccountAvatar'
import AccountInfoForm from '@/components/organisms/AccountInfoForm'

const Account = () => {
  return (
    <article className='rounded px-8 py-12'>
      <h1 className='text-2xl font-bold'>アカウント設定</h1>
      <section className='mt-12'>
        <h2 className='text-xl font-bold'>アカウント情報</h2>
        <div className='mt-8 flex gap-24 px-4'>
          <AccountAvatar />
          <AccountInfoForm />
        </div>
      </section>
      <section className='mt-12'>
        <h2 className='mb-8 text-xl font-bold'>アカウント削除</h2>
        <Button type='danger' width='half'>
          削除する
        </Button>
      </section>
    </article>
  )
}

export default Account
