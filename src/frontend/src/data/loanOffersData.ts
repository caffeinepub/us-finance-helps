import { ResourceCategory } from "../backend";

export interface LoanOffer {
  id: string;
  lenderName: string;
  offerDescription: string;
  apr: string;
  ctaText: string;
  ctaUrl: string;
  badge: string;
  highlight?: boolean;
}

const ALL_OFFERS: LoanOffer[] = [
  {
    id: "offer-hotloans",
    lenderName: "Hot Loans Today",
    offerDescription:
      "Fast personal loans with same-day funding. Flexible terms and competitive fixed rates for all credit types.",
    apr: "APR from 7.73%",
    ctaText: "Apply Now",
    ctaUrl:
      "https://www.hotloanstoday.com?id=vMWPxIKBq9DH2QsDiJNtlIkIwmcF00oXN-523fdHkCM.&subId=[SUB_ID_VALUE]&subId2=[SUB_ID2_VALUE]&subId3=[clickId]&firstName=[firstName]&lastName=[lastName]&email=[email]",
    badge: "Partner Offer",
    highlight: true,
  },
  {
    id: "offer-honestloans",
    lenderName: "Honest Loans",
    offerDescription:
      "Transparent loans with no hidden fees. Real rates from trusted lenders with no impact to your credit score.",
    apr: "APR from 4.99%",
    ctaText: "Check My Rate",
    ctaUrl:
      "https://www.honestloans.net/?id=vMWPxIKBq9DH2QsDiJNtlIkIwmcF00oXN-523fdHkCM.&subId=[SUB_ID_VALUE]&subId2=[SUB_ID2_VALUE]&subId3=[clickId]&firstName=[firstName]&lastName=[lastName]&email=[email]",
    badge: "Sponsored",
  },
  {
    id: "offer-maythe4th",
    lenderName: "May the 4th Loans",
    offerDescription:
      "Quick personal loans up to $5,000 with simple online application. Get matched with a lender in minutes.",
    apr: "APR from 5.99%",
    ctaText: "Get a Loan",
    ctaUrl: "https://www.maythe4thloans.com/?c=332876&v1=subsource&v2=clickid",
    badge: "Partner Offer",
  },
  {
    id: "offer-wizzay",
    lenderName: "Wizzay",
    offerDescription:
      "Smart lending solutions up to $5,000. Fast approval process with multiple lender options to fit your needs.",
    apr: "APR from 5.99%",
    ctaText: "Apply Now",
    ctaUrl: "https://wizzay.com/?c=332876&v1=subsource&v2=clickid",
    badge: "Sponsored",
  },
  {
    id: "offer-nowpersonal",
    lenderName: "Now Personal Loan",
    offerDescription:
      "Access personal loans quickly through a simple online form. Multiple lenders, competitive rates, fast decisions.",
    apr: "APR from 6.99%",
    ctaText: "Start Application",
    ctaUrl:
      "https://nowpersonalloan.com/loanForm?c=332876&v1=subsource&v2=clickid",
    badge: "Partner Offer",
  },
  {
    id: "offer-directfund",
    lenderName: "Direct Fund Center",
    offerDescription:
      "Connect with direct lenders for personal loans. Fast, simple online process with personalized loan offers.",
    apr: "APR from 6.99%",
    ctaText: "Check Rates",
    ctaUrl:
      "https://www.directfundcenter.com/?id=vMWPxIKBq9DH2QsDiJNtlIkIwmcF00oXN-523fdHkCM.&subId=[SUB_ID_VALUE]&subId2=[SUB_ID2_VALUE]&subId3=[clickId]&firstName=[firstName]&lastName=[lastName]&email=[email]",
    badge: "Sponsored",
  },
  {
    id: "offer-fastmoney",
    lenderName: "Fast Money Source",
    offerDescription:
      "Find your best loan option fast. Compare personalized offers from top lenders without affecting your credit score.",
    apr: "APR from 5.99%",
    ctaText: "Find My Rate",
    ctaUrl:
      "https://www.fastmoneysource.com/?id=vMWPxIKBq9DH2QsDiJNtlIkIwmcF00oXN-523fdHkCM.&subId=[SUB_ID_VALUE]&subId2=[SUB_ID2_VALUE]&subId3=[clickId]&firstName=[firstName]&lastName=[lastName]&email=[email]",
    badge: "Partner Offer",
  },
];

// Helper to build per-category offers with unique IDs
function offersForCategory(category: string): LoanOffer[] {
  return ALL_OFFERS.map((offer, i) => ({
    ...offer,
    id: `${category}-${i + 1}`,
  }));
}

export const loanOffersData: Record<string, LoanOffer[]> = {
  [ResourceCategory.budgeting]: offersForCategory("budgeting"),
  [ResourceCategory.saving]: offersForCategory("saving"),
  [ResourceCategory.investing]: offersForCategory("investing"),
  [ResourceCategory.taxes]: offersForCategory("taxes"),
  [ResourceCategory.credit]: offersForCategory("credit"),
  [ResourceCategory.loans]: offersForCategory("loans"),
  [ResourceCategory.retirement]: offersForCategory("retirement"),
};

export const topLoanOffers: LoanOffer[] = ALL_OFFERS.map((offer, i) => ({
  ...offer,
  id: `top-${i + 1}`,
}));
