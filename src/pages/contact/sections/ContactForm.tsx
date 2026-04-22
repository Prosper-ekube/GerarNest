import { useState } from 'react'

type FormState = {
    email: string
    message: string
    name: string
    phone: string
}

type FormFieldProps = {
    label: string
    name: keyof FormState
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
    type: string
    value: string
}

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
            <label className='text-[#888] text-sm tracking-[0.2px]'>
                {label}
            </label>
            <input
                className='bg-[#1a1a1a] border border-[#2e2e2e] focus:border-[#555] focus:outline-none font-[inherit] px-3.5 py-3 rounded-lg text-sm text-white transition-colors duration-200 placeholder:text-[#444]'
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                value={value}
            />
        </div>
    )
}

const ContactForm = () => {
    const [form, setForm] = useState<FormState>({
        email: '',
        message: '',
        name: '',
        phone: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (isSubmitting) return

        setIsSubmitting(true)

        // simulate API request
        await new Promise(resolve => setTimeout(resolve, 1500))

        console.log('Form submitted:', form)

        setIsSubmitting(false)
        setIsSubmitted(true)

        // reset form after submit
        setForm({
            email: '',
            message: '',
            name: '',
            phone: ''
        })

        // reset success state after a short time
        setTimeout(() => setIsSubmitted(false), 2000)
    }

    return (
        <div className='flex flex-col w-full'>
            <h1 className='font-medium leading-[1.15] mb-10 text-4xl text-white tracking-tight lg:text-5xl'>
                Talk to a Gerar
                <br />
                Smart Homes specialist.
            </h1>

            <form className='flex flex-col gap-5 w-full' onSubmit={handleSubmit}>
                <FormField
                    label='Name'
                    name='name'
                    onChange={handleChange}
                    placeholder='e.g. Alex Ndubuisi'
                    type='text'
                    value={form.name}
                />
                <FormField
                    label='Email address'
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
                    <label className='text-[#888] text-sm tracking-[0.2px]'>
                        Message
                    </label>
                    <textarea
                        className='bg-[#1a1a1a] border border-[#2e2e2e] focus:border-[#555] focus:outline-none font-[inherit] h-[110px] px-3.5 py-3 resize-none rounded-lg text-[14px] text-white transition-colors duration-200 placeholder:text-[#444]'
                        name='message'
                        onChange={handleChange}
                        placeholder='Tell us about your smart home project, property type, and timeline...'
                        value={form.message}
                    />
                </div>

                <button
                    className='active:scale-[0.98] bg-white cursor-pointer font-medium hover:bg-[#e8e8e8] mt-2 px-7 py-3.5 rounded-lg self-start text-[#0d0d0d] text-[14px] transition-all duration-200 disabled:opacity-70'
                    disabled={isSubmitting}
                    type='submit'
                >
                    {isSubmitting
                        ? 'Sending...'
                        : isSubmitted
                            ? 'Message sent'
                            : 'Send message'}
                </button>
            </form>
        </div>
    )
}

export default ContactForm