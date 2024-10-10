import { createRouter, createWebHistory } from 'vue-router'
import ReportsView from '@/views/ReportsView.vue'
import PeopleView from '@/views/PeopleView.vue'
import LibraryView from '@/views/LibraryView.vue'
import ActivitiesView from '@/views/ActivitiesView.vue'
import GetStartedView from '@/views/GetStartedView.vue'
import SettingsView from '@/views/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'reports',
      component: ReportsView
    },
    {
      path: '/library',
      name: 'library',
      component: LibraryView
    },
    {
      path: '/people',
      name: 'people',
      component: PeopleView
    },
    {
      path: '/activities',
      name: 'activities',
      component: ActivitiesView
    },
    {
      path: '/get-started',
      name: 'get-started',
      component: GetStartedView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    },
  ]
})

export default router
