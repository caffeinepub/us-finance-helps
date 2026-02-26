import React, { createContext, useContext, useState, useCallback } from 'react';

export interface LeadData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    streetAddress: string;
    city: string;
    zipCode: string;
}

interface LeadCaptureContextValue {
    isLeadCaptured: boolean;
    leadData: LeadData | null;
    submitLead: (data: LeadData) => void;
}

const LeadCaptureContext = createContext<LeadCaptureContextValue | null>(null);

const SESSION_KEY = 'lead_capture_data';

function loadFromSession(): LeadData | null {
    try {
        const raw = sessionStorage.getItem(SESSION_KEY);
        if (raw) return JSON.parse(raw) as LeadData;
    } catch {
        // ignore
    }
    return null;
}

export function LeadCaptureProvider({ children }: { children: React.ReactNode }) {
    const [leadData, setLeadData] = useState<LeadData | null>(() => loadFromSession());

    const submitLead = useCallback((data: LeadData) => {
        try {
            sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
        } catch {
            // ignore
        }
        setLeadData(data);
    }, []);

    return (
        <LeadCaptureContext.Provider
            value={{
                isLeadCaptured: leadData !== null,
                leadData,
                submitLead,
            }}
        >
            {children}
        </LeadCaptureContext.Provider>
    );
}

export function useLeadCapture(): LeadCaptureContextValue {
    const ctx = useContext(LeadCaptureContext);
    if (!ctx) throw new Error('useLeadCapture must be used within LeadCaptureProvider');
    return ctx;
}
