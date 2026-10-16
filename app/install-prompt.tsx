'use client'

import { useEffect, useState } from 'react'
import { Download, X } from 'lucide-react'

interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export function InstallPrompt() {
  const [installEvent, setInstallEvent] = useState<InstallPromptEvent | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleInstallAvailable = (event: Event) => {
      event.preventDefault()
      setInstallEvent(event as InstallPromptEvent)
      setVisible(true)
    }

    window.addEventListener('beforeinstallprompt', handleInstallAvailable)
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => undefined)

    return () => window.removeEventListener('beforeinstallprompt', handleInstallAvailable)
  }, [])

  if (!visible || !installEvent) return null

  const install = async () => {
    await installEvent.prompt()
    await installEvent.userChoice
    setVisible(false)
    setInstallEvent(null)
  }

  return (
    <aside className="install-prompt" aria-label="تثبيت تطبيق كودركس يمن">
      <div className="install-prompt-icon"><img src="/codrix-symbol.png" alt=""/><Download /></div>
      <div className="install-prompt-copy"><strong>حمّل تطبيق كودركس يمن</strong><span>سيتم تحميل التطبيق كاملًا ثم تثبيته على جهازك</span></div>
      <button className="install-action" onClick={install}>تحميل التطبيق</button>
      <button className="install-dismiss" onClick={() => setVisible(false)} aria-label="إغلاق"><X /></button>
    </aside>
  )
}
