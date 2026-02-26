import { LeadData } from '../context/LeadCaptureContext';

/**
 * Replaces [firstName], [lastName], and [email] token placeholders in an
 * affiliate URL with the actual values from the submitted lead form data.
 */
export function buildAffiliateUrl(url: string, leadData: LeadData | null): string {
    if (!leadData) return url;
    return url
        .replace(/\[firstName\]/g, encodeURIComponent(leadData.firstName))
        .replace(/\[lastName\]/g, encodeURIComponent(leadData.lastName))
        .replace(/\[email\]/g, encodeURIComponent(leadData.email));
}
