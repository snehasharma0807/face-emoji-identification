'use client'

import { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { SupabaseClient } from '@supabase/supabase-js'
import { createClientClient } from '@/lib/supabase'

interface SupabaseContextType {
  supabase: SupabaseClient | null
  isLoading: boolean
  error: string | null
}

const SupabaseContext = createContext<SupabaseContextType | undefined>(undefined)

export function SupabaseProvider({ children }: { children: ReactNode }) {
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      const client = createClientClient()
      setSupabase(client)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to initialize Supabase')
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <SupabaseContext.Provider value={{ supabase, isLoading, error }}>
      {children}
    </SupabaseContext.Provider>
  )
}

export function useSupabase() {
  const context = useContext(SupabaseContext)
  if (context === undefined) {
    throw new Error('useSupabase must be used within a SupabaseProvider')
  }
  return context
}
