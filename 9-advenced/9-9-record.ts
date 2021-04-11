/**
 * Record Type
 * Map과 비슷하게 하나와 다른 하나를 연결하고 싶을때, 하나를 키로 쓰고 다른 하나를 묶고 싶을 때 사용
 */

{
    type PageInfo = {
        title: string;
    };

    type Page = 'home' | 'about' | 'contact'; 
    const nav: Record<Page, PageInfo> = {
        home: {title: 'Home'},
        about: {title: 'About'},
        contact: {title: 'Contact'}
    }
}