const { createApp } = Vue;

createApp({
    data() {
        return {
            addTodo: "",
            TodoList: [
                {
                    text: "andare a pesca",
                    done: false
                },
                {
                    text: "andare a calcetto",
                    done: true
                },
                {
                    text: "andare a casa",
                    done: false
                }
            ]
        }
    },
    methods: {
        deleteActivity(index){
            this.TodoList.splice(index, 1);
        },
        AddActivity(){
            //creaiamo un nuovo elemento ma andando a inserire la nuova variabile che inseriremo nell'input
            let newElement = {
                text: this.addTodo,
                done: false
            }
            this.TodoList.push(newElement);
            console.log(this.addTodo);
        }, 
        clickActivity(){
            this.TodoList.done = !this.TodoList.done;
        }
    },
}).mount('#app');