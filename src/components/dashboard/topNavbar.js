"use client"
import React from 'react'
import Link from 'next/link'
import profileImg from '@/assets/icons/general icons svg/profile.svg'
import profileImg1 from '@/assets/icons/jpg/profile.jpg'
import notification1 from '@/assets/icons/general icons svg/notiication.svg'
import notification2 from '@/assets/icons/general icons svg/notification.svg'
import { Dropdown } from 'antd'
import Image from 'next/image'
import { Paragraph1 } from '@/components/commonComponents/texts/paragraph'
import { Link1 } from '@/components/commonComponents/texts/links'
import Button1 from '../commonComponents/buttons/buttons'
import { useRouter } from 'next/navigation'



const TopNavbar = () => {
    const router = useRouter();
    const logoutOnCLick = () => { router.push('/') }

    const ProfileItems = [{
        key: '1',
        label: (
            <>
                <Link1 route={'/profile'} text={'Profile'} />
            </>
        )
    },
    {
        key: '2',
        label: (
            <>
                <Button1 text='Logout' onclick={logoutOnCLick} type='button' />
            </>
        )
    }
    ]
    const NotificationItems = [{
        key: '1',
        label: (
            <>
                <div className='flex flex-col  items-center'>
                    <Image src={notification2} width={30} height={50} alt='notification icon' />
                    <br />
                    <Paragraph1 para={'No New Notifications'} />
                </div>
            </>
        )
    },
    {
        key: '2',
        label: (
            <>
            </>
        )
    }
    ]
    return (
        <>
            <div className='border d-flex flex-row justify-content-between px-3'>
                <div></div>
                <div className='flex gap-2 align-middle'>
                    <Dropdown menu={{ items: NotificationItems }}>
                        <Image src={notification1} width={50} height={50} alt='notification Dropdown' />
                    </Dropdown>

                    <Dropdown menu={{ items: ProfileItems }}>
                        <Image src={profileImg1} width={50} height={50} alt='Profile Dropdown' />
                    </Dropdown>
                </div>

            </div>
        </>

    )
}

export default TopNavbar