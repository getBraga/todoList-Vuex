<template>
  <div>
    <todoComponent
      :addTodo="addTodo"
      :todos="todo"
      :newTodo.sync="newTodo"
      :create="create"
      :deleteTodo="deleteTodo"
      :isFinish="isFinish"
    />
  </div>
</template>

<script>
import todoComponent from "../components/todoComponent.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    todoComponent,
  },
  computed: {
    ...mapState(["todo"]),
  },
  data() {
    return {
      newTodo: "",
      create: false,
      finish: false,
    };
  },
  methods: {
    ...mapActions([
      "changeMutation",
      "addTodoList",
      "deleteTodoList",
      "updateTodoList",
    ]),

    // Add the task List
    async addTodo() {
      try {
        this.finish = !this.finish;
        this.create = true;
        await this.addTodoList(this.newTodo);
        await this.changeMutation();
        setTimeout(() => {
          this.create = false;
        }, 100);
      } catch (error) {
        console.log(error.response);
      }
    },

    // delete the task list
    async deleteTodo(todo) {
      try {
        await this.deleteTodoList(todo);
        await this.changeMutation();
      } catch (error) {
        console.log("Error", error.response);
      }
    },
    // make the change to finalised
    async isFinish(todo) {
      try {
        await this.updateTodoList(todo);
        await this.changeMutation();
      } catch (error) {
        console.log("error:", error.response);
      }
    },
  },
  async created() {
    // Reload task list information
    await this.changeMutation();
  },
};
</script>

<style></style>
