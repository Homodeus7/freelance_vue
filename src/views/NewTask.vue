<template>
  <form class="card" @submit.prevent="submit">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="task.title" />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="task.date" />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="task.description"></textarea>
    </div>

    <button class="btn primary">Создать</button>
  </form>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    const task = reactive({
      title: '',
      date: '',
      description: '',
      status: 'active',
    })

    const submit = () => {
      store.dispatch('submitTasks', task)
      router.push('/')
    }

    return {
      task,
      submit,
    }
  },
}
</script>
