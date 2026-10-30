import React from 'react'
import {
    MdCameraAlt,
    MdDoorFront,
    MdNotificationsActive,
    MdSensors,
    MdShield
} from 'react-icons/md'

import Features from './Features'

const Security: React.FC = () => {
    const features = [
        {
            title: 'Know When a Door Opens.',
            description:
                'Monitor the status of compatible doors and windows with smart sensors.',
            icon: <MdDoorFront className='h-5 w-5' />
        },
        {
            title: 'Keep an Eye on Home.',
            description:
                'Check your space with a compatible Orvibo smart camera.',
            icon: <MdCameraAlt className='h-5 w-5' />
        },
        {
            title: 'Be Alert to the Unexpected.',
            description:
                'Receive alerts from supported sensors when they detect relevant activity.',
            icon: <MdNotificationsActive className='h-5 w-5' />
        },
        {
            title: 'Protection Beyond the Front Door.',
            description:
                'Add compatible smoke, gas, or water-leakage sensors to your setup.',
            icon: <MdSensors className='h-5 w-5' />
        },
        {
            title: 'Help When It Matters.',
            description:
                'Use a compatible emergency button to trigger an alert.',
            icon: <MdShield className='h-5 w-5' />
        }
    ]

    return (
        <Features
            desktopImage='https://res.cloudinary.com/dkdd5pfl0/image/upload/v1793037792/Security_n71qyy.webp'
            mobileImage='https://res.cloudinary.com/dkdd5pfl0/image/upload/v1793037926/security_1.webp'
            eyebrow='GerarNest Home Security'
            headline='Feel More at Ease at Home.'
            title='Security That Keeps You Connected.'
            description='Stay informed about important activity around your home with compatible Orvibo security devices and sensors.'
            features={features}
        />
    )
}

export default Security