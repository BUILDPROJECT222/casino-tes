import React from 'react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { Icon } from '../components/Icon'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.banner}>
      <Section>
        <h2>
          What is this?
        </h2>
        <p style={{ wordWrap: 'break-word' }}>
          An decentralized casino built on Solana. by the BonkB team.
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            as="a"
            color="white"
            href="https://t.me/bonkespl"
            target="_blank"
            icon={<Icon.ExternalLink />}
          >
            Join Telegram
          </Button>
        </div>
      </Section>
    </div>
  )
}
