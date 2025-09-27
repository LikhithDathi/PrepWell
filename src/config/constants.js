// SEO and metadata
export const SITE_METADATA = {
  title: "PrepWell - Practice Smart, Score Higher | IELTS Preparation Platform",
  description: "Achieve your dream IELTS score with PrepWell's AI-powered platform. 10,000+ students succeeded with our proven methods. Start your free trial today!",
  keywords: "IELTS, IELTS preparation, English test, band score, PrepWell, AI-powered learning, IELTS practice tests",
  author: "PrepWell Institute",
  ogImage: "/prepwell-og-image.jpg",
  twitterHandle: "@prepwell"
};

// Navigation configuration
export const NAVIGATION = {
  brand: {
    name: "PrepWell",
    logo: "🎯",
    parts: {
      prep: "Prep",
      well: "Well"
    }
  },
  links: [
    { 
      id: 1, 
      label: "Home", 
      href: "#home", 
      ariaLabel: "Navigate to home section",
      icon: "🏠"
    },
    { 
      id: 2, 
      label: "Features", 
      href: "#features", 
      ariaLabel: "Navigate to features section",
      icon: "✨"
    },
    { 
      id: 3, 
      label: "Success Stories", 
      href: "#testimonials", 
      ariaLabel: "Navigate to success stories testimonials",
      icon: "⭐"
    },
    { 
      id: 4, 
      label: "Pricing", 
      href: "#pricing", 
      ariaLabel: "Navigate to pricing plans",
      icon: "💰"
    }
  ],
  cta: {
    label: "Free Assessment",
    ariaLabel: "Take free IELTS assessment",
    icon: "🚀"
  }
};

// Features data with enhanced information
export const FEATURES = [
  {
    id: 1,
    icon: "🧠",
    title: "Practice Smart",
    description: "AI identifies weak areas and creates personalized practice sessions",
    highlight: "AI-Powered",
    gradient: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
    stats: "98% accuracy",
    ariaLabel: "AI-powered smart practice feature"
  },
  {
    id: 2,
    icon: "📈",
    title: "Score Higher", 
    description: "Proven strategies for 1.5+ band improvement",
    highlight: "Proven Results",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
    stats: "+1.5 bands avg.",
    ariaLabel: "Score improvement feature"
  },
  {
    id: 3,
    icon: "🎯",
    title: "Build Confidence",
    description: "Where confidence meets fluency through realistic tests",
    highlight: "Realistic Practice",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    stats: "10,000+ tests",
    ariaLabel: "Confidence building feature"
  },
  {
    id: 4,
    icon: "🚀",
    title: "Master IELTS",
    description: "Comprehensive preparation with expert feedback",
    highlight: "Expert Guidance",
    gradient: "linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)",
    stats: "24/7 support",
    ariaLabel: "Complete IELTS mastery feature"
  }
];

// Testimonials data
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Chen",
    score: "Band 8.5",
    text: "PrepWell transformed my IELTS preparation. The AI feedback pinpointed exactly where I needed improvement, and the personalized practice sessions made all the difference!",
    improvement: "+2.5 bands",
    avatar: "👩‍🎓",
    rating: 5,
    course: "Academic IELTS",
    duration: "3 months",
    verified: true
  },
  {
    id: 2,
    name: "Raj Patel",
    score: "Band 8.0", 
    text: "The personalized practice sessions helped me focus on my weak areas. Incredible results! I went from Band 6.5 to 8.0 in just 2 months.",
    improvement: "+1.5 bands",
    avatar: "👨‍💼",
    rating: 5,
    course: "General Training",
    duration: "2 months",
    verified: true
  },
  {
    id: 3,
    name: "Emily Davis",
    score: "Band 7.5", 
    text: "Where confidence meets fluency indeed! The mock tests built my confidence tremendously. The speaking practice with AI feedback was game-changing.",
    improvement: "+2.0 bands",
    avatar: "👩‍🏫",
    rating: 5,
    course: "Academic IELTS",
    duration: "4 months",
    verified: true
  }
];

// Pricing plans data
export const PRICING_PLANS = [
  {
    id: 1,
    name: "Starter",
    price: "Free",
    period: "7-day trial",
    features: ["5 practice tests", "Basic AI feedback", "Progress tracking", "Email support"],
    popular: false,
    gradient: "linear-gradient(135deg, #6b7280 0%, #9ca3af 100%)",
    buttonVariant: "outline-secondary",
    ariaLabel: "Starter plan - Free trial"
  },
  {
    id: 2,
    name: "Pro",
    price: "$29",
    period: "per month",
    features: ["Unlimited practice tests", "Advanced AI feedback", "Expert reviews", "Priority support", "Band analysis"],
    popular: true,
    gradient: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
    buttonVariant: "success",
    ariaLabel: "Pro plan - Most popular"
  },
  {
    id: 3,
    name: "Premium",
    price: "$79",
    period: "3 months (Save 30%)",
    features: ["All Pro features", "1-on-1 coaching", "Band score guarantee", "Certificate", "Career guidance"],
    popular: false,
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    buttonVariant: "outline-primary",
    ariaLabel: "Premium plan - Best value"
  }
];

// Stats data
export const STATS = [
  {
    id: 1,
    value: "15+",
    label: "Expert Trainers",
    icon: "👨‍🏫",
    description: "Certified IELTS experts",
    ariaLabel: "15 plus expert trainers"
  },
  {
    id: 2,
    value: "50K+", 
    label: "Practice Questions",
    icon: "📝",
    description: "Comprehensive question bank",
    ariaLabel: "50 thousand plus practice questions"
  },
  {
    id: 3,
    value: "2.5M+",
    label: "AI Evaluations",
    icon: "🤖",
    description: "Accurate feedback provided",
    ariaLabel: "2.5 million plus AI evaluations"
  },
  {
    id: 4,
    value: "30+",
    label: "Countries Served",
    icon: "🌍",
    description: "Global student community",
    ariaLabel: "30 plus countries served"
  }
];

// Footer data
export const FOOTER_DATA = {
  company: {
    description: "Practice Smart, Score Higher. Your path to IELTS success since 2020. Join thousands of students who achieved their dream scores with our AI-powered platform.",
    contact: {
      email: "hello@prepwell.com",
      phone: "+1 (555) 123-4567",
      address: "123 Education Street",
      hours: "Mon-Fri: 9AM-6PM"
    }
  },
  socialLinks: [
    { name: "Facebook", icon: "📱", url: "#" },
    { name: "Instagram", icon: "📘", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "YouTube", icon: "📸", url: "#" }
  ]
};

// App constants
export const APP_CONSTANTS = {
  SUCCESS_RATE: "98%",
  AVERAGE_IMPROVEMENT: "+1.8 bands",
  STUDENT_COUNT: "10,000+",
  RATING: "4.9/5"
};

// Export everything together
export default {
  SITE_METADATA,
  NAVIGATION,
  FEATURES,
  TESTIMONIALS,
  PRICING_PLANS,
  STATS,
  FOOTER_DATA,
  APP_CONSTANTS
};