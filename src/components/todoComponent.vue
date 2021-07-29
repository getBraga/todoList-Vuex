<template>
  <div>
    <div id="myDIV" class="header">
      <h2>My To Do List</h2>
      <input
        type="text"
        id="myInput"
        placeholder="Title..."
        v-model="changeTodo"
      />
      <span class="addBtn" @click="addTodo">Add</span>
    </div>

    <ul id="myUL">
      <li
        :class="todo.feito == true ? 'checked' : ''"
        v-for="(todo, id) in todos"
        :key="id"
      >
        <p
          :class="todo.feito == true ? 'pchecked' : ''"
          @click="isFinish(todo)"
        >
          {{ todo.titulo }}
        </p>

        <span>
          <button @click="deleteTodo(todo.id)">X</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["newTodo", "addTodo", "todos", "create", "deleteTodo", "isFinish"],
  data() {
    return {
      changeTodo: this.newTodo,
    };
  },
  watch: {
    changeTodo() {
      this.$emit("update:newTodo", this.changeTodo);
    },
    create() {
      this.changeTodo = "";
    },
  },
};
</script>

<style scoped>
/* Include the padding and border in an element's total width and height */
* {
  box-sizing: border-box;
}

/* Remove margins and padding from the list */
ul {
  margin: 0;
  padding: 0;
  max-width: 960px;
  margin: 0 auto;
}

/* Style the list items */
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;
  display: flex;
  flex-wrap: wrap;
  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
ul li p {
  flex: 1;
}

ul li span:hover {
  transform: scale(1.2);
}
/* Set all odd list items to a different color (zebra-stripes) */
ul li:nth-child(odd) {
  background: #f9f9f9;
}

/* Darker background-color on hover */
ul li:hover {
  background: #ddd;
}

/* When clicked on, add a background color and strike out text */
ul li.checked {
  background: #888;
  color: #fff;
}
ul li p.pchecked {
  text-decoration: line-through;
}

/* Add a "checked" mark when clicked on */
ul li.checked::before {
  content: "";
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

.check-box:hover {
  cursor: pointer;
}
/* Style the close button */
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}

/* Style the header */
.header {
  background-color: #f44336;
  max-width: 960px;
  margin: 0 auto;
  margin-top: 60px;
  padding: 30px 40px;
  color: white;
  text-align: center;
}

/* Clear floats after the header */
.header:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the input */
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

/* Style the "Add" button */
.addBtn {
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.addBtn:hover {
  background-color: #bbb;
}
</style>
