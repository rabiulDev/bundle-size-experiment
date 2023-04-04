import styles from './PublishCard.module.scss'
import { Button, Card, notification, Row, Typography } from 'antd'
import Image from 'next/image'
import Pizza from '/public/images/food/pizza.jpg'
import { useRouter } from 'next/router'

const { Text } = Typography

const PublishCard = () => {
      const router = useRouter()

      const clickHandler = () => {
            void router.push('/dashboard/foods/add-food')
      }

      return (
            <Card bodyStyle={{padding: 0,}} className={styles.publish}>
                  <Row className={styles.publish__image}>
                        <Image src={Pizza} alt={''} />
                  </Row>
                 <Row className={'pt-3 px-4 pb-8'}>
                     <Row justify={'center'}>
                         <Text className={'text-base text-center'}>Global travel medical insurance for $1.34/day! Covid-19 coverage.</Text>
                     </Row>
                     <Row justify={'center'} className={'w-full pt-5'}>
                         <Button onClick={clickHandler} type={'primary'}>Publish your food today</Button>
                     </Row>
                 </Row>
            </Card>
      )
}
export default PublishCard
