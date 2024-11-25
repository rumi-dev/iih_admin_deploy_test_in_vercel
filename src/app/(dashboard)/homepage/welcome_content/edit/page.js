'use client'
import BigHeading from '@/components/commonComponents/bigHeading'
import Button1 from '@/components/commonComponents/buttons/buttons'
import { isApiEnabled } from '@/url'
import React, { useState } from 'react'
import apiClient from '@/services/apiClient'
import { apiEndPoints } from '@/url'
import { Textarea1 } from '@/components/commonComponents/inputs/input1'
import { FileUpload1 } from '@/components/commonComponents/inputs/fileUpload'
import { useDispatch, useSelector } from 'react-redux'



const WelcomeContentEdit = () => {
    const reduxContent = useSelector((state => state.mainpage));
    const reduxDispatch = useDispatch();

    const submitWelcomeNote = async (event) => {
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
        console.log('formData: ' + formData);
        console.log('stringfy formData: ' + JSON.stringify(formData));
        const mainPageBannertitle = await apiClient.put(apiEndPoints.baseUrl + apiEndPoints.mainpage, apiBody);

        // if (!isApiEnabled) {
        //     window.alert('welcome note changed')
        //     return;
        // }
        try {

            // const response = await apiClient.put(apiEndPoints.mainpage, apiBody);
        } catch (error) {

        }
    }
    return (
        <>
            <BigHeading heading='Banner Content' />
            <div className='w-50 mx-auto'>
                <form onSubmit={submitWelcomeNote} className='mb-2'>
                    <Textarea1 lable='Change Welcome Note' name='bannertitle' id='exampleInputEmail1' required={true} value={reduxContent.bannertitle} />
                    {/* <label for="exampleInputEmail1" class="form-label">Change Welcome Note</label> */}
                    {/* <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="welcome Note change" /> */}
                    {/* <textarea name='bannertitle' type="text" rows="5" class="form-control" id="exampleInputEmail1" aria-describedby="welcome Note change" required /> */}

                    <Button1 text='Submit' />
                </form>
                <FileUpload1 />
            </div>
        </>
    )
}

export default WelcomeContentEdit