'use client'

import { useState, useEffect, useRef } from 'react'
import { useAuthStore } from '@/stores/auth-store'
import { useAppStore, type Lead, type LeadList, type Company, type Contact } from '@/stores/app-store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  MessageSquare, Users, Building2, List, CreditCard, LogOut, Menu, X, 
  Send, Search, Plus, Trash2, ExternalLink, Mail, Phone, Linkedin,
  Check, Sparkles, Target, Zap, Shield, ChevronRight, Star,
  Bot, User, Briefcase, MapPin, Globe, DollarSign, Clock, TrendingUp
} from 'lucide-react'

// Format number with commas (consistent across server/client)
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// Pricing plans
const PRICING_PLANS = [
  {
    name: 'Starter',
    price: 0,
    credits: 400,
    features: ['400 free credits', 'Basic company search', 'Email support', 'Limited exports'],
    popular: false
  },
  {
    name: 'Professional',
    price: 49,
    credits: 2500,
    features: ['2,500 credits/month', 'Advanced company search', 'Contact discovery', 'Priority support', 'CRM integrations', 'Unlimited exports'],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 199,
    credits: 15000,
    features: ['15,000 credits/month', 'Full platform access', 'API access', 'Dedicated support', 'Custom integrations', 'Team collaboration'],
    popular: false
  }
]

// Features for landing page
const FEATURES = [
  {
    icon: Target,
    title: 'AI-Powered Targeting',
    description: 'Describe your ideal customer in plain English and let AI find the best matches.'
  },
  {
    icon: Building2,
    title: 'Company Intelligence',
    description: 'Get detailed company profiles including tech stack, revenue, and employee count.'
  },
  {
    icon: Users,
    title: 'Decision Makers',
    description: 'Find key decision makers with verified contact information and social profiles.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Get results in seconds, not hours. Streamline your prospecting workflow.'
  }
]

// Mock companies for demo
const MOCK_COMPANIES: Company[] = [
  {
    name: 'TechFlow Inc',
    domain: 'techflow.io',
    industry: 'Software Development',
    size: '51-200',
    revenue: '$5M-$10M',
    location: 'San Francisco, CA',
    website: 'https://techflow.io',
    logo: null,
    description: 'Leading provider of workflow automation solutions for enterprise teams.',
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL']
  },
  {
    name: 'DataSync Solutions',
    domain: 'datasync.co',
    industry: 'Data Analytics',
    size: '201-500',
    revenue: '$10M-$50M',
    location: 'Austin, TX',
    website: 'https://datasync.co',
    logo: null,
    description: 'Enterprise data integration and analytics platform.',
    technologies: ['Python', 'Kafka', 'Snowflake', 'GCP']
  },
  {
    name: 'CloudSecure',
    domain: 'cloudsecure.com',
    industry: 'Cybersecurity',
    size: '11-50',
    revenue: '$1M-$5M',
    location: 'New York, NY',
    website: 'https://cloudsecure.com',
    logo: null,
    description: 'Cloud security compliance and monitoring platform.',
    technologies: ['Go', 'Kubernetes', 'AWS', 'Terraform']
  }
]

// Mock contacts for demo
const MOCK_CONTACTS: Contact[] = [
  {
    name: 'Sarah Johnson',
    title: 'VP of Engineering',
    email: 'sarah@techflow.io',
    phone: '+1 (555) 123-4567',
    linkedIn: 'https://linkedin.com/in/sarahjohnson',
    photo: null
  },
  {
    name: 'Michael Chen',
    title: 'CTO',
    email: 'mchen@datasync.co',
    phone: '+1 (555) 234-5678',
    linkedIn: 'https://linkedin.com/in/michaelchen',
    photo: null
  },
  {
    name: 'Emily Rodriguez',
    title: 'CEO & Founder',
    email: 'emily@cloudsecure.com',
    phone: '+1 (555) 345-6789',
    linkedIn: 'https://linkedin.com/in/emilyrodriguez',
    photo: null
  }
]

