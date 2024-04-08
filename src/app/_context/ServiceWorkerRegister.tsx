'use client'

import { useEffect } from 'react'

const ServiceWorkerRegistration = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js', {
        updateViaCache: 'none',
      })
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered: ', registration)
          })
          .catch((error) => {
            console.log('Service Worker registration failed: ', error)
          })
      })
    }
  }, [])

  return null
}

export default ServiceWorkerRegistration
