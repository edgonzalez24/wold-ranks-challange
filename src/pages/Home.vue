<script setup lang="ts">
  import Filters from '@/components/Filters.vue';
  import Search from '@/components/Search.vue';
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from '@/components/ui/table'
  import { useStore } from '@/store';
  import { onMounted } from 'vue';
  import { storeToRefs } from 'pinia';

  const store = useStore();
  const { countries, loading } = storeToRefs(store);


  onMounted(async() => {
    await store.getCountries('all');
  });
</script>
<template>
  <div class="max-w-7xl mx-auto -mt-16 min-h-screen rounded-lg p-6 bg-dark-200 relative">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <h5 class="text-base text-gray-200 font-semibold">
        Founds 250 countries
      </h5>
      <div class="w-80">
        <Search id="search" placeholder="Search by Name, Region, Subregion" />
      </div>
    </div>
    <!-- Content -->
    <div class="flex flex-row space-x-10 mt-10">
      <div class="w-1/4">
        <Filters />
      </div>
      <div class="w-3/4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-[100px]">
                Flag
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Population</TableHead>
              <TableHead>Area (km²)</TableHead>
              <TableHead class="text-center">
                Region
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-if="!loading" v-for="country in countries" :key="country.name.common">
              <TableCell>
                <div class="text-3xl">
                  {{ country.flag }}
                </div>
              </TableCell>
              <TableCell class="text-white text-lg">{{ country.name.common }}</TableCell>
              <TableCell class="text-white text-lg">{{ country.population }}</TableCell>
              <TableCell class="text-white text-lg">{{ country.area }}</TableCell>
              <TableCell class="text-center text-white text-lg">{{ country.region }}</TableCell>
            </TableRow>
            <TableRow v-else="loading" class="animate-pulse" v-for="(_, index) in new Array(5)" :key="index">
              <TableCell>
                <div class="rounded-sm bg-gray-200 h-8 w-12"></div>
              </TableCell>
              <TableCell>
                <div class="h-3 w-32 bg-gray-200 rounded-full"></div>
              </TableCell>
              <TableCell>
                <div class="h-3 w-32 bg-gray-200 rounded-full"></div>
              </TableCell>
              <TableCell>
                <div class="h-3 w-32 bg-gray-200 rounded-full"></div>
              </TableCell>
              <TableCell>
                <div class="h-3 w-32 bg-gray-200 rounded-full"></div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  </div>
</template>