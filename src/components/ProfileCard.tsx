'use client'

import { useState, useRef } from 'react'
import {
  Card,
  Title2,
  Title3,
  Body1,
  Caption1,
  Avatar,
  makeStyles,
  tokens
} from '@fluentui/react-components'
import { motion } from 'framer-motion'

const useProfileStyles = makeStyles({
  profileCard: {
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    border: `1px solid ${tokens.colorNeutralStrokeAlpha}`,
    boxShadow: tokens.shadow16,
    borderRadius: tokens.borderRadiusLarge,
    flex: '1',
    minWidth: '300px',
    height: '220px',
    padding: tokens.spacingVerticalM,
    position: 'relative',
    transition: 'none',
    '&:hover': {
      transform: 'none',
      boxShadow: tokens.shadow16
    }
  },
  cardContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    perspective: '2000px',
    transformStyle: 'preserve-3d'
  },
  cardContent: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    transformStyle: 'preserve-3d',
    transformOrigin: 'center center'
  },
  frontContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    height: '100%',
    width: '100%'
  },
  backContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    height: '100%',
    width: '100%'
  },
  largeAvatar: {
    width: '100px',
    height: '100px',
    marginRight: '20px',
    flexShrink: 0
  }
})

export interface ProfileCardProps {
  name: string
  title: string
  avatarUrl: string
  bio: string
}

export default function ProfileCard({
  name,
  title,
  avatarUrl,
  bio
}: ProfileCardProps) {
  const styles = useProfileStyles()

  const [isFlipped, setIsFlipped] = useState(false)
  const flipTimerRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    flipTimerRef.current = setTimeout(() => {
      setIsFlipped(true)
    }, 0)
  }

  const handleMouseLeave = () => {
    if (flipTimerRef.current) {
      clearTimeout(flipTimerRef.current)
      flipTimerRef.current = null
    }
    setIsFlipped(false)
  }

  return (
    <Card
      className={styles.profileCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.cardContainer}>
        <motion.div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d'
          }}
          animate={{
            rotateY: isFlipped ? 180 : 0
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut'
          }}
        >
          <div
            className={styles.cardContent}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            <div className={styles.frontContent}>
              <Avatar
                className={styles.largeAvatar}
                name={name}
                image={{ src: avatarUrl }}
                size={96}
              />
              <div>
                <Title2>{name}</Title2>
                <Caption1>{title}</Caption1>
              </div>
            </div>
          </div>

          <div
            className={styles.cardContent}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <div className={styles.backContent}>
              <Title3>关于我</Title3>
              <Body1 style={{ textAlign: 'center', marginTop: '10px' }}>
                {bio}
              </Body1>
            </div>
          </div>
        </motion.div>
      </div>
    </Card>
  )
}
