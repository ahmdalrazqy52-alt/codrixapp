'use client'

import { useState } from 'react'
import { InstallPrompt } from './install-prompt'
import {
  Activity,
  ArrowUpLeft,
  Bell,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ChevronLeft,
  CircleHelp,
  Clock3,
  Code2,
  FileText,
  FolderKanban,
  Headphones,
  LayoutDashboard,
  LifeBuoy,
  Menu,
  MessageCircle,
  MoreHorizontal,
  Plus,
  Search,
  Settings2,
  Sparkles,
  TrendingUp,
  Users,
  WalletCards,
  X,
  Zap,
} from 'lucide-react'

const navItems = [
  { label: 'الرئيسية', icon: LayoutDashboard },
  { label: 'الخدمات', icon: BriefcaseBusiness },
  { label: 'مشاريعي', icon: FolderKanban, count: '2' },
  { label: 'الذكاء الاصطناعي', icon: Bot, special: true },
  { label: 'المحادثات والدعم', icon: MessageCircle, count: '3' },
]

const services = [
  { title: 'تطوير التطبيقات', description: 'تطبيقات جوال عالية الأداء لنمو أعمالك', icon: Code2, tone: 'blue' },
  { title: 'الأنظمة والمنصات', description: 'حلول رقمية مصممة حسب احتياجك', icon: Settings2, tone: 'purple' },
  { title: 'الذكاء الاصطناعي', description: 'أتمتة ذكية تساعدك على التقدم', icon: Sparkles, tone: 'cyan' },
  { title: 'المواقع والمتاجر', description: 'حضور رقمي يليق بعلامتك التجارية', icon: WalletCards, tone: 'orange' },
]

const projects = [
  { name: 'منصة مبيعات كليك', type: 'تطوير نظام مخصص', progress: 72, status: 'قيد التنفيذ', date: 'التسليم المتوقع: ٢٨ أكتوبر', color: 'blue' },
  { name: 'تطبيق وصلة', type: 'تطبيق جوال', progress: 38, status: 'التحليل والتصميم', date: 'آخر تحديث: أمس', color: 'purple' },
]

