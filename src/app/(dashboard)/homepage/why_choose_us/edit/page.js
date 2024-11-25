

'use client'
import BigHeading from '@/components/commonComponents/bigHeading'
import Button1 from '@/components/commonComponents/buttons/buttons'
import { isApiEnabled } from '@/url'
import React, { useState } from 'react'
import apiClient from '@/services/apiClient'
import { apiEndPoints } from '@/url'
import { Textarea1, Input1 } from '@/components/commonComponents/inputs/input1'
import { FileUpload1 } from '@/components/commonComponents/inputs/fileUpload'
import { message } from 'antd';



const WhyChooseUsEdit = () => {

    const [messageApi, contextHolder] = message.useMessage();


    const submitWhyChooseUs = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formDataObj = Object.fromEntries(formData.entries());
        const apiBody = {
            data: formDataObj
        }

        console.log(
            (` form data ${JSON.stringify(formDataObj)}`)


        );
        // if (!isApiEnabled) {
        //     window.alert('welcome note changed')
        //     return;
        // }
        try {
            const response = await apiClient.put(apiEndPoints.mainpage, apiBody);
            OpenSuccessMessage('Vission successfully changed')

        } catch (error) {
            OpenErrorMessage('error')

        }
    }


    const OpenSuccessMessage = (msg) => {
        messageApi.open({
            type: 'success',
            content: msg,
        });
    }

    const OpenErrorMessage = (msg) => {
        messageApi.open({
            type: 'error',
            content: msg,
        });
    }

    return (
        <>
            {contextHolder}
            <BigHeading heading='Why Choose Us modify' />
            <section className='w-50 mx-auto'>
                <form onSubmit={submitWhyChooseUs} className='mb-2'>

                    <Textarea1 lable='Description 1' name='welcomedes1' id='welcomedes1' />


                    <Button1 text='Submit' />
                </form>

            </section>

        </>
    )
}

export default WhyChooseUsEdit