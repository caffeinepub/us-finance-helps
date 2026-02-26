import { ResourceCategory } from '../backend';

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

export const loanOffersData: Record<string, LoanOffer[]> = {
    [ResourceCategory.budgeting]: [
        {
            id: 'budget-1',
            lenderName: '24/7 Credit Loan (up to $5,000)',
            offerDescription: 'Consolidate debt and simplify your budget with one low monthly payment. Compare top lenders and find the best rate for your situation.',
            apr: 'APR from 8.99%',
            ctaText: 'Check My Rate',
            ctaUrl: 'https://cd.leadfinv.com/?a=294697&c=294173&co=358739&mt=5',
            badge: 'Sponsored',
        },
        {
            id: 'budget-2',
            lenderName: 'Hot Loans Today',
            offerDescription: 'Personal loans designed to help you take control of your finances. Fast approval, flexible terms, and competitive rates.',
            apr: 'APR from 6.99%',
            ctaText: 'Apply Now',
            ctaUrl: 'https://www.hotloanstoday.com?id=vMWPxIKBq9DH2QsDiJNtlIkIwmcF00oXN-523fdHkCM.&subId=[SUB_ID_VALUE]&subId2=[SUB_ID2_VALUE]&subId3=[clickId]&firstName=[firstName]&lastName=[lastName]&email=[email]',
            badge: 'Partner Offer',
        },
    ],
    [ResourceCategory.saving]: [
        {
            id: 'saving-1',
            lenderName: 'Honest Loans',
            offerDescription: 'Grow your savings faster with competitive loan refinancing options. No hidden fees, transparent terms.',
            apr: 'Up to 5.00% APY',
            ctaText: 'Get Started',
            ctaUrl: 'https://www.honestloans.net?id=vMWPxIKBq9DH2QsDiJNtlIkIwmcF00oXN-523fdHkCM.&subId=[SUB_ID_VALUE]&subId2=[SUB_ID2_VALUE]&subId3=[clickId]&firstName=[firstName]&lastName=[lastName]&email=[email]',
            badge: 'Sponsored',
        },
        {
            id: 'saving-2',
            lenderName: 'NextDayPersonalLoan',
            offerDescription: 'Discover top savings and loan products tailored to your financial goals. Compare offers from trusted lenders.',
            apr: 'Competitive Rates',
            ctaText: 'View Offers',
            ctaUrl: 'https://wedebeek.com/click?pid=13236&offer_id=20435',
            badge: 'Partner Offer',
        },
    ],
    [ResourceCategory.investing]: [
        {
            id: 'investing-1',
            lenderName: 'Wizzay (up to $5,000)',
            offerDescription: 'Access investment-backed loan products and financial tools to grow your wealth. No account minimums.',
            apr: 'Competitive Rates',
            ctaText: 'Explore Options',
            ctaUrl: 'https://cd.leadfinv.com/?a=294697&c=373383&co=358739&mt=5',
            badge: 'Sponsored',
        },
        {
            id: 'investing-2',
            lenderName: 'EverdayLoans',
            offerDescription: 'Smart financial products for investors. Compare loan and savings offers to maximize your returns.',
            apr: 'From 0.25% fee',
            ctaText: 'Start Now',
            ctaUrl: 'https://wedebeek.com/click?pid=13236&offer_id=20370',
            badge: 'Partner Offer',
        },
    ],
    [ResourceCategory.taxes]: [
        {
            id: 'taxes-1',
            lenderName: 'Hot Loans Today',
            offerDescription: 'Need funds to cover your tax bill? Get a fast personal loan with same-day approval and flexible repayment.',
            apr: 'APR from 7.99%',
            ctaText: 'Apply Now',
            ctaUrl: 'https://www.hotloanstoday.com?id=vMWPxIKBq9DH2QsDiJNtlIkIwmcF00oXN-523fdHkCM.&subId=[SUB_ID_VALUE]&subId2=[SUB_ID2_VALUE]&subId3=[clickId]&firstName=[firstName]&lastName=[lastName]&email=[email]',
            badge: 'Sponsored',
        },
        {
            id: 'taxes-2',
            lenderName: 'Honest Loans',
            offerDescription: 'Cover tax expenses with a transparent personal loan. No origination fees, honest rates, and quick funding.',
            apr: 'Starting at 6.99%',
            ctaText: 'Check Rates',
            ctaUrl: 'https://www.honestloans.net?id=vMWPxIKBq9DH2QsDiJNtlIkIwmcF00oXN-523fdHkCM.&subId=[SUB_ID_VALUE]&subId2=[SUB_ID2_VALUE]&subId3=[clickId]&firstName=[firstName]&lastName=[lastName]&email=[email]',
            badge: 'Partner Offer',
        },
    ],
    [ResourceCategory.credit]: [
        {
            id: 'credit-1',
            lenderName: '24/7 Credit Loan (up to $5,000)',
            offerDescription: 'Build or rebuild your credit with tailored loan products. Get matched with the best offer for your credit profile.',
            apr: 'APR from 8.99%',
            ctaText: 'Check Eligibility',
            ctaUrl: 'https://cd.leadfinv.com/?a=294697&c=294173&co=358739&mt=5',
            badge: 'Sponsored',
        },
        {
            id: 'credit-2',
            lenderName: 'NextDayPersonalLoan',
            offerDescription: 'Improve your credit score with smart financial products. Compare credit-building loans and secured options.',
            apr: 'Build Credit Fast',
            ctaText: 'View Offers',
            ctaUrl: 'https://wedebeek.com/click?pid=13236&offer_id=20435',
            badge: 'Partner Offer',
        },
    ],
    [ResourceCategory.loans]: [
        {
            id: 'loans-1',
            lenderName: 'Wizzay (up to $5,000)',
            offerDescription: 'Compare personal loan offers from multiple lenders in minutes. Find the lowest rate for your situation.',
            apr: 'APR from 5.99%',
            ctaText: 'Compare Rates',
            ctaUrl: 'https://cd.leadfinv.com/?a=294697&c=373383&co=358739&mt=5',
            badge: 'Sponsored',
            highlight: true,
        },
        {
            id: 'loans-2',
            lenderName: 'Hot Loans Today',
            offerDescription: 'Fast personal loans with same-day funding available. Borrow with flexible terms and competitive rates.',
            apr: 'APR from 7.73%',
            ctaText: 'Get My Rate',
            ctaUrl: 'https://www.hotloanstoday.com?id=vMWPxIKBq9DH2QsDiJNtlIkIwmcF00oXN-523fdHkCM.&subId=[SUB_ID_VALUE]&subId2=[SUB_ID2_VALUE]&subId3=[clickId]&firstName=[firstName]&lastName=[lastName]&email=[email]',
            badge: 'Partner Offer',
        },
        {
            id: 'loans-3',
            lenderName: 'Honest Loans',
            offerDescription: 'Transparent personal loans with no hidden fees. Compare real rates from top lenders without affecting your credit.',
            apr: 'APR from 4.99%',
            ctaText: 'Check My Rate',
            ctaUrl: 'https://www.honestloans.net?id=vMWPxIKBq9DH2QsDiJNtlIkIwmcF00oXN-523fdHkCM.&subId=[SUB_ID_VALUE]&subId2=[SUB_ID2_VALUE]&subId3=[clickId]&firstName=[firstName]&lastName=[lastName]&email=[email]',
            badge: 'Sponsored',
        },
    ],
    [ResourceCategory.retirement]: [
        {
            id: 'retirement-1',
            lenderName: 'EverdayLoans',
            offerDescription: 'Fund your retirement goals with smart loan and savings products. Industry-competitive rates and flexible terms.',
            apr: 'Competitive Rates',
            ctaText: 'Explore Options',
            ctaUrl: 'https://wedebeek.com/click?pid=13236&offer_id=20370',
            badge: 'Sponsored',
        },
        {
            id: 'retirement-2',
            lenderName: '24/7 Credit Loan (up to $5,000)',
            offerDescription: 'Get personalized retirement financing options and loan products tailored to your long-term goals.',
            apr: 'Free consultation',
            ctaText: 'Get Started',
            ctaUrl: 'https://cd.leadfinv.com/?a=294697&c=294173&co=358739&mt=5',
            badge: 'Partner Offer',
        },
    ],
};

