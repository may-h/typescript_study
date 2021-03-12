{
    /**
     *  Enum 
     *  : 여러가지 관련된 상수값들을 한곳에 모아서 정의할 수 있게 도와주는 타입. 
     * 
     *  - Javascript에서는 Enum을 지원하지 않기 때문에 Typescript에서 지원하는 타입이다. 
     *  - ENUM을 사용하면 type이 보장되면서 간편하게 사용할 수 있다. 
     */

    // Javascript 
    // JS에서는 Enum타입이 없기 때문에 아래와 같이 const와 대문자 변수명을 사용하여 상수를 나타낸다. 
    // 하지만, MONDAY~SATURDAY까지의 요일을 나타내는 상수를 정의하는 경우, 서로 연관되어 있지만 묶을 수 있는 타입이 존재하지 않는다.
    const MAX_NUM = 6; 
    const MAX_STUDENTS_PER_CLASS = 10; 
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;

    // JS로 구현해본 ENUM..! 
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1})
    const dayOfToday = DAYS_ENUM.MONDAY;


    // Typescript 👎🏻 
    // Enum명은 전체 대분자가 아닌 첫글자만 대문자로 선언한다.  
    // 값을 할당하지 않으면 값이 자동으로 0부터 할당된다. 
    enum Days {
        Monday = 1, // 1로 선언하면 1부터 할당된다. 
        Tuesday = 'tues', 
        Wednesday = 'wed', 
        Thursday = 'thurs', 
        Friday = 'fri' , 
        Saturday = 'satur', 
        Sunday = 'sun', 
    }
    console.log(Days.Tuesday); 

    // 👎🏻 enum의 단점 : 다른 값을 할당 할 수 있음..
    let day: Days = Days.Saturday;
    day = Days.Tuesday; 
    day = 10; 
    console.log(day); //10 



    // 👍🏻 대신에 Union type을 사용하는 것을 권장. 
    type DaysOfWeek = 'Monday' | 'Tuseday' | 'Wednesday';
    let daysOfweek: DaysOfWeek = 'Monday';
    daysOfweek = 'Wednesday';
    //daysOfweek = 10; //ERROR


}