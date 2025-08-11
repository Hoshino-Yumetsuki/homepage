'use client'

import { Card, mergeClasses, makeStyles } from '@fluentui/react-components'
import { useStyles as useSharedStyles } from './styles'
import { useDateTime, useHitokoto } from './hooks'

const useClockStyles = makeStyles({
  clockCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  },
  clockDisplay: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  timeText: {
    fontSize: '2.2rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '4px'
  },
  dateText: {
    fontSize: '1rem',
    color: '#666',
    fontWeight: '400'
  },
  hitokotoContainer: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  hitokoto: {
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#444',
    fontStyle: 'italic',
    marginBottom: '12px'
  },
  hitokotoSource: {
    textAlign: 'right',
    fontStyle: 'italic',
    fontSize: '0.85rem',
    color: '#888'
  },
  loadingText: {
    textAlign: 'center',
    color: '#999',
    fontSize: '0.9rem'
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
        <div className={styles.timeText}>{time}</div>
        <div className={styles.dateText}>{date}</div>
      </div>
      <div className={styles.hitokotoContainer}>
        {hitokoto ? (
          <>
            <div className={styles.hitokoto}>『{hitokoto.hitokoto}』</div>
            <div className={styles.hitokotoSource}>
              —— {hitokoto.from}
              {hitokoto.from_who ? ` · ${hitokoto.from_who}` : ''}
            </div>
          </>
        ) : (
          <div className={styles.loadingText}>加载中...</div>
        )}
      </div>
    </Card>
  )
}
