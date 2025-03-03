<template>
  <div class="number">
    {{ number }}
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  props: {
    number: {
      type: Number,
      required: true,
    }
  }
})
</script>

<style lang="scss">
 .number {
   font-size: 12px;
   background: $white;
   color: $black;
   min-width: 18px;
   height: 18px;
   border-radius: 50%;
   display: flex;
   text-align: center;
   align-items: center;
   justify-content: center;
   font-weight: 700;
 }
</style>