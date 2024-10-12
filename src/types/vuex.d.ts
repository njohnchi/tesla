import { Store } from 'vuex'

declare module 'vue' {
  interface State {
    count: number
    activities: Array<{ id: number, type: string, description: string, time: string, icon: string }>
    people: Array<{ name: string, role: string, image: string }>
    books: Array<{ title: string, author: string, cover: string }>
    timeframeOptions: string[]
    peopleOptions: string[]
    topicOptions: string[]
    timeframeFilter: string
    peopleFilter: string
    topicFilter: string
    activityFilter: string
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}