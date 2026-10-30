import React from 'react'
import {
    MdAutoAwesome,
    MdDevices,
    MdEvent,
    MdLightMode,
    MdTouchApp
} from 'react-icons/md'

import Features from './Features'

const ScenesAutomation: React.FC = () => {
    const features = [
        {
            title: 'One Touch. A Different Atmosphere.',
            description:
                'Activate compatible device settings together with a custom scene.',
            icon: <MdTouchApp className='h-5 w-5' />
        },
        {
            title: 'A Welcome That Feels Like Home.',
            description:
                'Create a supported arrival scene for your lighting and other connected devices.',
            icon: <MdLightMode className='h-5 w-5' />
        },
        {
            title: 'Let Your Routine Run Itself.',
            description:
                'Schedule compatible devices to perform supported actions at chosen times.',
            icon: <MdEvent className='h-5 w-5' />
        },
        {
            title: 'Set the Mood for the Moment.',
            description:
                'Create scenes for relaxing, entertaining, working, or winding down.',
            icon: <MdAutoAwesome className='h-5 w-5' />
        },
        {
            title: 'Your Home, Working Together.',
            description:
                'Coordinate compatible lighting, shading, and other connected devices through supported automation.',
            icon: <MdDevices className='h-5 w-5' />
        }
    ]

    return (
        <Features
            desktopImage='https://res.cloudinary.com/dkdd5pfl0/image/upload/v1793038199/Automation_scm1v3.webp'
            mobileImage='https://res.cloudinary.com/dkdd5pfl0/image/upload/v1793038109/Automation_scm1v3.webp'
            eyebrow='GerarNest Scenes & Automation'
            headline='One Home. Many Possibilities.'
            title='Make Everyday Moments Simpler.'
            description='Bring compatible smart devices together to create routines that feel natural to your home and the way you live.'
            features={features}
        />
    )
}

export default ScenesAutomation