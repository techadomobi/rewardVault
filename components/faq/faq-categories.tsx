"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { UserPlus, Coins, Gift, CreditCard, Shield, Settings } from "lucide-react"

const faqCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: UserPlus,
    questions: [
      {
        question: "How do I create an account?",
        answer: "Creating an account is simple and free. Click the \"Get Started\" button, enter your email address, create a password, and verify your email. You&apos;ll receive a 500 point welcome bonus upon completing your profile."
      },
      {
        question: "Is RewardVault really free to use?",
        answer: "Yes! RewardVault is completely free to use. You earn points by completing offers and can redeem them for rewards without any fees or hidden costs."
      },
      {
        question: "What countries is RewardVault available in?",
        answer: "RewardVault is currently available in the United States, Canada, United Kingdom, Australia, Germany, and many other countries. The available offers may vary by region."
      },
      {
        question: "Do I need to download an app?",
        answer: "No, you can access RewardVault directly from your web browser on any device. However, we recommend using our mobile app for the best experience and instant push notifications for new offers."
      }
    ]
  },
  {
    id: "earning-points",
    title: "Earning Points",
    icon: Coins,
    questions: [
      {
        question: "How do I earn points?",
        answer: "You can earn points by completing offers such as downloading apps, taking surveys, watching videos, signing up for services, making purchases through our partners, and referring friends."
      },
      {
        question: "How long does it take to receive my points?",
        answer: "Most offers credit points instantly or within a few minutes. Some offers, especially app-based ones with level requirements, may take up to 24-48 hours to verify and credit."
      },
      {
        question: "Why didn&apos;t I receive points for an offer I completed?",
        answer: "If points weren&apos;t credited, ensure you followed all offer requirements, didn&apos;t use a VPN, and completed the offer within the specified timeframe. Contact support with proof of completion for assistance."
      },
      {
        question: "Is there a limit to how many points I can earn?",
        answer: "There&apos;s no lifetime limit on earnings. However, some specific offers may have daily or weekly limits. Premium members have access to exclusive high-value offers with higher limits."
      }
    ]
  },
  {
    id: "rewards",
    title: "Rewards & Redemption",
    icon: Gift,
    questions: [
      {
        question: "What rewards can I redeem my points for?",
        answer: "We offer 100+ reward options including PayPal cash, gift cards from major brands (Amazon, Steam, Netflix, etc.), cryptocurrency (Bitcoin, Ethereum), prepaid Visa cards, and charitable donations."
      },
      {
        question: "What is the minimum points needed to cash out?",
        answer: "The minimum redemption starts at just 5,000 points (equivalent to $5). Different rewards may have different minimum thresholds."
      },
      {
        question: "How long does it take to receive my reward?",
        answer: "Most digital rewards like gift cards and PayPal are delivered instantly. Cryptocurrency transfers may take up to 24 hours. Physical prepaid cards are mailed within 5-7 business days."
      },
      {
        question: "Can I cancel a reward redemption?",
        answer: "Once a reward redemption is processed, it cannot be cancelled. Please double-check your redemption details before confirming."
      }
    ]
  },
  {
    id: "payments",
    title: "Payments & Withdrawals",
    icon: CreditCard,
    questions: [
      {
        question: "How do PayPal withdrawals work?",
        answer: "Select PayPal as your reward option, enter the amount you wish to withdraw, and confirm. The payment is sent directly to your verified PayPal email address, typically within minutes."
      },
      {
        question: "Are there any fees for withdrawing?",
        answer: "RewardVault does not charge any withdrawal fees. However, your payment provider (like PayPal) may have their own fees for receiving money or converting currencies."
      },
      {
        question: "What payment methods are available?",
        answer: "We offer PayPal, direct bank transfer (select regions), prepaid Visa cards, cryptocurrency wallets, and over 100 different gift card options."
      },
      {
        question: "Is there a maximum withdrawal limit?",
        answer: "Standard accounts can withdraw up to $500 per day. Verified premium members have higher limits of up to $2,000 per day."
      }
    ]
  },
  {
    id: "security",
    title: "Security & Privacy",
    icon: Shield,
    questions: [
      {
        question: "Is my personal information safe?",
        answer: "Yes, we use bank-level 256-bit SSL encryption to protect all data. We never sell your personal information to third parties and comply with GDPR and CCPA regulations."
      },
      {
        question: "How do you verify my identity?",
        answer: "For large withdrawals, we may require identity verification through a simple process involving a government-issued ID. This protects against fraud and ensures your account security."
      },
      {
        question: "What happens if my account is compromised?",
        answer: "Contact our support immediately. We&apos;ll lock your account, investigate the issue, and work to recover any lost points. Enable two-factor authentication for added security."
      },
      {
        question: "Can I delete my account and data?",
        answer: "Yes, you can request account deletion from your settings page. All personal data will be permanently removed within 30 days in compliance with data protection laws."
      }
    ]
  },
  {
    id: "account",
    title: "Account Management",
    icon: Settings,
    questions: [
      {
        question: "How do I reset my password?",
        answer: "Click \"Forgot Password\" on the login page, enter your email, and follow the reset link sent to your inbox. For security, reset links expire after 24 hours."
      },
      {
        question: "Can I have multiple accounts?",
        answer: "No, each person is limited to one account. Multiple accounts are against our terms of service and may result in suspension of all associated accounts."
      },
      {
        question: "How does the referral program work?",
        answer: "Share your unique referral link with friends. When they sign up and earn their first 1,000 points, you both receive a 500 point bonus. You also earn 10% of their lifetime earnings."
      },
      {
        question: "What are the benefits of premium membership?",
        answer: "Premium members enjoy 1.5x points on all offers, exclusive high-value offers, priority support, higher withdrawal limits, and early access to new features."
      }
    ]
  }
]

export function FAQCategories() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {faqCategories.map((category) => (
            <div key={category.id} className="glass rounded-2xl p-6">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">{category.title}</h2>
              </div>

              {/* Questions */}
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`${category.id}-${index}`}
                    className="border-border bg-background/50 rounded-lg px-4"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
