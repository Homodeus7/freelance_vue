import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      tasks: [],
    }
  },
  getters: {
    tasks(state) {
      return state.tasks
    },
    taskById(_, getters) {
      return (id) => getters.tasks.find((t) => t.id === id)
    },
    activeTasksCount(state) {
      return state.tasks.filter((t) => t.status === 'active').length
    },
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    setTask(state, task) {
      state.tasks = state.tasks.map((t) => (t.id === task.id ? (t = task) : t))
    },
  },
  actions: {
    async getTasks(context) {
      let { data } = await axios.get(
        'https://freelance-c308a-default-rtdb.firebaseio.com/tasks.json'
      )
      try {
        //console.log(data)
        let tasks
        if (data) {
          tasks = Object.keys(data).map((key) => {
            return {
              id: key,
              ...data[key],
            }
          })
          context.commit('setTasks', tasks)
        }
      } catch (err) {
        console.log(err)
      }
    },
    async submitTasks(context, task) {
      await axios.post(
        'https://freelance-c308a-default-rtdb.firebaseio.com/tasks.json',
        task
      )
      console.log('get')
      context.dispatch('getTasks')
    },
    async updateTask(context, task) {
      await axios.put(
        `https://freelance-c308a-default-rtdb.firebaseio.com/tasks/${task.id}.json`,
        { ...task }
      )
      context.dispatch('getTask', task.id)
    },
    async getTask(context, id) {
      const { data } = await axios.get(
        `https://freelance-c308a-default-rtdb.firebaseio.com/tasks/${id}.json`
      )
      context.commit('setTask', data)
      console.log(data)
    },
  },
})

export { store }
