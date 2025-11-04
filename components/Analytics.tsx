'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { pageview } from '@/lib/analytics'

function AnalyticsContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      pageview(pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''))
    }
  }, [pathname, searchParams])

  return null
}

export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsContent />
    </Suspense>
  )
}

