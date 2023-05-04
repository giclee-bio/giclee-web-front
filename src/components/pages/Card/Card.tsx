import CardContent from '@/components/organisms/CardContent'
import EditableCardItemsList from '@/components/organisms/EditableCardItemsList'
import SearchPlatformItemsModule from '@/components/organisms/SearchPlatformItemsModule'

const Card = () => {
  return (
    <div>
      <div>
        <SearchPlatformItemsModule />
        <EditableCardItemsList />
      </div>
      <CardContent />
    </div>
  )
}

export default Card
