<script lang="ts" setup>
import Data from './API.ts';
const title = 'titulo';
import { reactive, computed } from 'vue';
const getData = computed(() => {
  console.log('funciona');
});
const Computed = computed(() => {});
//console.log(Data.value[0]);
</script>

<template>
  <div>
    <div
      v-for="item in Data.value[0]"
      class="hidden duration-700 ease-in-out"
      data-carousel-item="active"
    >
      <h3>{{ item.title }}</h3>
    </div>
    <button
      type="button"
      @click="getData"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Default
    </button>
  </div>
</template>
