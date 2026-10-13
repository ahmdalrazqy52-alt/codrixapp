import { NextResponse } from 'next/server'
import { createClient, createServiceClient } from '@/lib/supabase/server'

const OWNER_EMAIL = 'ahmdalrazqy52@gmail.com'
const OWNER_PASSWORD = 'zepye1234'

export async function POST(request: Request) {
  const { email, password } = await request.json()
  const normalizedEmail = String(email ?? '').trim().toLowerCase()
  if (!normalizedEmail || !password) return NextResponse.json({ error: 'البريد وكلمة المرور مطلوبان.' }, { status: 400 })

  const service = createServiceClient()
  const { data: existing } = await service.auth.admin.listUsers({ page: 1, perPage: 1000 })
  const owner = existing.users.find((user) => user.email?.toLowerCase() === OWNER_EMAIL)
  if (!owner && normalizedEmail === OWNER_EMAIL && password === OWNER_PASSWORD) {
    const { error } = await service.auth.admin.createUser({ email: OWNER_EMAIL, password: OWNER_PASSWORD, email_confirm: true, app_metadata: { role: 'owner' } })
    if (error && !error.message.toLowerCase().includes('already')) return NextResponse.json({ error: 'تعذر تجهيز حساب المدير.' }, { status: 500 })
  }

  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithPassword({ email: normalizedEmail, password })
  if (error || !data.user || !['owner', 'admin'].includes(data.user.app_metadata?.role)) {
    await supabase.auth.signOut()
    return NextResponse.json({ error: 'بيانات الدخول غير صحيحة أو لا تملك صلاحية الإدارة.' }, { status: 401 })
  }
  return NextResponse.json({ ok: true })
}
