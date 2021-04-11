{
    type ToDo = {
        title: string;
        description: string;
    };

    function display(todo: Readonly<ToDo>) { //불변성을 보장하는 것이 중요하다. 
        // todo.title = 'jajaja'; //ERROR   
    }

}  