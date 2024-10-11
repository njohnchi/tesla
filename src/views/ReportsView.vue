<script setup lang="ts">
import PageHeader from '@/components/layout/PageHeader.vue'
import Dropdown from '@/components/Dropdown.vue'
import ReportHighlights from '@/components/ReportHighlights.vue'
import ActivityReport from '@/components/ActivityReport.vue'
import WeakestTopic from '@/components/WeakestTopic.vue'
import StrongestTopic from '@/components/StrongestTopic.vue'
import UserLeaderboard from '@/components/UserLeaderboard.vue'
import GroupsLeaderboard from '@/components/GroupsLeaderboard.vue'
</script>

<template>
  <PageHeader title="Reports." />

  <main>
    <div class="filters">
      <Dropdown />
      <Dropdown />
      <Dropdown />
    </div>

    <div class="report-grid">
      <ReportHighlights />
      <ActivityReport />
      <WeakestTopic />
      <StrongestTopic />
      <UserLeaderboard />
      <GroupsLeaderboard />
    </div>
  </main>
</template>

<style scoped>
.filters {
  display: flex;
  gap: 1rem;
}

.report-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}
</style>