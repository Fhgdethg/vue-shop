<template>
  <button class="btn" @click="emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (event: 'click'): void;
}>();
</script>

<style lang="scss" scoped>
.btn {
  background: $darkBlue;
  color: $white;
  font-weight: 700;
  display: block;
  font-size: 18px;
  padding: 6px;
  border-radius: 20px;
  transition: 0.3s;
  width: 100%;
  cursor: pointer;
  border: 2px solid $darkBlue;

  &:hover {
    background: inherit;
    color: $darkBlue;
  }
}
</style>
