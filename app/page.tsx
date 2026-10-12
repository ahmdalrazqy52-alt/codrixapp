'use client'

import { useState } from 'react'
import { Bell, ChevronLeft, CheckCircle2, FolderKanban, Home, LifeBuoy, Menu, MessageCircle, Plus, Search, Settings, ShieldCheck, Sparkles, UserRound, WalletCards, X } from 'lucide-react'
import { InstallPrompt } from './install-prompt'

const services = [
  ['تطوير الأنظمة والبرمجيات', 'حلول مخصصة لأعمالك', FolderKanban],
  ['تطبيقات الجوال', 'iOS و Android', WalletCards],
  ['المواقع والمنصات', 'حضور رقمي متكامل', Search],
  ['الذكاء الاصطناعي', 'حلول أذكى للعمل', Sparkles],
  ['الأمن السيبراني', 'حماية بياناتك', ShieldCheck],
  ['الاستضافة السحابية', 'أداء واستقرار أعلى', Settings],
] as const

export default function Page() {
  const [screen, setScreen] = useState('home')
  const [menu, setMenu] = useState(false)
  const title = screen === 'home' ? 'الصفحة الرئيسية' : screen === 'services' ? 'قائمة الخدمات' : screen === 'projects' ? 'مشاريعي' : screen === 'support' ? 'مركز الدعم' : 'الملف الشخصي'
  return <main className="phone-app" dir="rtl"><InstallPrompt />
    <header className="app-header"><button onClick={() => setMenu(true)} aria-label="القائمة"><Menu /></button><div className="app-logo"><img className="logo-symbol" src="/codrix-symbol.png" alt="" /><span>كودركس يمن</span></div><button aria-label="الإشعارات"><Bell /><i /></button></header>
    {menu && <><button className="drawer-overlay" onClick={() => setMenu(false)} aria-label="إغلاق" /><aside className="drawer"><button className="drawer-close" onClick={() => setMenu(false)}><X /></button><img className="drawer-logo" src="/codrix-symbol.png" alt="شعار كودركس يمن" /><h2>كودركس يمن</h2><p>حلول تقنية ورقمية متكاملة</p>{[['home','الرئيسية',Home],['services','الخدمات',WalletCards],['projects','مشاريعي',FolderKanban],['support','الدعم والمساعدة',LifeBuoy],['profile','الملف الشخصي',UserRound]].map(([id,label,Icon]) => <button className={screen === id ? 'drawer-item active' : 'drawer-item'} onClick={() => {setScreen(id as string);setMenu(false)}} key={id as string}><Icon /><span>{label}</span><ChevronLeft /></button>)}</aside></>}
    <div className="screen-title"><div><span>مرحبًا محمد</span><h1>{title}</h1></div><div className="user-avatar">م</div></div>
    {screen === 'home' && <HomeScreen setScreen={setScreen} />}
    {screen === 'services' && <ServicesScreen setScreen={setScreen} />}
    {screen === 'projects' && <ProjectsScreen />}
    {screen === 'support' && <SupportScreen />}
    {screen === 'profile' && <ProfileScreen />}
    <nav className="bottom-nav"><button className={screen === 'home' ? 'active' : ''} onClick={() => setScreen('home')}><Home /><span>الرئيسية</span></button><button className={screen === 'services' ? 'active' : ''} onClick={() => setScreen('services')}><WalletCards /><span>الخدمات</span></button><button className="add-button" onClick={() => setScreen('services')}><Plus /></button><button className={screen === 'projects' ? 'active' : ''} onClick={() => setScreen('projects')}><FolderKanban /><span>مشاريعي</span></button><button className={screen === 'profile' ? 'active' : ''} onClick={() => setScreen('profile')}><UserRound /><span>حسابي</span></button></nav>
  </main>
}
function HomeScreen({setScreen}:{setScreen:(s:string)=>void}) { return <div className="content"><section className="welcome-card"><div><span className="eyebrow">حلولك التقنية في مكان واحد</span><h2>نحوّل أفكارك إلى<br /><b>نجاح رقمي</b></h2><button onClick={() => setScreen('services')}>اطلب خدمة الآن <ChevronLeft /></button></div><div className="hero-art"><Sparkles /></div></section><div className="section-head"><h2>خدماتنا</h2><button onClick={() => setScreen('services')}>عرض الكل <ChevronLeft /></button></div><div className="service-grid">{services.slice(0,4).map(([name,sub,Icon]) => <button className="service-tile" key={name} onClick={() => setScreen('services')}><span><Icon /></span><strong>{name}</strong><small>{sub}</small></button>)}</div><div className="section-head"><h2>مشاريعي الحالية</h2><button onClick={() => setScreen('projects')}>عرض الكل <ChevronLeft /></button></div><ProjectCard name="تطبيق متجر إلكتروني" progress="65%" status="جاري التنفيذ" /></div> }
function ServicesScreen({setScreen}:{setScreen:(s:string)=>void}) { return <div className="content"><div className="search-box"><Search /><input placeholder="ابحث عن خدمة..." /></div><div className="service-list">{services.map(([name,sub,Icon]) => <button className="service-row" key={name} onClick={() => setScreen('support')}><span><Icon /></span><div><strong>{name}</strong><small>{sub}</small></div><ChevronLeft /></button>)}</div><button className="full-primary" onClick={() => setScreen('support')}>طلب خدمة جديدة <Plus /></button></div> }
function ProjectsScreen() { return <div className="content"><ProjectCard name="تطبيق متجر إلكتروني" progress="65%" status="جاري التنفيذ" /><ProjectCard name="منصة إدارة العملاء" progress="30%" status="مرحلة التصميم" /><div className="timeline"><h2>آخر تحديث</h2><p><CheckCircle2 /> تم اعتماد واجهة المستخدم</p><p><CheckCircle2 /> تم رفع الملفات للمراجعة</p></div></div> }
function ProjectCard({name,progress,status}:{name:string,progress:string,status:string}) { return <article className="project-card"><div className="project-icon"><FolderKanban /></div><div className="project-info"><div><strong>{name}</strong><small>{status}</small></div><b>{progress}</b></div><div className="progress"><i style={{width:progress}} /></div><div className="project-foot"><span>تحديث منذ ساعتين</span><ChevronLeft /></div></article> }
function SupportScreen({}: {}) { return <div className="content"><section className="support-card"><LifeBuoy /><h2>نحن هنا لمساعدتك</h2><p>تحدث مع فريق الدعم أو أرسل طلبك وسنعود إليك بأسرع وقت.</p><button>إنشاء تذكرة جديدة <Plus /></button></section><div className="ticket"><span className="ticket-dot" /><div><strong>طلب تطوير جديد</strong><small>تم الحل · منذ يومين</small></div><ChevronLeft /></div><div className="ticket"><span className="ticket-dot orange" /><div><strong>استفسار عن الفاتورة</strong><small>قيد المتابعة · منذ ٣ أيام</small></div><ChevronLeft /></div></div> }
function ProfileScreen() { return <div className="content"><section className="profile-card"><div className="profile-avatar">م</div><h2>محمد العريقي</h2><p>ahmed@example.com</p></section>{['معلومات الحساب','الإشعارات','الأمان والخصوصية','تغيير كلمة المرور','اللغة'].map(x => <button className="setting-row" key={x}><Settings /><span>{x}</span><ChevronLeft /></button>)}<button className="logout">تسجيل الخروج</button></div> }
