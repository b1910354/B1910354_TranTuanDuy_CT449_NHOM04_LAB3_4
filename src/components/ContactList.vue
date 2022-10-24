<script>
export default {
  props: {
    contacts: { type: Array, default: [] },
    activeIndex1: { type: Number, default: -1 },
  },
  emits: ["update:activeIndex1"],
  methods: {
    updateActiveIndex1(index) {
      this.$emit("update:activeIndex1", index);
    },
  },
};
</script>
<template>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="(contact, index) in contacts"
      :key="contact._id"
      :class="{ active: index === activeIndex1 }"
      @click="updateActiveIndex1(index)"
    >
    {{ contact.name }}
    </li>
  </ul>
</template>
