/**
 * Omit Type
 *  Pick type과 반대로 원하는 것을 빼버릴 수 잇다. 
 */

 {
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    type VideoMetadata = Omit<Video, 'url' | 'data'> // url, data를 제외한 타입을 쓸 수 있다. 

    function getVideo_omit(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'http://..',
            data: 'bype-data..'
        }
    }

    function getVideoMetadata_omit(id: string): VideoMetadata {
        return {
            id, 
            title: 'title'
        }
    }
}