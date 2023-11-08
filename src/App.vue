<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-xl shadow-md w-96">
      <input
        v-model="name"
        placeholder="Your name"
        class="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 transition"
      />
      <p class="mt-4 text-xl font-semibold text-gray-700">
        Greetings, {{ name }}!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const name = ref("traveler");
</script>
