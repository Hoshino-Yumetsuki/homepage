'use client'

import {
  Card,
  Text,
  Title2,
  Body1,
  Caption1,
  mergeClasses,
  makeStyles
} from '@fluentui/react-components'
import { useStyles as useSharedStyles } from './styles'
import { useDateTime, useHitokoto } from './hooks'

const useClockStyles = makeStyles({
  clockCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  clockDisplay: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  hitokotoContainer: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  hitokoto: {
    textAlign: 'center',
    marginBottom: '10px'
  },
  hitokotoSource: {
    textAlign: 'right',
    fontStyle: 'italic'
  }
})

export default function ClockCard() {
  const sharedStyles = useSharedStyles()
  const styles = useClockStyles()
  const { time, date } = useDateTime()
  const { hitokoto } = useHitokoto()

  return (
    <Card className={mergeClasses(sharedStyles.largeCard, styles.clockCard)}>
      <div className={styles.clockDisplay}>
        <Title2>{time}</Title2>
        <Text>{date}</Text>
      </div>
      <div className={styles.hitokotoContainer}>
        {hitokoto ? (
          <>
            <Body1 className={styles.hitokoto}>『{hitokoto.hitokoto}』</Body1>
            <Caption1 className={styles.hitokotoSource}>
              —— {hitokoto.from}
              {hitokoto.from_who ? ` · ${hitokoto.from_who}` : ''}
            </Caption1>
          </>
        ) : (
          <Body1 className={styles.hitokoto}>加载中...</Body1>
        )}
      </div>
    </Card>
  )
}
