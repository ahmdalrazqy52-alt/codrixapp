'use client'

import { FormEvent, useState } from 'react'
import { LockKeyhole, Mail, ShieldCheck } from 'lucide-react'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  async function submit(event: FormEvent) {
    event.preventDefault(); setLoading(true); setError('')
    const response = await fetch('/api/admin/login', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ email, password }) })
    if (!response.ok) { const body = await response.json(); setError(body.error ?? 'تعذر تسجيل الدخول.'); setLoading(false); return }
    window.location.href = '/admin'
  }
  return <main className="admin-auth" dir="rtl"><div className="admin-auth-card"><img src="/codrix-symbol.png" alt="كودركس يمن" /><span className="admin-kicker"><ShieldCheck /> منطقة محمية</span><h1>تسجيل دخول الإدارة</h1><p>هذه الصفحة مخصصة لفريق إدارة كودركس يمن فقط.</p><form onSubmit={submit}><label>البريد الإلكتروني<div className="auth-input"><Mail /><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required autoComplete="username" /></div></label><label>كلمة المرور<div className="auth-input"><LockKeyhole /><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required autoComplete="current-password" /></div></label>{error && <div className="auth-error" role="alert">{error}</div>}<button className="admin-primary" disabled={loading}>{loading ? 'جارٍ التحقق...' : 'دخول لوحة التحكم'}</button></form></div></main>
}
