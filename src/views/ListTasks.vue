<template>
  <h1 class="text-white center" v-if="tasks.length === 0">Задач пока нет</h1>
  <div v-else>
    <h3 class="text-white">Всего активных задач: {{ tasks.length }}</h3>
    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="'task.status'" />
      </h2>
      <p>
        <strong>
          <small>
            {{ task.date }}
          </small>
        </strong>
      </p>
      <button class="btn primary">Посмотреть</button>
    </div>
  </div>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'

export default {
  setup() {
    const store = useStore()

    onMounted(() => {
      console.log('mount')
      store.dispatch('getTasks')
    })

    const tasks = computed(() => store.getters.tasks)
    return { tasks }
  },
  components: { AppStatus },
}
</script>
