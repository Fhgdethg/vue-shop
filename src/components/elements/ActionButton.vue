<template>
  <div class="action" @click="emit('click')">
    <slot />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (event: 'click'): void;
}>();
</script>

<style lang="scss" scoped>
.action {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: $darkBlue;
  border: 2px solid $darkBlue;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  text-align: center;
  font-size: 24px;
  line-height: 35px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: $darkBlue;
    color: $white;
  }
}
</style>
