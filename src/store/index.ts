import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
    activities: [
      { id: 1, type: "comment", description: "John commented on a task", time: "2 hours ago", icon: "💬" },
      { id: 2, type: "upload", description: "Anna uploaded a file", time: "5 hours ago", icon: "📁" },
      { id: 3, type: "update", description: "Project settings updated", time: "1 day ago", icon: "⚙️" },
      { id: 4, type: "task", description: "New task assigned to you", time: "2 days ago", icon: "✅" },
      { id: 5, type: "meeting", description: "Meeting scheduled with the client", time: "3 days ago", icon: "📅" },
    ],
    people: [
      { name: "John Doe", role: "Software Engineer", image: "/p_1.png" },
      { name: "Jane Smith", role: "Product Manager", image: "/p_2.png" },
      { name: "Emily Adams", role: "UX Designer", image: "/p_1.png" },
      { name: "Michael Brown", role: "Data Scientist", image: "/p_2.png" },
    ],
    books: [
      { title: "The Pragmatic Programmer", author: "Andrew Hunt", cover: "/b_5.png" },
      { title: "Clean Code", author: "Robert C. Martin", cover: "/b_4.png" },
      { title: "JavaScript: The Good Parts", author: "Douglas Crockford", cover: "/b_3.png" },
      { title: "You Don't Know JS", author: "Kyle Simpson", cover: "/b_2.png" },
      { title: "Eloquent JavaScript", author: "Marijn Haverbeke", cover: "/b_1.png" },
    ],
  },
  mutations: {
    increment (state: State) {
      state.count++
    }
  }
})

export function useStore () {
  return baseUseStore(key)
}