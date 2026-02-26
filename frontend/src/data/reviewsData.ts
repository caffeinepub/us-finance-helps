import { ResourceCategory } from '../backend';

export interface Review {
    name: string;
    initial: string;
    rating: number;
    text: string;
}

export interface CategoryReviewData {
    discussion: string;
    reviews: Review[];
}

export const reviewsData: Record<string, CategoryReviewData> = {
    [ResourceCategory.budgeting]: {
        discussion: `Budgeting is the cornerstone of any solid financial plan. Many Americans struggle with overspending not because they earn too little, but because they lack a clear picture of where their money goes each month. The 50/30/20 rule — allocating 50% to needs, 30% to wants, and 20% to savings — is a popular starting point that works for most income levels. Digital tools and apps have made it easier than ever to track spending in real time, helping you catch problem areas before they spiral. Consistent budgeting, even imperfect budgeting, beats no budgeting every time.`,
        reviews: [
            { name: 'Sarah M.', initial: 'S', rating: 5, text: 'Following the budgeting guides here completely changed how I manage my paycheck. I finally stopped living paycheck to paycheck after just two months!' },
            { name: 'James T.', initial: 'J', rating: 4, text: 'Really practical advice. The 50/30/20 breakdown made budgeting feel less overwhelming. I wish there were more examples for variable income earners.' },
            { name: 'Priya K.', initial: 'P', rating: 5, text: 'I used the tips here to set up my first real budget. Saved $400 in the first month just by tracking my subscriptions!' },
        ],
    },
    [ResourceCategory.saving]: {
        discussion: `Building a savings habit is one of the most impactful financial decisions you can make. An emergency fund covering 3–6 months of expenses acts as a financial buffer against job loss, medical bills, or unexpected repairs. High-yield savings accounts (HYSAs) offered by online banks now pay significantly more than traditional brick-and-mortar banks, making it easier to grow your savings passively. Automating transfers on payday removes the temptation to spend first and save later. Even small, consistent contributions compound meaningfully over time.`,
        reviews: [
            { name: 'Marcus L.', initial: 'M', rating: 5, text: 'Switched to a high-yield savings account after reading the recommendations here. Now earning 5x more interest on my emergency fund!' },
            { name: 'Diane R.', initial: 'D', rating: 4, text: 'The automated savings tips were a game changer. Set it and forget it really works — I\'ve saved $3,000 without even noticing.' },
            { name: 'Kevin W.', initial: 'K', rating: 5, text: 'Clear, no-nonsense advice. Helped me build my first emergency fund in under a year on a modest salary.' },
        ],
    },
    [ResourceCategory.investing]: {
        discussion: `Investing is how ordinary Americans build long-term wealth, yet many delay starting due to fear or confusion. The stock market, despite short-term volatility, has historically returned an average of about 10% annually over the long run. Low-cost index funds and ETFs allow everyday investors to own a slice of hundreds of companies without needing to pick individual stocks. Time in the market consistently outperforms timing the market — starting early, even with small amounts, is far more powerful than waiting for the "perfect" moment. Tax-advantaged accounts like 401(k)s and IRAs should be maximized before investing in taxable brokerage accounts.`,
        reviews: [
            { name: 'Angela F.', initial: 'A', rating: 5, text: 'Finally understood the difference between ETFs and mutual funds thanks to the resources here. Started my first index fund portfolio at 28!' },
            { name: 'Robert C.', initial: 'R', rating: 4, text: 'Solid beginner-friendly content. Would love more advanced material on tax-loss harvesting, but the fundamentals are excellent.' },
            { name: 'Tina S.', initial: 'T', rating: 5, text: 'The compound interest examples were eye-opening. Convinced my spouse to start investing too. We\'re both now maxing our Roth IRAs.' },
        ],
    },
    [ResourceCategory.taxes]: {
        discussion: `The US tax code is complex, but understanding the basics can save you thousands of dollars each year. Many taxpayers leave money on the table by missing deductions for student loan interest, home office expenses, or charitable contributions. Contributing to a traditional 401(k) or IRA reduces your taxable income dollar-for-dollar, providing immediate tax savings. The IRS Free File program allows eligible taxpayers to file federal returns at no cost. Staying organized throughout the year — keeping receipts and tracking deductible expenses — makes tax season far less stressful and more financially rewarding.`,
        reviews: [
            { name: 'Linda H.', initial: 'L', rating: 5, text: 'Learned about the home office deduction I\'d been missing for two years. Got a much bigger refund this year thanks to these tips!' },
            { name: 'Carlos M.', initial: 'C', rating: 4, text: 'Very helpful breakdown of tax brackets. I used to think earning more always meant less take-home — now I understand marginal rates.' },
            { name: 'Natalie B.', initial: 'N', rating: 5, text: 'The IRS Free File tip alone saved me $150 in filing fees. Highly recommend this section to anyone doing their own taxes.' },
        ],
    },
    [ResourceCategory.credit]: {
        discussion: `Your credit score is one of the most powerful numbers in your financial life, influencing everything from mortgage rates to apartment applications. Payment history accounts for 35% of your FICO score, making on-time payments the single most important habit to develop. Keeping your credit utilization below 30% — ideally below 10% — can significantly boost your score. Regularly reviewing your free credit reports from Equifax, Experian, and TransUnion helps you catch errors and identity theft early. Building credit takes time, but strategic use of secured cards or credit-builder loans can accelerate the process for those starting from scratch.`,
        reviews: [
            { name: 'Derek P.', initial: 'D', rating: 5, text: 'Raised my credit score by 87 points in 6 months using the strategies outlined here. Now qualified for a much better mortgage rate!' },
            { name: 'Yolanda G.', initial: 'Y', rating: 5, text: 'The credit utilization tips were incredibly helpful. I had no idea keeping balances low even when I pay in full each month mattered so much.' },
            { name: 'Brian N.', initial: 'B', rating: 4, text: 'Great practical advice. The section on disputing credit report errors helped me remove two inaccurate late payments from my report.' },
        ],
    },
    [ResourceCategory.loans]: {
        discussion: `Loans are powerful financial tools when used wisely, but costly mistakes when misunderstood. Whether you're considering a mortgage, auto loan, personal loan, or student loan refinance, comparing the Annual Percentage Rate (APR) — not just the interest rate — gives you the true cost of borrowing. Pre-qualification with multiple lenders allows you to shop rates without impacting your credit score. Making even small extra payments toward principal can shave years off a loan and save thousands in interest. Understanding the difference between fixed and variable rates helps you choose the right product for your financial situation and risk tolerance.`,
        reviews: [
            { name: 'Michelle O.', initial: 'M', rating: 5, text: 'Used the loan comparison tips to refinance my student loans. Saved $180/month and will pay off 3 years earlier. Life-changing!' },
            { name: 'Steve A.', initial: 'S', rating: 5, text: 'The APR vs. interest rate explanation finally clicked for me. Got a much better deal on my car loan by shopping around.' },
            { name: 'Rachel T.', initial: 'R', rating: 4, text: 'Really helpful for first-time home buyers. The mortgage pre-approval process was demystified completely. Closing on my first home next month!' },
        ],
    },
    [ResourceCategory.retirement]: {
        discussion: `Retirement planning is a marathon, not a sprint, and the earlier you start, the more powerful compound growth becomes. Contributing enough to your employer's 401(k) to capture the full match is essentially free money — never leave it on the table. A Roth IRA offers tax-free growth and withdrawals in retirement, making it especially valuable for younger workers in lower tax brackets. The 4% rule — withdrawing 4% of your portfolio annually — is a widely used guideline for sustainable retirement income. Social Security benefits increase by about 8% for each year you delay claiming past 62, up to age 70, making timing a critical decision.`,
        reviews: [
            { name: 'George V.', initial: 'G', rating: 5, text: 'Started my Roth IRA at 24 after reading the retirement section. The compound growth projections were motivating enough to max it out every year.' },
            { name: 'Patricia L.', initial: 'P', rating: 5, text: 'The Social Security timing explanation was excellent. My husband and I now have a clear strategy for when each of us will claim benefits.' },
            { name: 'Tom H.', initial: 'T', rating: 4, text: 'Very comprehensive. The 4% rule breakdown helped me understand how much I actually need to retire comfortably. Now I have a real target to work toward.' },
        ],
    },
};
