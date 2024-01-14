<template>
	<ul>
		<li v-for="(book, i) in store.books" :key="i">
			{{ book.title }}
		</li>
	</ul>
</template>

<script setup>
	import { onMounted, watchEffect } from 'vue';
	import { useAsync } from '@/composables/useAsync';
	import { useBookStore } from '@/stores/book'

	const store = useBookStore()
	const { makeRequest, results, error } = useAsync();

	onMounted(async () => {
		await makeRequest('/api/getAllBooks');
		store.setBooks(results.value)
	})

	watchEffect(() => {
		if (error.value) console.error('Problem found: ' + error.value.message);
	});
</script>
