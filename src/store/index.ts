import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0
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