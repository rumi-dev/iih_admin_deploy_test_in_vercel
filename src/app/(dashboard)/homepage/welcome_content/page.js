"use client"
import BigHeading from '@/components/commonComponents/bigHeading'
import Button1 from '@/components/commonComponents/buttons/buttons'
import { Paragraph1 } from '@/components/commonComponents/texts/paragraph'
import ParaHeading1 from '@/components/commonComponents/paraHeading1'
import { ImagePreview1, ImagePreview2 } from '@/components/commonComponents/imagePreview'
import { mainPage } from '@/TestingStaticData/data1'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { DelayTimer } from "@/components/commonComponents/loadings/timer";
import { Myloadings } from '@/components/commonComponents/loadings/loading'
import { isApiEnabled, apiEndPoints } from "@/url"
import { useDispatch, useSelector } from 'react-redux'
import { setMainPageContent } from "@/redux/slice";
import apiClient from '@/services/apiClient'
import { MyErrors1 } from '@/components/commonComponents/texts/error'







export default function WelcomeContent() {
    const [Loading, setLoading] = useState(false)
    const [Error, setError] = useState(false);
    const router = useRouter();
    const reduxContent = useSelector((state => state.mainpage));
    const reduxDispatch = useDispatch();
    function welcomeOnclick() {
        router.push('/homepage/welcome_content/edit')
    }


    const fetchData = async () => {
        setLoading(true);
        if (!isApiEnabled) {
            await DelayTimer();
            reduxDispatch(setMainPageContent({ bannertitle: mainPage.welcome.text }))
            setLoading(false);
            return;
        }
        try {
            const mainPageBannertitle = await apiClient.get(apiEndPoints.baseUrl + apiEndPoints.mainPageBannertitle);
            // console.log('mainPageBannertitle response: ' + mainPageBannertitle.status);
            // console.log('mainPageBannertitle.data.data.attributes: ' + mainPageBannertitle.data.data.attributes.bannertitle);

            if (mainPageBannertitle.status == 200) {
                const stateChangePayload = { bannertitle: mainPageBannertitle.data.data.attributes.bannertitle }
                reduxDispatch(setMainPageContent(stateChangePayload))
                setLoading(false);
                // console.log('title.data.data.attributes.welcometitle: ' + title.data.data.attributes.welcometitle);
            }



            // reduxDispatch(setMainPageContent('redux content changed'))


            // if (response.status == 200) {
            //   console.log("200 working");
            //   setTestimonialsList(response.data.attributes.testimonialspoints);
            //   setLoading(false);
            // }
        } catch (error) {
            // OpenErrorMessage("error");
            setLoading(false);
            setError(true)
        }
    };

    // const displayReduxState = () => {
    //     console.log('redux state log: ');
    //     reduxContent
    //     for (let key in reduxContent) {
    //         console.log('key: ' + key + ' :: ' + 'value: ' + reduxContent[key]);
    //     }
    // }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            {/* <Button1 text="Edit" onclick={displayReduxState} /> */}

            <BigHeading heading='Banner Content' />
            <br />
            <ParaHeading1 heading='Banner Title' />
            {Loading && <Myloadings />}
            {Error && <MyErrors1 />}
            {(!Loading & !Error) && <Paragraph1 para={reduxContent.bannertitle} />
            }<br />
            <ParaHeading1 heading='Banner Images' />
            <ImagePreview1 ImageList={mainPage.welcome.imageLIst} />
            <Button1 text='Edit' onclick={welcomeOnclick} />
            {/* <Button1 text='Edit Images' onclick={welcomeImageOnclick} /> */}

        </>
    )
}
