<template>
  <h1>Books</h1>
  <Suspense>
    <!-- component with nested async dependencies -->
    <Books />

    <!-- loading state via #fallback slot -->
    <template #fallback>
      Loading...
    </template>
  </Suspense>
  
</template>

<script setup>
  import Books from '@/components/Books.vue'
</script>
