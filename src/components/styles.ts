import { makeStyles, tokens } from '@fluentui/react-components'

export const useStyles = makeStyles({
  fullScreenBackground: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: "url('/images/85603687_p0.webp')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: tokens.colorNeutralBackground1,
    padding: '20px',
    overflow: 'auto'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '900px',
    width: '90%',
    padding: '25px'
  },
  topCardsContainer: {
    display: 'flex',
    gap: '20px',
    width: '100%',
    flexWrap: 'wrap'
  },
  bottomCardsContainer: {
    display: 'flex',
    gap: '20px',
    width: '100%',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  largeCard: {
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    border: `1px solid ${tokens.colorNeutralStrokeAlpha}`,
    boxShadow: tokens.shadow16,
    borderRadius: tokens.borderRadiusLarge,
    flex: '1',
    minWidth: '300px',
    height: '220px',
    padding: tokens.spacingVerticalM,
    transition: 'all 0.2s ease-in-out',
    position: 'relative',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: tokens.shadow64
    }
  },
  smallCard: {
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    border: `1px solid ${tokens.colorNeutralStrokeAlpha}`,
    boxShadow: tokens.shadow16,
    borderRadius: tokens.borderRadiusLarge,
    width: 'calc((100% - 40px) / 3)',
    height: '120px',
    padding: tokens.spacingVerticalM,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease-in-out',
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: tokens.shadow64
    }
  }
})
