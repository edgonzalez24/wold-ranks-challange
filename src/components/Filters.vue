<script setup lang="ts">
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue 
  } from '@/components/ui/select';
  import { reactive, ref } from 'vue';
  import { Checkbox } from '@/components/ui/checkbox';

  const selectedRegion = ref<string[]>([]);

  const regionsList: RegionItem[] = reactive([
    { name: 'Americas', value: 'americas' },
    { name: 'Antarctic', value: 'antarctic' },
    { name: 'Africa', value: 'africa' },
    { name: 'Asia', value: 'asia' },
    { name: 'Europe', value: 'europe' },
    { name: 'Oceania', value: 'oceania' }
  ]);

  const statusList: StatusItem[] = reactive([
    { label: 'Member of the United Nations', value: '1' },
    { label: 'Independient', value: '2' },
  ]);

  const handleRegionClick = (region: string) => {
    if(selectedRegion.value.includes(region)) {
      selectedRegion.value = selectedRegion.value.filter(item => item !== region);
    } else {
      selectedRegion.value = [...selectedRegion.value, region];
    }
  }


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
        <div 
          v-for="(region, index) in regionsList"
          class="inline-block px-4 py-2 transition duration-300 ease-in-out hover:text-gray-100 hover:bg-dark-100 rounded-xl cursor-pointer mr-2 mt-2"
          :key="index"
          :class="selectedRegion.includes(region.value) ? 'bg-dark-100 text-gray-100' : 'text-gray-200'"
          @click="handleRegionClick(region.value)"
        >
          {{ region.name }}
        </div>
      </div>
    </div>
    <!-- Status -->
    <div>
      <label class="text-sm text-gray-200 font-semibold">Status</label>
      <div class="w-full relative block mt-3">
        <div 
          v-for="(status, index) in statusList"
          :key="index"
          class="flex items-center flex-row space-x-4 mt-3"
        >
          <Checkbox :id="status.value" :value="status.value" class="h-6 w-6 border-[1.5px]" />
          <label :for="status.value" class="ml-2 text-sm text-gray-200 font-semibold cursor-pointer">{{ status.label }}</label>
        </div>
      </div>
    </div>
  </div>
</template>