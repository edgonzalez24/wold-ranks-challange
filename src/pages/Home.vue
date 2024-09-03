<script setup lang="ts">
  import { Button } from '@/components/ui/button'
</script>
<template>
  <div class="max-w-7xl mx-auto -mt-16 min-h-screen rounded-lg p-6 bg-dark-200 relative">
    <div className="flex justify-between">
      <h5 className="text-base text-gray-200 font-semibold">
        Founds {countries.length} countries
      </h5>
      <div className="w-80">
        <h1>Home</h1>
      </div>
    </div>
    <Button>Click me</Button>
  </div>
</template>