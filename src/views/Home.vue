<template>
  <div class="container mx-auto">
    <Hero/>

    <div class="flex justify-between mx-32">
      <div class="text-xl">
        <h2>Popular <strong>Foods</strong></h2>
      </div>
      <div>
        <router-link to="/foods" class="rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wide text-white bg-green-400">Lihat semua</router-link>
      </div>
    </div>

    <div class="flex justify-around mt-8">
      <div class="grid grid-cols-3 gap-x-8 mx-32">
        <div v-for="product in bestProducts" :key="product.id">
          <food-card :product="product"></food-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import FoodCard from '../components/FoodCard.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Hero,
    FoodCard
  },
  computed: {
    ...mapState(['bestProducts'])
  },
  methods: {
    ...mapActions(['getBestProducts'])
  },
  async mounted() {
    this.getBestProducts();
  }
}
</script>
