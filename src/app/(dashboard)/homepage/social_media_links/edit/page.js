

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



const SocialMediaLinkForm = () => {

    const [messageApi, contextHolder] = message.useMessage();


    const SocialMediaLinkFormSubmit = async (event) => {
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
            OpenSuccessMessage('Links successfully changed')

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
            <BigHeading heading='Social Media Link modify' />
            <section className='w-50 mx-auto'>
                <form onSubmit={SocialMediaLinkFormSubmit} className='mb-2'>
                    <Input1 lable='LinkedIn' name='linkedin' id='linkedin' />
                    <Input1 lable='Facebook' name='facebook' id='facebook' />
                    <Input1 lable='Instagram' name='instagram' id='instagram' />
                    <Input1 lable='X' name='x' id='x' />
                    <Button1 text='Submit' />
                </form>
            </section>

        </>
    )
}

export default SocialMediaLinkForm