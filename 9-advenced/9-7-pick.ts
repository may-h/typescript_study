/**
 * Pick Type
 * 기존에 있는 타입에서 내가 원하는 것만 쏙쏙 골라서 제한적인 타입을 만들 수 있다. 
 * 어떤 정보들이 많은 타입에서 몇가지만 다루는 타입이 있다면 Pick Type 유틸리티를 사용할 수 있다. 
 */

{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    type VideoMetadata = Pick<Video, 'id' | 'title'>

    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'http://..',
            data: 'bype-data..'
        }
    }

    function getVideoMetadata(id: string): Pick<Video, 'id' | 'title'> {
        return {
            id, 
            title: 'title'
        }
    }
}