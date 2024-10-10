<script setup lang="ts">
import PeopleIcon from '@/components/icons/PeopleIcon.vue'
import ActivityIcon from '@/components/icons/ActivityIcon.vue'
import NavLink from '@/components/layout/NavLink.vue'
import SettingIcon from '@/components/icons/SettingIcon.vue'
import BulbIcon from '@/components/icons/BulbIcon.vue'
import LibraryIcon from '@/components/icons/LibraryIcon.vue'
import ReportIcon from '@/components/icons/ReportIcon.vue'
</script>

<template>
  <nav class="navigation">
    <NavLink to="/">
      <ReportIcon class="icon" />
      <span>Reports</span>
    </NavLink>
    <NavLink to="/library">
      <LibraryIcon class="icon" />
      Library
    </NavLink>
    <NavLink to="/people">
      <PeopleIcon class="icon" />
      People
    </NavLink>
    <NavLink to="/activities">
      <ActivityIcon class="icon" />
      Activities
    </NavLink>

    <h4>Support</h4>

    <NavLink to="/get-started">
      <BulbIcon class="icon" />
      <span>Get Started</span>
    </NavLink>
    <NavLink to="/settings">
      <SettingIcon class="icon" />
      Settings
    </NavLink>
  </nav>
</template>

<style scoped>
.navigation {
  flex: 1;
  margin-top: 32px;
  border-bottom: 1px solid #9ca3af;
}

.icon {
  margin-right: 12px;
}

.navigation h4 {
  font-size: 14px;
  margin-top: 48px;
  margin-bottom: 12px;
  margin-left: 12px;
  font-weight: 600;
  color: #4D4D4D;;
}

</style>