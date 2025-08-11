import { useState, useEffect } from 'react'
import type { HitokotoResponse } from './types'

export const useDateTime = () => {
  const [time, setTime] = useState<string>('')
  const [date, setDate] = useState<string>('')

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      const dateString = now.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
      })
      setTime(timeString)
      setDate(dateString)
    }

    updateClock()
    const clockInterval = setInterval(updateClock, 1000)

    return () => clearInterval(clockInterval)
  }, [])

  return { time, date }
}

export const useHitokoto = () => {
  const [hitokoto, setHitokoto] = useState<HitokotoResponse | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchHitokoto = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://international.v1.hitokoto.cn/')
        const data: HitokotoResponse = await response.json()
        setHitokoto(data)
        setLoading(false)
      } catch (error) {
        console.error('获取一言失败:', error)
        setError(error as Error)
        setLoading(false)
      }
    }

    fetchHitokoto()
  }, [])

  return { hitokoto, loading, error }
}