export const topLoanOffers: LoanOffer[] = [
    {
        id: 'top-1',
        lenderName: 'Wizzay (up to $5,000)',
        offerDescription: 'Compare personal loan rates from top lenders. Get matched with the best offer for your credit profile in minutes.',
        apr: 'APR from 5.99%',
        ctaText: 'Compare Rates',
        ctaUrl: 'https://cd.leadfinv.com/?a=294697&c=373383&co=358739&mt=5',
        badge: 'Most Popular',
        highlight: true,
    },
    {
        id: 'top-2',
        lenderName: '24/7 Credit Loan (up to $5,000)',
        offerDescription: 'Consolidate debt and simplify your finances with one low monthly payment. Find the best rate for your credit profile.',
        apr: 'APR from 8.99%',
        ctaText: 'Check My Rate',
        ctaUrl: 'https://cd.leadfinv.com/?a=294697&c=294173&co=358739&mt=5',
        badge: 'Sponsored',
    },
    {
        id: 'top-3',
        lenderName: 'Hot Loans Today',
        offerDescription: 'Fast personal loans with same-day funding. Flexible terms and competitive fixed rates for all credit types.',
        apr: 'APR from 7.73%',
        ctaText: 'Apply Now',
        ctaUrl: 'https://www.hotloanstoday.com?id=vMWPxIKBq9DH2QsDiJNtlIkIwmcF00oXN-523fdHkCM.&subId=[SUB_ID_VALUE]&subId2=[SUB_ID2_VALUE]&subId3=[clickId]&firstName=[firstName]&lastName=[lastName]&email=[email]',
        badge: 'Sponsored',
    },
    {
        id: 'top-4',
        lenderName: 'Honest Loans',
        offerDescription: 'Transparent loans with no hidden fees. Real rates from trusted lenders with no impact to your credit score.',
        apr: 'APR from 4.99%',
        ctaText: 'Check My Rate',
        ctaUrl: 'https://www.honestloans.net?id=vMWPxIKBq9DH2QsDiJNtlIkIwmcF00oXN-523fdHkCM.&subId=[SUB_ID_VALUE]&subId2=[SUB_ID2_VALUE]&subId3=[clickId]&firstName=[firstName]&lastName=[lastName]&email=[email]',
        badge: 'Sponsored',
    },
    {
        id: 'top-5',
        lenderName: 'NextDayPersonalLoan',
        offerDescription: 'Discover top financial products tailored to your needs. Compare offers and find the best rates available today.',
        apr: 'Competitive Rates',
        ctaText: 'View Offers',
        ctaUrl: 'https://wedebeek.com/click?pid=13236&offer_id=20435',
        badge: 'Partner Offer',
    },
    {
        id: 'top-6',
        lenderName: 'EverdayLoans',
        offerDescription: 'Smart financial products for every goal. Compare loan and savings offers to maximize your financial potential.',
        apr: 'Competitive Rates',
        ctaText: 'Start Now',
        ctaUrl: 'https://wedebeek.com/click?pid=13236&offer_id=20370',
        badge: 'Partner Offer',
    },
];
