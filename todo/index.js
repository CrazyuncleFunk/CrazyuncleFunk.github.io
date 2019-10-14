new Vue({
  el: "#app",
  data: {
    todos: [
      { text: "Eat dinner", done: false },
      { text: "Cook dinner", done: true },
      { text: "Buy dinner", done: true }
    ],
    ticked:false
  },
  methods: {
  	toggle: function(todo){
    	todo.done = !todo.done;

    },
    newTodo:function(event){
    this.ind++
    this.todos.unshift({ text: event, done:false})
    },
    deleteTodo: function(ind){
    	this.todos.splice(ind,1)
    }
  }
})
