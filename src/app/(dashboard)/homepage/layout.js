'use client'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMainPageContent } from "@/redux/slice";
import apiClient from '@/services/apiClient'
import { isApiEnabled, apiEndPoints } from "@/url"




const Layout = ({ children }) => {
    const reduxContent = useSelector((state => state.mainpage));
    const reduxDispatch = useDispatch();

    const fetchMainPageData = async () => {
        if (!isApiEnabled) {
            return;
        }

        try {
            const mainPageDataFromApi = await apiClient.get(apiEndPoints.baseUrl + apiEndPoints.mainpage);
            // console.log('maimainPageDataFromApi response status: ' + mainPageDataFromApi.status);
            // console.log('mainPageDataFromApi.data.data.attributes: ' + mainPageDataFromApi.data.data.attributes);

            if (mainPageDataFromApi.status == 200) {
                const stateChangePayload = mainPageDataFromApi.data.data.attributes
                reduxDispatch(setMainPageContent(stateChangePayload))
                // setLoading(false);
                // console.log('title.data.data.attributes.welcometitle: ' + title.data.data.attributes.welcometitle);
            } else {
                console.log(', not 200, some other error');

            }

        } catch (error) {
            //   setLoading(false);
            //   setError(true)

            console.log('Error in fetch data in mainpages');

        }
    }
    useEffect(() => {
        fetchMainPageData();

    }, []);
    return (
        <>{children}</>
    )
}
export default Layout