export default function Home() {
  const { user, isAuthenticated, login, signup, logout, checkAuth, isLoading, error, setError } = useAuthStore()
  const {
    currentView, setCurrentView,
    chatMessages, chatLoading, addChatMessage, setChatLoading, clearChat,
    leads, setLeads, addLead, updateLead, deleteLead, leadsLoading, setLeadsLoading,
    lists, setLists, addList, deleteList, listsLoading, setListsLoading,
    searchResults, setSearchResults, searchContacts, setSearchContacts, searchLoading, setSearchLoading,
    selectedLead, setSelectedLead, selectedList, setSelectedList,
    showLoginModal, showSignupModal, showNewListModal,
    setShowLoginModal, setShowSignupModal, setShowNewListModal,
    sidebarCollapsed, setSidebarCollapsed
  } = useAppStore()

  const [chatInput, setChatInput] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [newListName, setNewListName] = useState('')
  const [newListDescription, setNewListDescription] = useState('')
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '', company: '' })
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })

  const chatEndRef = useRef<HTMLDivElement>(null)

  // Check auth on mount
  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  // Fetch data when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads()
      fetchLists()
    }
  }, [isAuthenticated])

  // Scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages])

  const fetchLeads = async () => {
    setLeadsLoading(true)
    try {
      const response = await fetch('/api/leads')
      const data = await response.json()
      if (response.ok) {
        setLeads(data.leads)
      }
    } catch (error) {
      console.error('Failed to fetch leads:', error)
    } finally {
      setLeadsLoading(false)
    }
  }

  const fetchLists = async () => {
    setListsLoading(true)
    try {
      const response = await fetch('/api/lists')
      const data = await response.json()
      if (response.ok) {
        setLists(data.lists)
      }
    } catch (error) {
      console.error('Failed to fetch lists:', error)
    } finally {
      setListsLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const success = await login(loginForm.email, loginForm.password)
    if (success) {
      setShowLoginModal(false)
      setLoginForm({ email: '', password: '' })
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    const success = await signup(signupForm.email, signupForm.password, signupForm.name, signupForm.company)
    if (success) {
      setShowSignupModal(false)
      setSignupForm({ name: '', email: '', password: '', company: '' })
    }
  }

  const handleLogout = async () => {
    await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'logout' })
    })
    logout()
    clearChat()
  }

  const handleSendMessage = async () => {
    if (!chatInput.trim() || chatLoading) return

    const userMessage = chatInput.trim()
    addChatMessage({ role: 'user', content: userMessage })
    setChatInput('')
    setChatLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: chatMessages.map(m => ({ role: m.role, content: m.content }))
        })
      })

      const data = await response.json()

      if (response.ok) {
        addChatMessage({ role: 'assistant', content: data.message })
        if (user && data.credits !== undefined) {
          useAuthStore.getState().updateCredits(data.credits)
        }
      } else {
        addChatMessage({ role: 'assistant', content: `Error: ${data.error}` })
      }
    } catch (error) {
      addChatMessage({ role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' })
    } finally {
      setChatLoading(false)
    }
  }

  const handleSearch = async (type: 'companies' | 'contacts') => {
    if (!searchQuery.trim()) return

    setSearchLoading(true)
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, query: searchQuery })
      })

      const data = await response.json()

      if (response.ok) {
        if (type === 'companies') {
          setSearchResults(data.companies.length > 0 ? data.companies : MOCK_COMPANIES)
        } else {
          setSearchContacts(data.contacts.length > 0 ? data.contacts : MOCK_CONTACTS)
        }
        if (user && data.credits !== undefined) {
          useAuthStore.getState().updateCredits(data.credits)
        }
      }
    } catch (error) {
      console.error('Search error:', error)
      // Use mock data on error
      if (type === 'companies') {
        setSearchResults(MOCK_COMPANIES)
      } else {
        setSearchContacts(MOCK_CONTACTS)
      }
    } finally {
      setSearchLoading(false)
    }
  }

  const handleCreateList = async () => {
    if (!newListName.trim()) return

    try {
      const response = await fetch('/api/lists', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newListName, description: newListDescription })
      })

      const data = await response.json()
      if (response.ok) {
        addList({ ...data.list, leads: [] })
        setNewListName('')
        setNewListDescription('')
        setShowNewListModal(false)
      }
    } catch (error) {
      console.error('Failed to create list:', error)
    }
  }

  const handleDeleteList = async (id: string) => {
    try {
      await fetch(`/api/lists?id=${id}`, { method: 'DELETE' })
      deleteList(id)
    } catch (error) {
      console.error('Failed to delete list:', error)
    }
  }

  const handleSaveLead = async (company: Company, contact?: Contact) => {
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: company.name,
          companyDomain: company.domain,
          companyIndustry: company.industry,
          companySize: company.size,
          companyRevenue: company.revenue,
          companyLocation: company.location,
          companyWebsite: company.website,
          companyTech: JSON.stringify(company.technologies),
          contactName: contact?.name,
          contactTitle: contact?.title,
          contactEmail: contact?.email,
          contactPhone: contact?.phone,
          contactLinkedIn: contact?.linkedIn,
          status: 'new'
        })
      })

      const data = await response.json()
      if (response.ok) {
        addLead(data.lead)
      }
    } catch (error) {
      console.error('Failed to save lead:', error)
    }
  }

  const handleDeleteLead = async (id: string) => {
    try {
      await fetch(`/api/leads?id=${id}`, { method: 'DELETE' })
      deleteLead(id)
    } catch (error) {
      console.error('Failed to delete lead:', error)
    }
  }

  const handleUpdateLeadStatus = async (id: string, status: string) => {
    try {
      await fetch('/api/leads', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status })
      })
      updateLead(id, { status })
    } catch (error) {
      console.error('Failed to update lead:', error)
    }
  }

  // LANDING VIEW (Not authenticated)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#F1F1EC' }}>
        {/* Header */}
        <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: '#102B51' }}>
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#668DF7' }}>
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Vibe Prospecting</span>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => setShowLoginModal(true)}
                className="text-white hover:bg-white/10"
              >
                Log In
              </Button>
              <Button
                onClick={() => setShowSignupModal(true)}
                style={{ backgroundColor: '#668DF7' }}
                className="text-white hover:opacity-90"
              >
                Get Started Free
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" style={{ backgroundColor: '#668DF7', color: 'white' }}>
              <Sparkles className="w-3 h-3 mr-1" /> AI-Powered Prospecting
            </Badge>
            <h1 className="text-5xl font-bold mb-6" style={{ color: '#102B51' }}>
              Find Your Perfect Prospects<br />
              <span style={{ color: '#668DF7' }}>With AI Conversation</span>
            </h1>
            <p className="text-xl mb-8" style={{ color: '#1A2B49' }}>
              Simply describe your ideal customer and let AI find the best companies and contacts for your business. No complex filters, just natural conversation.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setShowSignupModal(true)}
                style={{ backgroundColor: '#102B51' }}
                className="text-white hover:opacity-90"
              >
                Start Free Trial <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowLoginModal(true)}
                className="border-[#102B51] text-[#102B51]"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#102B51' }}>
              Everything You Need for B2B Prospecting
            </h2>
            <p className="text-lg" style={{ color: '#1A2B49' }}>
              Powerful features to help you find, qualify, and connect with your ideal customers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#668DF7' }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#102B51' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: '#1A2B49' }}>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#102B51' }}>
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg" style={{ color: '#1A2B49' }}>
              Start free and scale as you grow. No hidden fees.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? 'border-2 scale-105' : ''}`}
                style={{ borderColor: plan.popular ? '#668DF7' : undefined }}
              >
                {plan.popular && (
                  <div
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-sm text-white"
                    style={{ backgroundColor: '#668DF7' }}
                  >
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle style={{ color: '#102B51' }}>{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold" style={{ color: '#102B51' }}>
                      ${plan.price}
                    </span>
                    {plan.price > 0 && <span className="text-muted-foreground">/month</span>}
                  </div>
                  <p className="text-sm mt-2" style={{ color: '#1A2B49' }}>
                    {formatNumber(plan.credits)} credits included
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2" style={{ color: '#1A2B49' }}>
                        <Check className="w-4 h-4" style={{ color: '#10B981' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.popular ? 'default' : 'outline'}
                    style={{ backgroundColor: plan.popular ? '#102B51' : undefined }}
                    onClick={() => setShowSignupModal(true)}
                  >
                    {plan.price === 0 ? 'Get Started Free' : 'Start Trial'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-8" style={{ backgroundColor: '#102B51' }}>
          <div className="container mx-auto px-4 text-center text-white">
            <p>© 2024 Vibe Prospecting. All rights reserved.</p>
          </div>
        </footer>

        {/* Login Modal */}
        <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Welcome Back</DialogTitle>
              <DialogDescription>Log in to your account to continue prospecting.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="you@example.com"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="login-password">Password</Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button
                type="submit"
                className="w-full"
                style={{ backgroundColor: '#102B51' }}
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Log In'}
              </Button>
              <p className="text-center text-sm">
                Don't have an account?{' '}
                <Button
                  variant="link"
                  className="p-0"
                  style={{ color: '#668DF7' }}
                  onClick={() => {
                    setShowLoginModal(false)
                    setShowSignupModal(true)
                  }}
                >
                  Sign up
                </Button>
              </p>
            </form>
          </DialogContent>
        </Dialog>

        {/* Signup Modal */}
        <Dialog open={showSignupModal} onOpenChange={setShowSignupModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Account</DialogTitle>
              <DialogDescription>Get started with 400 free credits.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <Label htmlFor="signup-name">Full Name</Label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="John Doe"
                  value={signupForm.name}
                  onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="you@example.com"
                  value={signupForm.email}
                  onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="signup-company">Company (Optional)</Label>
                <Input
                  id="signup-company"
                  type="text"
                  placeholder="Your Company"
                  value={signupForm.company}
                  onChange={(e) => setSignupForm({ ...signupForm, company: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="signup-password">Password</Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="••••••••"
                  value={signupForm.password}
                  onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button
                type="submit"
                className="w-full"
                style={{ backgroundColor: '#102B51' }}
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>
              <p className="text-center text-sm">
                Already have an account?{' '}
                <Button
                  variant="link"
                  className="p-0"
                  style={{ color: '#668DF7' }}
                  onClick={() => {
                    setShowSignupModal(false)
                    setShowLoginModal(true)
                  }}
                >
                  Log in
                </Button>
              </p>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  // DASHBOARD VIEW (Authenticated)
  return (
    <div className="flex h-screen" style={{ backgroundColor: '#F1F1EC' }}>
      {/* Sidebar */}
      <aside
        className={`flex flex-col border-r transition-all duration-300 ${
          sidebarCollapsed ? 'w-16' : 'w-64'
        }`}
        style={{ backgroundColor: '#102B51' }}
      >
        {/* Logo */}
        <div className="p-4 flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#668DF7' }}>
            <Target className="w-6 h-6 text-white" />
          </div>
          {!sidebarCollapsed && (
            <span className="text-lg font-bold text-white">Vibe</span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 space-y-1">
          {[
            { id: 'chat', icon: MessageSquare, label: 'AI Chat' },
            { id: 'leads', icon: Users, label: 'My Leads' },
            { id: 'companies', icon: Building2, label: 'Companies' },
            { id: 'lists', icon: List, label: 'Lead Lists' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id as typeof currentView)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                currentView === item.id
                  ? 'bg-white/20 text-white'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {!sidebarCollapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="p-2 space-y-1 border-t border-white/10">
          <button
            onClick={() => setCurrentView('pricing')}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-white/70 hover:bg-white/10 hover:text-white`}
          >
            <CreditCard className="w-5 h-5 shrink-0" />
            {!sidebarCollapsed && <span>Pricing</span>}
          </button>
        </div>

        {/* User section */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src={user?.avatar || ''} />
              <AvatarFallback style={{ backgroundColor: '#668DF7', color: 'white' }}>
                {user?.name?.[0] || user?.email[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            {!sidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{user?.name || 'User'}</p>
                <p className="text-xs text-white/60">{user?.credits} credits</p>
              </div>
            )}
          </div>
        </div>

        {/* Collapse button */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="p-2 text-white/70 hover:text-white hover:bg-white/10"
        >
          {sidebarCollapsed ? <Menu className="w-5 h-5 mx-auto" /> : <X className="w-5 h-5 mx-auto" />}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b px-6 py-4 flex items-center justify-between bg-white">
          <h1 className="text-xl font-semibold" style={{ color: '#102B51' }}>
            {currentView === 'chat' && 'AI Prospecting Assistant'}
            {currentView === 'leads' && 'My Leads'}
            {currentView === 'companies' && 'Company Search'}
            {currentView === 'lists' && 'Lead Lists'}
            {currentView === 'pricing' && 'Pricing Plans'}
          </h1>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="gap-1">
              <Sparkles className="w-3 h-3" />
              {user?.credits} credits
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6">
          {/* Chat View */}
          {currentView === 'chat' && (
            <div className="h-full flex flex-col max-w-4xl mx-auto">
              {/* Messages */}
              <ScrollArea className="flex-1 pr-4">
                {chatMessages.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: '#668DF7' }}
                    >
                      <Bot className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2" style={{ color: '#102B51' }}>
                      How can I help you find prospects?
                    </h2>
                    <p className="mb-6" style={{ color: '#1A2B49' }}>
                      Describe your ideal customer and I'll help you find the best matches.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {[
                        'SaaS companies with 50-200 employees',
                        'Tech startups in San Francisco',
                        'Enterprise companies using Salesforce'
                      ].map((suggestion, i) => (
                        <Button
                          key={i}
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setChatInput(suggestion)
                          }}
                          className="border-[#102B51]/20"
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {chatMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}
                      >
                        {msg.role === 'assistant' && (
                          <Avatar className="w-8 h-8 shrink-0">
                            <AvatarFallback style={{ backgroundColor: '#668DF7', color: 'white' }}>
                              <Bot className="w-4 h-4" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={`max-w-[80%] rounded-lg px-4 py-2 ${
                            msg.role === 'user'
                              ? 'text-white'
                              : 'bg-white border'
                          }`}
                          style={{ backgroundColor: msg.role === 'user' ? '#102B51' : undefined }}
                        >
                          <p className="whitespace-pre-wrap">{msg.content}</p>
                        </div>
                        {msg.role === 'user' && (
                          <Avatar className="w-8 h-8 shrink-0">
                            <AvatarFallback style={{ backgroundColor: '#668DF7', color: 'white' }}>
                              <User className="w-4 h-4" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    ))}
                    {chatLoading && (
                      <div className="flex gap-3">
                        <Avatar className="w-8 h-8 shrink-0">
                          <AvatarFallback style={{ backgroundColor: '#668DF7', color: 'white' }}>
                            <Bot className="w-4 h-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="bg-white border rounded-lg px-4 py-2">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>
                )}
              </ScrollArea>

              {/* Input */}
              <div className="mt-4 flex gap-2">
                <Input
                  placeholder="Describe your ideal prospect..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!chatInput.trim() || chatLoading}
                  style={{ backgroundColor: '#102B51' }}
                  className="text-white"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Leads View */}
          {currentView === 'leads' && (
            <div className="max-w-6xl mx-auto">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground">{leads.length} leads saved</p>
                </div>
              </div>

              {leads.length === 0 ? (
                <Card className="border-dashed">
                  <CardContent className="py-12 text-center">
                    <Users className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">No leads yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Start by searching for companies or chatting with AI to find prospects.
                    </p>
                    <Button
                      onClick={() => setCurrentView('companies')}
                      style={{ backgroundColor: '#668DF7' }}
                      className="text-white"
                    >
                      Search Companies
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4">
                  {leads.map((lead) => (
                    <Card key={lead.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4">
                            <div
                              className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-semibold"
                              style={{ backgroundColor: '#668DF7' }}
                            >
                              {lead.companyName?.[0] || '?'}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold" style={{ color: '#102B51' }}>
                                  {lead.companyName}
                                </h3>
                                <Badge
                                  variant="outline"
                                  className={
                                    lead.status === 'new' ? 'border-blue-500 text-blue-500' :
                                    lead.status === 'contacted' ? 'border-yellow-500 text-yellow-500' :
                                    lead.status === 'qualified' ? 'border-green-500 text-green-500' :
                                    'border-gray-500 text-gray-500'
                                  }
                                >
                                  {lead.status}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                {lead.companyIndustry && (
                                  <span className="flex items-center gap-1">
                                    <Briefcase className="w-3 h-3" />
                                    {lead.companyIndustry}
                                  </span>
                                )}
                                {lead.companyLocation && (
                                  <span className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    {lead.companyLocation}
                                  </span>
                                )}
                                {lead.companySize && (
                                  <span className="flex items-center gap-1">
                                    <Users className="w-3 h-3" />
                                    {lead.companySize} employees
                                  </span>
                                )}
                              </div>
                              {lead.contactName && (
                                <div className="mt-2 pt-2 border-t">
                                  <p className="text-sm">
                                    <span className="font-medium">{lead.contactName}</span>
                                    {lead.contactTitle && <span className="text-muted-foreground"> • {lead.contactTitle}</span>}
                                  </p>
                                  {lead.contactEmail && (
                                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                                      <Mail className="w-3 h-3" />
                                      {lead.contactEmail}
                                    </p>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <select
                              value={lead.status}
                              onChange={(e) => handleUpdateLeadStatus(lead.id, e.target.value)}
                              className="text-sm border rounded px-2 py-1"
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="qualified">Qualified</option>
                              <option value="disqualified">Disqualified</option>
                            </select>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteLead(lead.id)}
                              className="text-red-500 hover:text-red-600"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Companies/Search View */}
          {currentView === 'companies' && (
            <div className="max-w-6xl mx-auto">
              <div className="mb-6">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search for companies..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch('companies')}
                      className="pl-10"
                    />
                  </div>
                  <Button
                    onClick={() => handleSearch('companies')}
                    disabled={searchLoading}
                    style={{ backgroundColor: '#668DF7' }}
                    className="text-white"
                  >
                    {searchLoading ? 'Searching...' : 'Search'}
                  </Button>
                </div>
              </div>

              {searchResults.length === 0 ? (
                <Card className="border-dashed">
                  <CardContent className="py-12 text-center">
                    <Building2 className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">Search for Companies</h3>
                    <p className="text-muted-foreground">
                      Enter a search term to find companies that match your ideal customer profile.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 gap-4">
                  {searchResults.map((company, i) => (
                    <Card key={i} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-semibold"
                              style={{ backgroundColor: '#668DF7' }}
                            >
                              {company.name[0]}
                            </div>
                            <div>
                              <CardTitle className="text-lg" style={{ color: '#102B51' }}>
                                {company.name}
                              </CardTitle>
                              <p className="text-sm text-muted-foreground">{company.domain}</p>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            onClick={() => handleSaveLead(company)}
                            style={{ backgroundColor: '#10B981' }}
                            className="text-white"
                          >
                            <Plus className="w-4 h-4 mr-1" /> Save
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">{company.description}</p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-muted-foreground" />
                            <span>{company.industry}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span>{company.size} employees</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <span>{company.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-muted-foreground" />
                            <span>{company.revenue}</span>
                          </div>
                        </div>
                        {company.technologies.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-1">
                            {company.technologies.map((tech, j) => (
                              <Badge key={j} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                        {company.website && (
                          <a
                            href={company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-1 text-sm hover:underline"
                            style={{ color: '#668DF7' }}
                          >
                            Visit website <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Contacts Section */}
              {searchContacts.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4" style={{ color: '#102B51' }}>
                    Key Contacts
                  </h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {searchContacts.map((contact, i) => (
                      <Card key={i}>
                        <CardContent className="pt-4">
                          <div className="flex items-center gap-3 mb-3">
                            <Avatar className="w-10 h-10">
                              <AvatarFallback style={{ backgroundColor: '#102B51', color: 'white' }}>
                                {contact.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium" style={{ color: '#102B51' }}>{contact.name}</p>
                              <p className="text-sm text-muted-foreground">{contact.title}</p>
                            </div>
                          </div>
                          <div className="space-y-2 text-sm">
                            {contact.email && (
                              <p className="flex items-center gap-2 text-muted-foreground">
                                <Mail className="w-4 h-4" />
                                {contact.email}
                              </p>
                            )}
                            {contact.phone && (
                              <p className="flex items-center gap-2 text-muted-foreground">
                                <Phone className="w-4 h-4" />
                                {contact.phone}
                              </p>
                            )}
                            {contact.linkedIn && (
                              <a
                                href={contact.linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:underline"
                                style={{ color: '#668DF7' }}
                              >
                                <Linkedin className="w-4 h-4" />
                                LinkedIn Profile
                              </a>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Lists View */}
          {currentView === 'lists' && (
            <div className="max-w-4xl mx-auto">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-muted-foreground">{lists.length} lists</p>
                <Button
                  onClick={() => setShowNewListModal(true)}
                  style={{ backgroundColor: '#102B51' }}
                  className="text-white"
                >
                  <Plus className="w-4 h-4 mr-2" /> New List
                </Button>
              </div>

              {lists.length === 0 ? (
                <Card className="border-dashed">
                  <CardContent className="py-12 text-center">
                    <List className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">No lists yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Create lists to organize your prospects by campaign, industry, or any criteria.
                    </p>
                    <Button
                      onClick={() => setShowNewListModal(true)}
                      style={{ backgroundColor: '#668DF7' }}
                      className="text-white"
                    >
                      Create First List
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4">
                  {lists.map((list) => (
                    <Card
                      key={list.id}
                      className="hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => setSelectedList(list)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div
                              className="w-12 h-12 rounded-lg flex items-center justify-center"
                              style={{ backgroundColor: '#E5E5E0' }}
                            >
                              <List className="w-6 h-6" style={{ color: '#102B51' }} />
                            </div>
                            <div>
                              <h3 className="font-semibold" style={{ color: '#102B51' }}>{list.name}</h3>
                              <p className="text-sm text-muted-foreground">
                                {list.description || 'No description'}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {list.leads?.length || 0} leads
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleDeleteList(list.id)
                            }}
                            className="text-red-500 hover:text-red-600"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Pricing View */}
          {currentView === 'pricing' && (
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#102B51' }}>
                  Upgrade Your Plan
                </h2>
                <p className="text-muted-foreground">
                  Get more credits to power your prospecting
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {PRICING_PLANS.map((plan, index) => (
                  <Card
                    key={index}
                    className={`relative ${plan.popular ? 'border-2 scale-105' : ''}`}
                    style={{ borderColor: plan.popular ? '#668DF7' : undefined }}
                  >
                    {plan.popular && (
                      <div
                        className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-sm text-white"
                        style={{ backgroundColor: '#668DF7' }}
                      >
                        Most Popular
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle style={{ color: '#102B51' }}>{plan.name}</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold" style={{ color: '#102B51' }}>
                          ${plan.price}
                        </span>
                        {plan.price > 0 && <span className="text-muted-foreground">/month</span>}
                      </div>
                      <p className="text-sm mt-2" style={{ color: '#1A2B49' }}>
                        {formatNumber(plan.credits)} credits included
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2" style={{ color: '#1A2B49' }}>
                            <Check className="w-4 h-4" style={{ color: '#10B981' }} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full"
                        variant={plan.popular ? 'default' : 'outline'}
                        style={{ backgroundColor: plan.popular ? '#102B51' : undefined }}
                        disabled={user?.plan === plan.name.toLowerCase()}
                      >
                        {user?.plan === plan.name.toLowerCase() ? 'Current Plan' : 'Upgrade'}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* New List Modal */}
      <Dialog open={showNewListModal} onOpenChange={setShowNewListModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New List</DialogTitle>
            <DialogDescription>Organize your leads into lists for better management.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="list-name">List Name</Label>
              <Input
                id="list-name"
                placeholder="e.g., Q1 Outreach Campaign"
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="list-description">Description (Optional)</Label>
              <Input
                id="list-description"
                placeholder="Brief description of this list"
                value={newListDescription}
                onChange={(e) => setNewListDescription(e.target.value)}
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setShowNewListModal(false)}>
                Cancel
              </Button>
              <Button
                onClick={handleCreateList}
                disabled={!newListName.trim()}
                style={{ backgroundColor: '#102B51' }}
                className="text-white"
              >
                Create List
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* List Detail Modal */}
      <Dialog open={!!selectedList} onOpenChange={() => setSelectedList(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedList?.name}</DialogTitle>
            <DialogDescription>{selectedList?.description}</DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-96">
            {selectedList?.leads?.length === 0 ? (
              <div className="py-8 text-center text-muted-foreground">
                No leads in this list yet
              </div>
            ) : (
              <div className="space-y-2">
                {selectedList?.leads?.map((lead) => (
                  <div key={lead.id} className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <p className="font-medium">{lead.companyName}</p>
                      <p className="text-sm text-muted-foreground">{lead.contactName}</p>
                    </div>
                    <Badge variant="outline">{lead.status}</Badge>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  )
}
