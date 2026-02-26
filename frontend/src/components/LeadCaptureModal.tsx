import { useState } from 'react';
import { Lock, Gift, ChevronRight, User, Mail, Phone, MapPin, Hash } from 'lucide-react';
import { useLeadCapture, LeadData } from '../context/LeadCaptureContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface FieldConfig {
    key: keyof LeadData;
    label: string;
    placeholder: string;
    type: string;
    icon: React.ReactNode;
    autoComplete: string;
}

const fields: FieldConfig[] = [
    { key: 'firstName', label: 'First Name', placeholder: 'John', type: 'text', icon: <User className="w-4 h-4" />, autoComplete: 'given-name' },
    { key: 'lastName', label: 'Last Name', placeholder: 'Smith', type: 'text', icon: <User className="w-4 h-4" />, autoComplete: 'family-name' },
    { key: 'email', label: 'Email Address', placeholder: 'john@example.com', type: 'email', icon: <Mail className="w-4 h-4" />, autoComplete: 'email' },
    { key: 'phoneNumber', label: 'Phone Number', placeholder: '(555) 000-0000', type: 'tel', icon: <Phone className="w-4 h-4" />, autoComplete: 'tel' },
    { key: 'streetAddress', label: 'Street Address', placeholder: '123 Main St', type: 'text', icon: <MapPin className="w-4 h-4" />, autoComplete: 'street-address' },
    { key: 'city', label: 'City', placeholder: 'New York', type: 'text', icon: <MapPin className="w-4 h-4" />, autoComplete: 'address-level2' },
    { key: 'zipCode', label: 'ZIP Code', placeholder: '10001', type: 'text', icon: <Hash className="w-4 h-4" />, autoComplete: 'postal-code' },
];

const emptyForm: LeadData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    zipCode: '',
};

export function LeadCaptureModal() {
    const { submitLead } = useLeadCapture();
    const [formData, setFormData] = useState<LeadData>(emptyForm);
    const [errors, setErrors] = useState<Partial<Record<keyof LeadData, string>>>({});
    const [submitted, setSubmitted] = useState(false);

    const validate = (): boolean => {
        const newErrors: Partial<Record<keyof LeadData, string>> = {};
        fields.forEach(({ key, label }) => {
            if (!formData[key].trim()) {
                newErrors[key] = `${label} is required`;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (key: keyof LeadData, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
        if (errors[key]) {
            setErrors((prev) => ({ ...prev, [key]: undefined }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setSubmitted(true);
        setTimeout(() => {
            submitLead(formData);
        }, 600);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-card w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
                {/* Header */}
                <div className="bg-brand-deep px-6 py-6 text-white text-center">
                    <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-3">
                        {submitted ? (
                            <Gift className="w-7 h-7 text-white" />
                        ) : (
                            <Lock className="w-7 h-7 text-white" />
                        )}
                    </div>
                    <h2 className="font-serif font-bold text-2xl mb-1">
                        {submitted ? 'Unlocking Your Offers…' : 'Unlock Exclusive Loan Offers'}
                    </h2>
                    <p className="text-white/75 text-sm max-w-sm mx-auto">
                        {submitted
                            ? 'Please wait while we prepare your personalized offers.'
                            : 'Enter your details below to instantly access today\'s best loan rates from our trusted partners.'}
                    </p>
                </div>

                {/* Form */}
                {!submitted && (
                    <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4 max-h-[70vh] overflow-y-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {fields.map(({ key, label, placeholder, type, icon, autoComplete }) => (
                                <div
                                    key={key}
                                    className={key === 'streetAddress' || key === 'email' ? 'sm:col-span-2' : ''}
                                >
                                    <Label htmlFor={`lead-${key}`} className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5">
                                        <span className="text-muted-foreground">{icon}</span>
                                        {label}
                                    </Label>
                                    <Input
                                        id={`lead-${key}`}
                                        type={type}
                                        placeholder={placeholder}
                                        value={formData[key]}
                                        onChange={(e) => handleChange(key, e.target.value)}
                                        autoComplete={autoComplete}
                                        className={errors[key] ? 'border-destructive focus-visible:ring-destructive' : ''}
                                    />
                                    {errors[key] && (
                                        <p className="text-xs text-destructive mt-1">{errors[key]}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="pt-2">
                            <Button
                                type="submit"
                                className="w-full bg-primary text-primary-foreground font-semibold py-3 text-base rounded-xl hover:opacity-90 transition-opacity"
                                size="lg"
                            >
                                Unlock My Loan Offers
                                <ChevronRight className="w-5 h-5 ml-1" />
                            </Button>
                        </div>

                        <p className="text-xs text-muted-foreground text-center leading-relaxed">
                            By submitting, you agree to receive information about loan offers from our partners. Your information is used solely to personalize your experience. We do not sell your data.
                        </p>
                    </form>
                )}

                {/* Submitted loading state */}
                {submitted && (
                    <div className="px-6 py-10 flex flex-col items-center gap-4">
                        <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
                        <p className="text-muted-foreground text-sm">Preparing your personalized offers…</p>
                    </div>
                )}
            </div>
        </div>
    );
}
