'use client'

import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import { useStyles } from '@/components/styles'
import ProfileCard from '@/components/ProfileCard'
import ClockCard from '@/components/ClockCard'
import LinkCard from '@/components/LinkCard'
import { faBilibili, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'

export default function HomePage() {
  const styles = useStyles()

  return (
    <FluentProvider theme={webLightTheme}>
      <div className={styles.fullScreenBackground}>
        <div className={styles.container}>
          <div className={styles.topCardsContainer}>
            <ProfileCard
              name="Q78KG"
              title=""
              avatarUrl="https://img.r2.yumetsuki.moe/avatar.webp"
              bio="啥也没有"
            />
            <ClockCard />
          </div>
          <div className={styles.bottomCardsContainer}>
            <LinkCard
              title="GitHub"
              icon={faGithub}
              url="https://github.com/Hoshino-Yumetsuki"
            />
            <LinkCard
              title="Bilibili"
              icon={faBilibili}
              url="https://space.bilibili.com/487189150"
            />

            <LinkCard
              title="博客"
              icon={faBlog}
              url="https://blog.yumetsuki.moe/"
            />
          </div>
        </div>
      </div>
    </FluentProvider>
  )
}
