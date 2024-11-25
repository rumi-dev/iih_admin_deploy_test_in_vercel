export const isApiEnabled = true;
export const apiEndPoints = {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    mainpage: '/mainpages/1',
    testimonials: '/mainpages/1?fields[0]=testimonialspoints',
    WelcomeContentTitle: '/mainpages/1?fields[0]=welcometitle',
    WelcomeContentDescription: '/mainpages/1?fields[0]=welcomedes1',
    mainPageBannertitle: '/mainpages/1?fields[0]=bannertitle',

}