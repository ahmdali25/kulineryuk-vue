<template>
  <section>
    <div class="container mx-auto my-12">
      <div class="flex mx-32">
        <div class="text-2xl">
          <h2>Daftar <strong>Makanan</strong></h2>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-center items-center">
       <label class="text-xl font-bold mb-8" for="cari_makanan">Cari Makanan</label>
       <input v-model="search" @keyup="searchFood(search)" class="border-2 rounded-md outline-none w-72 text-center" type="text" placeholder="Cari makanan kesukaan anda">
    </div>

     <div class="flex justify-around my-8">
      <div class="grid grid-cols-3 gap-x-8 mx-32">
        <div v-for="product in products" :key="product.id">
          <food-card :product="product"></food-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FoodCard from '../components/FoodCard.vue'
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Foods',
  components: {
    FoodCard
  },
  data: () => ({
    search: ''
  }),
  computed: {
    ...mapState(['products'])
  },
  methods: {
    ...mapActions(['getProducts', 'searchFood'])
  },
  async mounted() {
    if (this.search) {
      await this.searchFood();
    } else {
      await this.getProducts();
    }
  }
}
</script>
