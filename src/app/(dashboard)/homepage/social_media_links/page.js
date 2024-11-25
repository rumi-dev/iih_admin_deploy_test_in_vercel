

"use client"
import BigHeading from '@/components/commonComponents/bigHeading'
import Button1 from '@/components/commonComponents/buttons/buttons'
import { Paragraph1 } from '@/components/commonComponents/texts/paragraph'
import ParaHeading1 from '@/components/commonComponents/paraHeading1'
import { ImagePreview1, ImagePreview2 } from '@/components/commonComponents/imagePreview'
import { mainPage } from '@/TestingStaticData/data1'
import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'



export default function SocialMediaLinks() {
    const router = useRouter();
    function socialMediaOnclick() {
        // router.push('/homepage/welcome_content/edit/welcometext')
        router.push('/homepage/social_media_links/edit')
    }

    // function welcomeImageOnclick() {
    //     router.push('/homepage/welcome_content/edit/welcome_image')
    // }
    return (
        <>
            <BigHeading heading='Social Media Link' />
            <ParaHeading1 heading='LinkedIn' />
            <Paragraph1 para='https://www.linkedin.com/' />
            <ParaHeading1 heading='Facebook' />
            <Paragraph1 para='https://www.facebook.com/' />
            <ParaHeading1 heading='Instagram' />
            <Paragraph1 para='https://www.instagram.com/' />
            <ParaHeading1 heading='X' />
            <Paragraph1 para='https://x.com/' />

            <Button1 text='Edit' onclick={socialMediaOnclick} />

            {/* <Button1 text='Edit Images' onclick={welcomeImageOnclick} /> */}

        </>
    )
}
