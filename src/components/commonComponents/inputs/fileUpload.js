'use client'
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import Button1 from '@/components/commonComponents/buttons/buttons';
import axios from 'axios';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
export const FileUpload1 = () => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([
    ]);

    const uploadImagesToServer = async () => {
        try {
            // Step 1: Upload images to Strapi
            console.log('file', fileList);
            const uploadPromises = fileList.map(file => {
                const formData = new FormData();
                formData.append('files', file.originFileObj);

                return axios.post('https://iih-backend-hmxkxq4zka-de.a.run.app/api/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzMwODI4MDIyLCJleHAiOjE3MzM0MjAwMjJ9.JFU1nP_fmzr0PzIIa2B1tAL7o8kE0_vDwZ86kyfmbuE'
                    },
                });
            });

            // Wait for all images to be uploaded
            const uploadResponses = await Promise.all(uploadPromises);
            const uploadedImageIds = uploadResponses.map(res => res.data[0].id); // Get image IDs

            // Step 2: Update the specific entry with image IDs in the 'photos' field
            const updateResponse = await axios.put(`https://iih-backend-hmxkxq4zka-de.a.run.app/api/mainpages/1`, {
                data: {
                    bannerPics: uploadedImageIds, // Linking images to 'photos' field in entry
                },
            });

            console.log("Entry updated with images:", updateResponse.data);
            alert("Images uploaded and linked to entry successfully!");
            setFileList([]); // Clear selected files after upload
            // Clear entry ID
        } catch (error) {
            console.error("Error uploading images or updating entry:", error);
            alert("Failed to upload images.");
        }
    }
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );
    return (
        <>
            <Upload
                // action={uploadLimage()}
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            {previewImage && (
                <Image
                    wrapperStyle={{
                        display: 'none',
                    }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                />
            )}
            <Button1 type='submit' text="Submit Images" onclick={uploadImagesToServer}></Button1>
        </>
    );
};