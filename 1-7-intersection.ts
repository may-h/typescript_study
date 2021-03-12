{


    /**
     *  Intersection Types : & 
     *  - Union과 반대 
     *  
     */


    type Student = {
        name: string; 
        score: number; 
    }

    type Worker = {
        emplyeeId: number;
        work: () => void;
    }

    // Intersection Type을 선언하면, 각 타입의 모든 속성에 접근 할 수 있다. 
    function internWork(person: Student & Worker) {
        console.log(person.name, person.emplyeeId, person.work());
    }

    // 그렇기 때문에 Student, Worker의 모든 속성을 넘겨줘야한다. 
    internWork({
        name: 'may',
        score: 1,
        emplyeeId: 123,
        work: () => {}
    })
}