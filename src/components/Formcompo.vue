<template>
    <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
    ></v-select>
</template>

<script>
  export default {
   name: 'Formcompo',
   data: () => ({
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
    }),
  }
</script>