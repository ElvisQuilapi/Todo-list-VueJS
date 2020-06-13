<template>
  <div>
    <main :class="$style.container">
      <section :class="$style.headerAddTask">
        <input type="text" v-model="newTask" placeholder="What needs to be done?" @keyup.enter="addTask">
        <button @click="addTask" :disabled="!isDisabled">
          <font-awesome-icon icon="plus"/> 
          Add
        </button>
      </section>
      <section :class="$style.blockTasks">
        <header>
          <h3>Todo List</h3>
        </header>
        <article :class="$style.noneTasks" v-if="tasks.length == 0">
          <h4>There are no tasks.</h4>
        </article>
        <article :class="$style.listTasks"
          v-for="(task, index) in tasks" :key="task.id">
          <div :class="[$style.taskOnly]">
            <div :class="$style.taskCheckbox">
              <input type="checkbox" v-model="task.completed">
              <p :class="{ [$style.completedTask]: task.completed }">{{ task.title }}</p>
            </div>
            <button @click="removeTask(index)"><font-awesome-icon icon="trash" /></button>
          </div>
        </article>
      </section>
     </main>
  </div>
</template>

<script lang="js" src="@/pages/Home.vue.js"></script>
<style lang="scss" scoped module src="@/pages/Home.scss"></style>