<script setup lang="ts">
  import Filters from '@/components/Filters.vue';
  import Search from '@/components/Search.vue';
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad voluptate nihil blanditiis veniam obcaecati cum
        magnam, aut incidunt ea nostrum sint numquam libero quidem voluptas ipsam quod, possimus accusantium dolorum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deserunt minus dignissimos rem, ab eos
        temporibus placeat ratione. Mollitia rerum est consequatur impedit omnis veritatis possimus libero quis itaque
        natus. <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deserunt minus dignissimos rem, ab eos
        temporibus placeat ratione. Mollitia rerum est consequatur impedit omnis veritatis possimus libero quis itaque
        natus. <br>
      </div>
    </div>
  </div>
</template>