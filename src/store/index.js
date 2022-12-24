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
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    addTasks(state, task) {
      state.tasks.push(task)
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
    async subTasks(_, task) {
      await axios.post(
        'https://freelance-c308a-default-rtdb.firebaseio.com/tasks.json',
        task
      )
    },
  },
})

export { store }