import { useState } from 'react'
import Button from '../../../components/ui/Button'
import Input from '../../../components/ui/Input'
import Textarea from '../../../components/ui/Textarea'

type FormData = {
    fullName: string
    email: string
    phone: string
    message: string
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    return (
        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
            <Input
                label='Full Name'
                name='fullName'
                onChange={handleChange}
                placeholder='Enter your full name'
                required
                type='text'
                value={formData.fullName}
            />

            <Input
                label='Email Address'
                name='email'
                onChange={handleChange}
                placeholder='name@company.com'
                required
                type='email'
                value={formData.email}
            />

            <Input
                label='Phone Number'
                name='phone'
                onChange={handleChange}
                placeholder='+234 (0) 800 000 0000'
                required
                type='tel'
                value={formData.phone}
            />

            <Textarea
                label='Message'
                name='message'
                onChange={handleChange}
                placeholder='Tell us about your smart home project, property type, and timeline...'
                required
                value={formData.message}
            />

            <Button className='w-full mt-2' type='submit'>
                Send Message
            </Button>
        </form>
    )
}

export default ContactForm