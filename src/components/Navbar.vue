<template>
   <nav class="container mx-auto mt-4">
       <div class="flex items-center justify-between">
           <div class="text-black font-semibold">
               KulinerYuk
           </div>

           <div>
               <ul class="flex">
                   <li class="px-4 py-5">
                       <router-link to="/">Home</router-link>
                   </li>
                   <li class="px-4 py-5">
                       <router-link to="/foods">Foods</router-link>
                   </li>
                   <li class="px-4 py-5">
                       <router-link to="/keranjang">Keranjang</router-link>
                       <span class="bg-yellow-200 rounded-md mx-1 px-1.5">{{keranjang? keranjang.length : 0}}</span>
                   </li>
               </ul>
           </div>
       </div>
   </nav>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
    name: 'Navbar',
    data: () => ({
        jumlah_pesanan: []
    }),
    computed: {
        ...mapState(['keranjang'])
    },
    methods: {
        setJumlah (data) {
            this.jumlah_pesanan = data;
        }
    },
    mounted() {
        axios.get('http://localhost:3000/keranjangs')
        .then(response => this.setJumlah(response.data))
        .catch(error => console.error(error));
    } 
}
</script>