export default function Page() {
  const [activeNav, setActiveNav] = useState('الرئيسية')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [showAdmin, setShowAdmin] = useState(false)

  return (
    <main dir="rtl" className="app-shell">
      <InstallPrompt />
      <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
        <div className="brand-row">
          <div className="brand-mark"><span>∞</span></div>
          <div><div className="brand-name">كودركس <b>يمن</b></div><div className="brand-sub">CODRIX YEMEN</div></div>
          <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="إغلاق القائمة"><X /></button>
        </div>
        <div className="workspace-switch"><div className="workspace-avatar">أ</div><div className="workspace-copy"><strong>حساب العميل</strong><span>مساحة العمل الشخصية</span></div><ChevronDown /></div>
        <div className="nav-group-label">القائمة الرئيسية</div>
        <nav className="main-nav" aria-label="التنقل الرئيسي">
          {navItems.map((item) => <button key={item.label} onClick={() => { setActiveNav(item.label); setMobileOpen(false) }} className={`nav-item ${activeNav === item.label ? 'active' : ''} ${item.special ? 'ai-nav' : ''}`}><item.icon /> <span>{item.label}</span>{item.count && <em>{item.count}</em>}</button>)}
        </nav>
        <div className="nav-group-label secondary-label">مساحة العمل</div>
        <nav className="main-nav">
          <button className="nav-item"><FileText /><span>الملفات والمستندات</span></button>
          <button className="nav-item"><CircleHelp /><span>مركز المعرفة</span></button>
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card"><div className="help-icon"><Headphones /></div><strong>هل تحتاج إلى مساعدة؟</strong><span>فريقنا جاهز لخدمتك</span><button>تواصل معنا <ArrowUpLeft /></button></div>
          <button className="nav-item profile-link"><div className="avatar">م</div><span><strong>محمد العريقي</strong><small>عميل مميز</small></span><MoreHorizontal /></button>
        </div>
      </aside>

      {mobileOpen && <button className="mobile-overlay" onClick={() => setMobileOpen(false)} aria-label="إغلاق القائمة" />}
      <section className="main-content">
        <header className="topbar"><button className="mobile-menu" onClick={() => setMobileOpen(true)} aria-label="فتح القائمة"><Menu /></button><div className="crumb"><span>مساحة العميل</span><ChevronLeft /><strong>{activeNav}</strong></div><div className="top-actions"><button className="icon-button search-button"><Search /></button><button className="icon-button notification-button"><Bell /><i /></button><div className="top-avatar">م</div></div></header>
        <div className="page-content">
          <div className="welcome-row"><div><div className="eyebrow"><span className="online-dot" /> الثلاثاء، ١٢ أكتوبر ٢٠٢٦</div><h1>مرحبًا بك، محمد</h1><p>إليك نظرة سريعة على أعمالك وتحديثاتك الأخيرة.</p></div><button className="primary-button"><Plus /> اطلب خدمة جديدة</button></div>
          <div className="stats-grid"><div className="stat-card"><div className="stat-icon blue-icon"><FolderKanban /></div><div><span>المشاريع النشطة</span><strong>٢ <small>مشاريع</small></strong></div><div className="stat-trend"><TrendingUp /> +١ مشروع</div></div><div className="stat-card"><div className="stat-icon orange-icon"><Clock3 /></div><div><span>طلبات قيد المراجعة</span><strong>٣ <small>طلبات</small></strong></div><div className="stat-trend neutral"><Activity /> تحتاج متابعة</div></div><div className="stat-card"><div className="stat-icon green-icon"><Check /></div><div><span>المشاريع المكتملة</span><strong>١٤ <small>مشروع</small></strong></div><div className="stat-trend"><TrendingUp /> +٣ هذا الشهر</div></div><div className="stat-card ai-stat"><div className="stat-icon cyan-icon"><Sparkles /></div><div><span>رصيد المساعد الذكي</span><strong>٨٤ <small>استفسار</small></strong></div><button className="text-action" onClick={() => setActiveNav('الذكاء الاصطناعي')}>استخدم المساعد <ArrowUpLeft /></button></div></div>
          <div className="section-heading"><div><h2>مشاريعك الحالية</h2><p>تابع تقدم مشاريعك وتواصل مع فريق العمل</p></div><button className="link-button" onClick={() => setActiveNav('مشاريعي')}>عرض كل المشاريع <ChevronLeft /></button></div>
          <div className="dashboard-grid"><div className="projects-card">{projects.map((project) => <div className="project-row" key={project.name}><div className={`project-logo ${project.color}`}><Code2 /></div><div className="project-main"><div className="project-title"><div><strong>{project.name}</strong><span>{project.type}</span></div><button aria-label="خيارات المشروع"><MoreHorizontal /></button></div><div className="progress-line"><div className={`progress-fill ${project.color}`} style={{ width: `${project.progress}%` }} /></div><div className="progress-meta"><span>{project.progress}% مكتمل</span><span>{project.date}</span></div></div><span className={`status-pill ${project.color}`}>{project.status}</span></div>)}</div><div className="activity-card"><div className="card-title"><h3>آخر التحديثات</h3><button aria-label="المزيد"><MoreHorizontal /></button></div><div className="activity-list"><div className="activity-item"><div className="activity-dot purple-dot"><Check /></div><div><strong>تم اعتماد التصميم الأولي</strong><span>منصة مبيعات كليك · منذ ساعتين</span></div></div><div className="activity-item"><div className="activity-dot blue-dot"><MessageCircle /></div><div><strong>رسالة جديدة من فريقك</strong><span>أحمد المطري · أمس</span></div></div><div className="activity-item"><div className="activity-dot orange-dot"><FileText /></div><div><strong>تم رفع ملف جديد للمراجعة</strong><span>تطبيق وصلة · أمس</span></div></div></div><button className="view-all">عرض سجل النشاط <ChevronLeft /></button></div></div>
          <div className="section-heading service-heading"><div><h2>خدمات كودركس</h2><p>حلول رقمية تساعدك على تحويل أفكارك إلى واقع</p></div><button className="link-button" onClick={() => setActiveNav('الخدمات')}>استكشف الخدمات <ChevronLeft /></button></div>
          <div className="services-grid">{services.map((service) => <button className="service-card" key={service.title} onClick={() => setActiveNav('الخدمات')}><div className={`service-icon ${service.tone}`}><service.icon /></div><div><strong>{service.title}</strong><span>{service.description}</span></div><ArrowUpLeft className="service-arrow" /></button>)}</div>
          <div className="ai-banner"><div className="ai-orb"><Sparkles /></div><div className="ai-copy"><span className="ai-label">مركز الذكاء الاصطناعي</span><h2>فكرتك تبدأ من هنا</h2><p>دع مساعد كودركس الذكي يساعدك على تحليل فكرتك وبناء تصور واضح لمشروعك القادم.</p></div><button className="ai-button" onClick={() => setActiveNav('الذكاء الاصطناعي')}>ابدأ محادثة ذكية <ArrowUpLeft /></button><div className="ai-lines" /></div>
          <div className="admin-preview"><div><div className="eyebrow"><Users /> للإدارة والموظفين</div><h2>لوحة التحكم الإدارية</h2><p>إدارة العملاء والمشاريع والخدمات من مكان واحد.</p></div><button className="secondary-button" onClick={() => setShowAdmin(!showAdmin)}>{showAdmin ? 'العودة لمساحة العميل' : 'معاينة لوحة الإدارة'} <ArrowUpLeft /></button></div>
          {showAdmin && <AdminPreview />}
        </div>
      </section>
    </main>
  )
}

function AdminPreview() {
  return <div className="admin-panel"><div className="admin-panel-head"><div><span className="eyebrow">نظرة عامة · أكتوبر ٢٠٢٦</span><h2>لوحة الإدارة</h2></div><span className="live-badge"><span /> مباشر الآن</span></div><div className="admin-stats"><div><span>إجمالي العملاء</span><strong>١٨٤</strong><em>+١٢٪ هذا الشهر</em></div><div><span>طلبات جديدة</span><strong>٢٧</strong><em>+٨٪ هذا الأسبوع</em></div><div><span>مشاريع قيد التنفيذ</span><strong>٣٦</strong><em>+٤ مشاريع</em></div><div><span>رضا العملاء</span><strong>٩٦٪</strong><em>+٢.٤٪ تحسن</em></div></div><div className="admin-chart"><div className="card-title"><h3>نمو المشاريع والطلبات</h3><span>آخر ٦ أشهر <ChevronDown /></span></div><div className="chart-bars"><div style={{ height: '42%' }} /><div style={{ height: '55%' }} /><div style={{ height: '48%' }} /><div style={{ height: '72%' }} /><div style={{ height: '64%' }} /><div style={{ height: '88%' }} /></div><div className="chart-labels"><span>مايو</span><span>يونيو</span><span>يوليو</span><span>أغسطس</span><span>سبتمبر</span><span>أكتوبر</span></div></div></div>
}
