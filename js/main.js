const app = new Vue({
    el: '#app',
    data: {
        task: '',
        done: false,
        taskList: []
        
    },
    methods: {
        addTask() {
            if (this.task === '') {
                alert('Inserisci una cosa da fare');
            } else {
                this.taskList.push({
                task: this.task.trim().charAt(0).toUpperCase() + this.task.trim().slice(1),
                done: false
            })
            this.task = '',
            console.log('taskList: ', this.taskList)
            }
            
        },
        setAsDone(index) {
            this.taskList[index].done = !this.taskList[index].done;
        },
        removeTask(index){
            this.taskList.splice(index,1)
        }
        
    }
  })