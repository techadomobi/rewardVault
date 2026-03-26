import { Metadata } from "next"
import { FAQHero } from "@/components/faq/faq-hero"
import { FAQCategories } from "@/components/faq/faq-categories"
import { FAQContact } from "@/components/faq/faq-contact"

export const metadata: Metadata = {
  title: "FAQ - RewardVault",
  description: "Find answers to common questions about earning points, redeeming rewards, account management, and more.",
}

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQCategories />
      <FAQContact />
    </>
  )
}
