import { ref } from "vue";
import { defineStore } from "pinia";

export const useBookStore = defineStore("bookStore", () => {
  const books = ref([]);

  function setBooks(payload) {
    books.value = payload
  }

  return { books, setBooks };
});
