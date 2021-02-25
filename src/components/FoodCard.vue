<template>
    <section>
        <div class="bg-gray-100 w-80 h-80 rounded-lg overflow-hidden shadow my-4">
            <img class="w-full h-52" :src="'assets/images/' + product.gambar" alt="Product Image">
            <div class="flex flex-col justify-center items-center mt-4">
                <div><span>{{product.nama}}</span></div>
                <div><span>Harga : Rp. {{product.harga}}</span></div>
                <div class="my-2">
                    <button @click="getProductById(product.id)" class="rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wide text-white bg-green-400 w-24">Pesan</button></div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'FoodCard',
    props: ['product'],
    methods: {
        ...mapActions(['getProductById'])
    }
}
</script>