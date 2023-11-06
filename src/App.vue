<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <!-- Language switcher dropdown -->
    <div class="mb-4">
      <select v-model="selectedLanguage" @change="changeLanguage" class="bg-white border border-gray-300 rounded p-2 shadow leading-tight focus:outline-none focus:ring focus:border-blue-300">
        <option value="en">English</option>
        <option value="hu">Magyar</option>
        <option value="de">Deutsch</option>
      </select>
    </div>

    <div class="bg-white p-8 rounded-xl shadow-md w-96">
      <input
          v-model="name"
          :placeholder="$t('placeholder')"
          class="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 transition"
      />
      <p class="mt-4 text-xl font-semibold text-gray-700">
        {{ $t('greeting', { name }) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const name = ref('traveler');
const selectedLanguage = ref(locale.value);

function changeLanguage() {
  locale.value = selectedLanguage.value;
}
</script>
