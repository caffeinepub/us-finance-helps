# Specification

## Summary
**Goal:** Ensure all 6 affiliate offer links are present, correctly labeled, and visible to users after the lead capture form is submitted.

**Planned changes:**
- Audit `loanOffersData.ts` and `TopLoanOffersBanner.tsx` to confirm all 6 affiliate links are assigned to offer cards.
- Add or reassign offer cards as needed so every link appears at least once across the TopLoanOffersBanner and/or category loan offer sections.
- Ensure offer cards display the correct brand names: "24/7 Credit Loan (up to $5,000)", "Wizzay (up to $5,000)", "Hot Loans Today", "Honest Loans", "NextDayPersonalLoan", "EverdayLoans".
- Update `affiliateUrlBuilder.ts` to substitute `[firstName]`, `[lastName]`, and `[email]` tokens in the Hot Loans Today and Honest Loans URLs using submitted lead form data.
- Keep affiliate links gated (hidden/blurred) until the lead capture form is fully submitted.

**User-visible outcome:** After submitting the lead capture form, users see all 6 affiliate offer cards with correct brand names and clickable CTA buttons that navigate to the correct URLs, with personal details dynamically inserted for Hot Loans Today and Honest Loans.
