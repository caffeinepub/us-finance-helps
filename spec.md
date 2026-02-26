# Specification

## Summary
**Goal:** Update the display names of all 6 loan offer cards to match their real affiliate lender brand names.

**Planned changes:**
- Update offer card display name for `https://cd.leadfinv.com/?a=294697&c=294173&co=358739&mt=5` to "24/7 Credit Loan (up to $5,000)"
- Update offer card display name for `https://cd.leadfinv.com/?a=294697&c=373383&co=358739&mt=5` to "Wizzay (up to $5,000)"
- Update offer card display name for the hotloanstoday.com URL to "Hot Loans Today"
- Update offer card display name for the honestloans.net URL to "Honest Loans"
- Update offer card display name for `https://wedebeek.com/click?pid=13236&offer_id=20435` to "NextDayPersonalLoan"
- Update offer card display name for `https://wedebeek.com/click?pid=13236&offer_id=20370` to "EverdayLoans"
- Apply changes in both `loanOffersData.ts` and `TopLoanOffersBanner.tsx`
- Preserve dynamic token substitution (`[firstName]`, `[lastName]`, `[email]`) for hotloanstoday.com and honestloans.net via `affiliateUrlBuilder.ts`

**User-visible outcome:** All 6 loan offer cards display their correct real lender brand names while affiliate URLs and dynamic token substitution remain unchanged.
