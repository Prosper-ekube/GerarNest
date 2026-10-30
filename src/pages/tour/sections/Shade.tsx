import React from 'react'
import {
    MdAccessTime,
    MdBlinds,
    MdDevices,
    MdLightMode,
    MdTouchApp
} from 'react-icons/md'

import Features from './Features'

const Shade: React.FC = () => {
    const features = [
        {
            title: 'Welcome the Morning.',
            description:
                'Open your curtains to let natural light into your space.',
            icon: <MdLightMode className='h-5 w-5' />
        },
        {
            title: 'Privacy, When You Need It.',
            description:
                'Close compatible motorized curtains with a simple command.',
            icon: <MdBlinds className='h-5 w-5' />
        },
        {
            title: 'Your Routine, on Schedule.',
            description:
                'Set supported curtain systems to open or close at chosen times.',
            icon: <MdAccessTime className='h-5 w-5' />
        },
        {
            title: 'Control Without the Effort.',
            description:
                'Operate compatible curtains through the app or a supported remote.',
            icon: <MdTouchApp className='h-5 w-5' />
        },
        {
            title: 'Shading That Works With Your Home.',
            description:
                'Integrate compatible curtain motors into supported smart-home scenes.',
            icon: <MdDevices className='h-5 w-5' />
        }
    ]

    return (
        <Features
            desktopImage='https://res.cloudinary.com/dkdd5pfl0/image/upload/v1793036347/Shade_w512kc.webp'
            mobileImage='https://res.cloudinary.com/dkdd5pfl0/image/upload/v1793036347/Shade_w512kc.webp'
            eyebrow='GerarNest Smart Shading'
            headline='Let the Day In. Keep the Comfort.'
            title='Shading on Your Terms.'
            description='Move beyond manual curtains. With compatible Orvibo curtain motors, manage your curtains with convenient, connected control.'
            features={features}
        />
    )
}

export default Shade