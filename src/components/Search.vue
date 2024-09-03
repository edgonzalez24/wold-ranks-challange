<script setup lang="ts">
  import { Input } from '@/components/ui/input';
  defineProps<{
    id: string;
    placeholder: string;
  }>();
</script>
<template>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
      <img src="./../assets/images/search.svg" alt="search" class="w-7 h-7" />
    </div>
    <Input
      :id=id
      :placeholder=placeholder
      autocomplete="off"
      class="w-full block pl-10 text-gray-200 placeholder:text-gray-200 border-0 bg-dark-100 rounded-lg py-2 transition duration-300 ease-in-out text-sm h-10"
    />
  </div>
</template>