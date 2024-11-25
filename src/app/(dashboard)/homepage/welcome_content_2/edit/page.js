

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



const visionMissionForm = () => {

    const [messageApi, contextHolder] = message.useMessage();


    const submitWelcomeContent2 = async (event) => {
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
            <BigHeading heading='Welcome content 2 modify' />
            <section className='w-50 mx-auto'>
                <form onSubmit={submitWelcomeContent2} className='mb-2'>
                    <Input1 lable='Head Title' name='welcometitle' id='welcometitle' />

                    <Input1 lable='Title 1' name='welcometitle1' id='welcometitle1' />
                    <Textarea1 lable='Description 1' name='welcomedes1' id='welcomedes1' />

                    <Input1 lable='Title 2' name='welcometitle2' id='welcometitle2' />
                    <Textarea1 lable='Description 2' name='welcomedes2' id='welcomedes2' />

                    <Button1 text='Submit' />
                </form>
                <FileUpload1 />
            </section>

        </>
    )
}

export default visionMissionForm