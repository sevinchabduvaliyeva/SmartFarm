
import { useEffect, useState } from 'react'
import { supabase } from './supabase'
import LandingPage from './LandingPage'
import AuthPage from './components/AuthPage'
import Dashboard from './components/Dashboard'
import heroImage from './assets/hero.png'

export default function App() {
  const [session, setSession] = useState(null)
  const [showAuth, setShowAuth] = useState(false)
  const [checkingSession, setCheckingSession] = useState(true)

  useEffect(() => {
    let mounted = true

    supabase.auth.getSession().then(({ data, error }) => {
      if (!mounted) return

      if (error) {
        console.error('Sessiyani tekshirishda xato:', error.message)
      }

      setSession(data?.session ?? null)
      setCheckingSession(false)
    })

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      if (mounted) {
        setSession(currentSession)
      }
    })

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [])

  if (checkingSession) {
    return (
      <div className="app-loading">
        SmartFarm Planner yuklanmoqda...
      </div>
    )
  }

  
if (session) {
  return <Dashboard user={session.user} />
}


  if (showAuth) {
    return (
      <AuthPage
        onLogin={() => {
          // Sessiyani Supabase auth listener yangilaydi.
        }}
      />
    )
  }

  return (
    <LandingPage onEnter={() => setShowAuth(true)} />
  )
}
