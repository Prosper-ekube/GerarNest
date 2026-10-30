import React from 'react'
import {
    MdAcUnit,
    MdAir,
    MdDeviceThermostat,
    MdPowerSettingsNew,
    MdSchedule
} from 'react-icons/md'

import Features from './Features'

const Climate: React.FC = () => {
    const features = [
        {
            title: 'Comfort at Your Fingertips.',
            description:
                'Adjust compatible air-conditioning systems through supported control panels.',
            icon: <MdDeviceThermostat className='h-5 w-5' />
        },
        {
            title: 'Arrive to a Comfortable Home.',
            description:
                'Switch on supported air-conditioning systems remotely before you arrive.',
            icon: <MdAcUnit className='h-5 w-5' />
        },
        {
            title: 'Comfort on Your Schedule.',
            description:
                'Use supported timers to manage when your air conditioning runs.',
            icon: <MdSchedule className='h-5 w-5' />
        },
        {
            title: 'Forgot to Turn It Off?',
            description:
                'Remotely switch off compatible systems when you need to.',
            icon: <MdPowerSettingsNew className='h-5 w-5' />
        },
        {
            title: 'A Simpler Way to Stay Comfortable.',
            description:
                'Bring supported climate controls into your wider smart-home setup.',
            icon: <MdAir className='h-5 w-5' />
        }
    ]

    return (
        <Features
            desktopImage='https://res.cloudinary.com/dkdd5pfl0/image/upload/v1793037603/climate_2.webp'
            mobileImage='https://res.cloudinary.com/dkdd5pfl0/image/upload/v1793036346/Climate_eaa5wn.webp'
            eyebrow='GerarNest Climate Control'
            headline='Comfort, Without the Complication.'
            title='A More Considered Climate.'
            description='Take convenient control of compatible air-conditioning systems and make everyday comfort easier to manage.'
            features={features}
        />
    )
}

export default Climate