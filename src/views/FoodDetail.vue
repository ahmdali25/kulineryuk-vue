<template>
    <section>
        <div class="flex my-4 mx-32">
            <ul class="flex gap-1">
                <li>
                    <router-link to="/">Home /</router-link>
                </li>
                <li>
                    <router-link to="/foods">Foods / </router-link>
                </li>
                <li class="font-semibold">Food Order</li>
            </ul>
        </div>

        <div class="flex flex-row mx-32">
            <div>
                <img class="rounded-lg w-auto h-72" :src="'../assets/images/' + product.gambar" alt="">
            </div>
            <div class="ml-8">
                <h2 class="text-xl font-bold">{{product.nama}}</h2>
                <hr>
                <h4 class="my-2">Harga : <strong>Rp. {{product.harga}}</strong></h4>

                <form>
                    <div class="flex flex-col">
                        <label class="my-1" for="jumlah_pemesanan">Jumlah Pesan</label>
                        <input class="rounded border-2" type="number" v-model="pesan.jumlah_pemesanan">
                    </div>
                    <div class="flex flex-col my-4">
                        <label class="my-1" for="keterangan">Keterangan</label>
                        <textarea class="rounded border-2" cols="23" rows="2" placeholder="Keterangan (contoh : pedas , nasi double)" v-model="pesan.keterangan"></textarea>
                    </div>

                    <div class="my-2">
                        <button type="submit" class="rounded-lg py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wide text-white bg-green-400 w-24" @click="handlePesan">Pesan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'FoodDetail',
    data: () => ({
        pesan: {
            jumlah_pemesanan : '',
            keterangan : ''
        }
    }),
    computed: {
        ...mapState(['product'])
    },
    methods: {
        handlePesan() {
            this.pesan.products = this.product
            this.$store.dispatch('setPemesanan', this.pesan);
        }
    }  
}
</script>