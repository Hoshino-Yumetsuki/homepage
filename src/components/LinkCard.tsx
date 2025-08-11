'use client'

import { Text } from '@fluentui/react-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { useStyles as useSharedStyles } from './styles'

export interface LinkCardProps {
  title: string
  icon: IconDefinition
  url: string
}

export default function LinkCard({ title, icon, url }: LinkCardProps) {
  const sharedStyles = useSharedStyles()

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={sharedStyles.smallCard}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between',
          padding: '0 20px'
        }}
      >
        <FontAwesomeIcon
          icon={icon}
          style={{ fontSize: '2.5rem', flex: '0 0 auto' }}
        />
        <Text style={{ fontSize: '1.1rem', fontWeight: '500' }}>{title}</Text>
      </div>
    </a>
  )
}
