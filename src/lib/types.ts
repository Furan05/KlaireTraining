export interface Service {
  id: string
  title: string
  description: string
  price: string
  duration: string
  features: string[]
  image: string
  popular?: boolean
}

export interface Testimonial {
  id: string
  name: string
  text: string
  rating: number
  image?: string
  location?: string
  program?: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  author: string
  tags: string[]
  readTime: string
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  message: string
  service?: string
}

export interface NavItem {
  name: string
  href: string
  icon?: string
}
