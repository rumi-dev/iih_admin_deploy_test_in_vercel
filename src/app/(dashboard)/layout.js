import React from 'react'
import TopNavbar from '@/components/dashboard/topNavbar'
import SideNavbar from '@/components/dashboard/sideNavbar'

const Layout = ({ children }) => {
    return (
        <>

            <div className='d-flex vw-100'>
                <div className='col-2'>
                    <SideNavbar />
                </div>
                <div className='d-flex w-100 flex-column'>
                    <TopNavbar />

                    {children}
                </div>
            </div>


        </>
    )
}

export default Layout