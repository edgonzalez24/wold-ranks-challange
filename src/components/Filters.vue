<script setup lang="ts">
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue 
  } from '@/components/ui/select';
  import { reactive } from 'vue';

  const regionsList: RegionItem[] = reactive([
    { name: 'Americas', value: 'americas' },
    { name: 'Antarctic', value: 'antarctic' },
    { name: 'Africa', value: 'africa' },
    { name: 'Asia', value: 'asia' },
    { name: 'Europe', value: 'europe' },
    { name: 'Oceania', value: 'oceania' }
  ]);


</script>
<template>
  <div class="flex flex-col space-y-6">
    <!-- Sort -->
    <div>
      <label class="text-sm text-gray-200 font-semibold">Sort by</label>
      <Select>
        <SelectTrigger
          class="bg-transparent text-gray-100 border-gray-200 hover:border-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-0 focus:ring-offset-0 mt-3">
          <SelectValue placeholder="Select region" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">
              Apple
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <!-- Region -->
    <div>
      <label class="text-sm text-gray-200 font-semibold">Region</label>
      <div class="w-full relative block mt-3">
        <div v-for="(region, index) in regionsList"
          class="inline-block px-4 py-2 text-gray-200 transition duration-300 ease-in-out hover:text-gray-100 hover:bg-dark-100 rounded-xl cursor-pointer mr-2"
          :key="index">
          {{ region.name }}
        </div>
      </div>
    </div>
  </div>
</template>