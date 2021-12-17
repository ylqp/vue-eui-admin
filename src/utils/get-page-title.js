import defaultSettings from '@/settings'

const title = defaultSettings.title || 'vae'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}