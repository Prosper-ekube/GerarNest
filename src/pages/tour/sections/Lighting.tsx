import React from 'react'
import {
    MdLightbulbOutline,
    MdPhoneIphone,
    MdSchedule,
    MdTouchApp,
    MdTune
} from 'react-icons/md'

import Features from './Features'

const Lighting: React.FC = () => {
    const features = [
        {
            title: 'The Right Light, Every Time.',
            description:
                'Adjust brightness and colour temperature to create the atmosphere you want.',
            icon: <MdTune className='h-5 w-5' />
        },
        {
            title: 'Control From Anywhere.',
            description:
                'Manage compatible lights through the Orvibo Home app.',
            icon: <MdPhoneIphone className='h-5 w-5' />
        },
        {
            title: 'Lighting That Follows Your Routine.',
            description:
                'Schedule compatible lights to suit your day.',
            icon: <MdSchedule className='h-5 w-5' />
        },
        {
            title: 'One Touch Changes Everything.',
            description:
                'Activate lighting scenes with a compatible smart panel or app.',
            icon: <MdTouchApp className='h-5 w-5' />
        },
        {
            title: 'A Home That Works in Harmony.',
            description:
                'Group compatible lights for coordinated control.',
            icon: <MdLightbulbOutline className='h-5 w-5' />
        }
    ]

    return (
        <Features
            desktopImage='https://res.cloudinary.com/dkdd5pfl0/image/upload/v1793036968/Lighting_fmogjt.webp'
            mobileImage='https://res.cloudinary.com/dkdd5pfl0/image/upload/v1793036968/Lighting_fmogjt.webp'
            eyebrow='GerarNest Lighting'
            headline='Lighting That Feels Just Right.'
            title='Smart Lighting, Your Way.'
            description='Set the light for every moment, from focused mornings to relaxed evenings, with Orvibo smart lighting.'
            features={features}
        />
    )
}

export default Lighting