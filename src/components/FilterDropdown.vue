<script setup lang="ts">
import { ref, watch } from 'vue'
import ArrowDownIcon from '@/components/icons/ArrowDownIcon.vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps<{
  options: string[]
  title: string
  modelValue: string | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const selectedOption = ref<string>(props.modelValue || '')
const isOpen = ref(false)
const target = ref(null)

onClickOutside(target, () => {
  isOpen.value = false
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: string) => {
  selectedOption.value = option
  isOpen.value = false
}

watch(
  () => selectedOption.value,
  (value) => {
    emit('update:modelValue', value)
  }
)
</script>

<template>
  <div ref="target" class="dropdown">
    <button class="dropdown-button" @click="toggleDropdown">
      <span>{{ title }}: </span>
      <span class="option">{{ selectedOption || 'Select an option' }}</span>
      <ArrowDownIcon class="icon" />
    </button>

    <ul v-if="isOpen" class="dropdown-menu">
      <li
        v-for="option in options"
        :key="option"
        @click="selectOption(option)"
        class="dropdown-item"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
}

.dropdown-button {
  background-color: white;
  border: 1px solid #eff0f6;
  border-radius: 18px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
}

.dropdown-button .option {
  margin-left: 4px;
  font-weight: 700;
  flex: 1;
}

.dropdown-button:hover {
  background-color: #1b59f81a;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #d1d5db;
  width: 100%;
  margin-top: 5px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  max-height: 250px;
  overflow-y: auto;
  z-index: 10;
}

.dropdown-item {
  padding: 10px;
  cursor: pointer;
  font-size: 14px;
}

.dropdown-item:hover {
  background-color: #1b59f81a;
}
</style>
