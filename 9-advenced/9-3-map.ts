/*
    * Mapped Type 
    map을 이용하면, 기존의 타입의 성질을 이용하여 다른 타입으로 변환시킬 수 있다. 
    map을 사용하면 기존의 배열을 다른 배열로 바꿔서 생성할 수 있다.. 같은 개념! 기존의 타입을 다른 형태로 변환할 수 있다. 
    [1, 2].map(item => item * item); //[1, 4] 
*/
{
    // 만약 Video에 새로운 속성 description을 넣고 싶으면? Video, VideoOptional에 다 추가해줘야함.. = 번거로움!! 
    type Video = {
        title: string;
        author: string;
    };
    /*
    type VideoOptional = {
        title?: string;
        author?: string;
    }
    */


    type Optional<T> = { // 필수가 아닌 optional로 만들고 싶을 때, 
        [P in keyof T]?: T[P] //type 안에 []을 쓰면 [for ...in]과 같다. 
    }

    type ReadOnly<T> = { // readonly로 만들고 싶을 때, 
        readonly [P in keyof T]: T[P]; 
    }

    type VideoOptional = Optional<Video>; 


    type Animal = {
        name: string;
        age: number;
    }
    const animal: Optional<Animal> = { //AnimalOptional을 안만들고 타입에 바로 넣어줄 수 있다. 
        age: 1,
    }

    const video: ReadOnly<Video> = {
        title: "good may",
        author: "may"
    };
    // video.title = 'brian'; //readonly라 ERROR


    // =========================== 활용하기 
    type Nullable<T> = { [P in keyof T]: T[P] | null };
    const obj2: Nullable<Video> = {
        title: "hi",
        author: null
    };

    type Proxy<T> = {
        get(): T; 
        set(value: T): void
    }

    type Proxyfy<T> = {
        [P in keyof T]: Proxy<T[P]>;
    }

}