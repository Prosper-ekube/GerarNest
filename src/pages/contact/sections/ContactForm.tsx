// ContactForm.tsx
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

type FormState = {
    email: string;
    message: string;
    name: string;
    phone: string;
};

type FormFieldProps = {
    label: string;
    name: keyof FormState;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type: string;
    value: string;
};

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_x2d2a6g';
const EMAILJS_TEMPLATE_ID = 'template_di893kd';
const EMAILJS_PUBLIC_KEY = 'w5RlHm6DPeditJvh7';

const FormField: React.FC<FormFieldProps> = ({
    label,
    name,
    onChange,
    placeholder,
    type,
    value
}) => {
    return (
        <div className='flex flex-col gap-2'>
            <label className='text-[#a8a8a8] text-sm tracking-[0.2px]'>
                {label}
            </label>
            <input
                className='bg-[#1a1a1a] border border-[#2e2e2e] focus:border-[#555] focus:outline-none font-[inherit] px-3.5 py-3 rounded-lg text-sm text-white transition-all duration-200 placeholder:text-[#444]'
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                value={value}
            />
        </div>
    );
};

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const [form, setForm] = useState<FormState>({
        email: '',
        message: '',
        name: '',
        phone: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // ✅ Initialize EmailJS
    useEffect(() => {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
        if (error) setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isSubmitting) return;

        // Validate form
        if (!form.name || !form.email || !form.message) {
            setError('Please fill in all required fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            // Using sendForm with form reference
            const result = await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current!,
                EMAILJS_PUBLIC_KEY
            );

            console.log('Email sent successfully:', result);

            // Success
            setIsSubmitted(true);
            setForm({
                email: '',
                message: '',
                name: '',
                phone: ''
            });

            setTimeout(() => setIsSubmitted(false), 5000);

        } catch (error: any) {
            console.error('Failed to send email:', error);

            // More detailed error messages
            if (error?.status === 400) {
                setError('Invalid form data. Please check your input.');
            } else if (error?.status === 401) {
                setError('Authentication failed. Please check your EmailJS public key.');
            } else if (error?.status === 404) {
                setError('Service or template not found. Please check your EmailJS configuration.');
            } else if (error?.text) {
                setError(`Error: ${error.text}`);
            } else {
                setError('Something went wrong. Please try again later or contact us directly at gerarsmarthomes@gmail.com');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='flex flex-col w-full'>
            <h1 className='font-bold leading-[1.15] mb-10 text-4xl text-white tracking-tight lg:text-5xl'>
                Talk to a Gerar<span className='hidden min-w-375px:[block]'>Nest</span>
                <span className='max-w-375px:[hidden]'>Nest</span><br />specialist.
            </h1>

            <form
                ref={formRef}
                className='flex flex-col gap-5 w-full'
                onSubmit={handleSubmit}
            >
                <FormField
                    label='Name *'
                    name='name'
                    onChange={handleChange}
                    placeholder='e.g. Alex Ndubuisi'
                    type='text'
                    value={form.name}
                />
                <FormField
                    label='Email address *'
                    name='email'
                    onChange={handleChange}
                    placeholder='e.g. alexndubuisi@gmail.com'
                    type='email'
                    value={form.email}
                />
                <FormField
                    label='Phone number'
                    name='phone'
                    onChange={handleChange}
                    placeholder='+234 804 593 3846'
                    type='tel'
                    value={form.phone}
                />

                <div className='flex flex-col gap-2'>
                    <label className='text-[#a8a8a8] text-sm tracking-[0.2px]'>
                        Message *
                    </label>
                    <textarea
                        className='bg-[#1a1a1a] border border-[#2e2e2e] focus:border-[#555] focus:outline-none font-[inherit] h-[110px] px-3.5 py-3 resize-none rounded-lg text-[14px] text-white transition-colors duration-200 placeholder:text-[#444]'
                        name='message'
                        onChange={handleChange}
                        placeholder='Tell us about your smart home project, property type, and timeline...'
                        value={form.message}
                    />
                </div>

                {/* Error Message */}
                {error && (
                    <div className='bg-red-500/10 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm'>
                        {error}
                    </div>
                )}

                {/* Success Message */}
                {isSubmitted && (
                    <div className='bg-green-500/10 border border-green-500/50 rounded-lg p-3 text-green-400 text-sm'>
                        Message sent successfully! We'll get back to you within 24 hours.
                    </div>
                )}

                <button
                    className={`bg-[#6f4ccf] duration-1000 ease-in-out font-semibold hover:-translate-y-1 hover:bg-[#5a3ca8] self-start px-8 py-4 rounded-full shadow-[#6f4ccf]/40 shadow-lg text-base text-white transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                    type='submit'
                >
                    {isSubmitting
                        ? 'Sending...'
                        : isSubmitted
                            ? '✓ Message sent'
                            : 'Send message'}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;