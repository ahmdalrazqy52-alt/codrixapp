import { NextResponse } from 'next/server'
import { createClient, createServiceClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || user.app_metadata?.role !== 'owner') return NextResponse.json({ error: 'هذه العملية متاحة للمالك فقط.' }, { status: 403 })
  const { email, password, name } = await request.json()
  if (!email || !password || String(password).length < 8) return NextResponse.json({ error: 'أدخل بريدًا وكلمة مرور من 8 أحرف على الأقل.' }, { status: 400 })
  const service = createServiceClient()
  const { data, error } = await service.auth.admin.createUser({ email: String(email).trim().toLowerCase(), password: String(password), email_confirm: true, user_metadata: { name: String(name ?? '').trim() }, app_metadata: { role: 'admin' } })
  if (error) return NextResponse.json({ error: 'تعذر إنشاء المدير. قد يكون البريد مستخدمًا.' }, { status: 400 })
  return NextResponse.json({ id: data.user.id, email: data.user.email })
}
