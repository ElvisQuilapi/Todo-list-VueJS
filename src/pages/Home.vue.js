export default {
  name: "Home",
  data() {
    return {
      newTask: '',
      idTask: 3,
      tasks: [
        {
          id: 1,
          title: 'Learn VueJS',
          completed: false
        },
        {
          id: 2,
          title: 'Learn Angular 2+',
          completed: true
        }
      ]
    }
  },
  methods: {
    addTask() {
      if(this.newTask.trim().length == 0) {
        return
      }
      this.tasks.push({
        id: this.idTask,
        title: this.newTask,
        completed: false
      })
      this.newTask = ''
      this.idTask++
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
    }
  },
  computed: {
    isDisabled() {
    if(this.newTask != '')
			return true;
    }
  }
}
