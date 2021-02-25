<template>
    <section>
        <div class="container mx-16">
            <table class="table-fixed mt-10 border-2">
                <thead>
                    <tr class="border-b-2">
                        <th class="w-40">#</th>
                        <th class="w-32">Gambar</th>
                        <th class="w-40">Makanan</th>
                        <th class="w-32">Keterangan</th>
                        <th class="w-32">Jumlah</th>
                        <th class="w-32">Harga</th>
                        <th class="w-32">Total</th>
                        <th class="w-32">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b-2 h-32" v-for="(product, index) in keranjang" :key="product.id">
                        <th class="w-32">{{ index+1 }}</th>
                        <td class="w-40">
                            <img :src="'../assets/images/' + product.products.gambar" class="rounded-lg" alt="">
                        </td>
                        <td class="w-56 text-center">{{product.products.nama}}</td>
                        <td class="w-32 text-center">{{product.keterangan}}</td>
                        <td class="w-32 text-center">{{product.jumlah_pemesanan}}</td>
                        <td class="w-32 text-center">Rp. {{product.products.harga}}</td>
                        <td class="w-32 text-center">Rp. {{product.products.harga * product.jumlah_pemesanan}}</td>
                        <td class="text-center">
                            <button @click="deleteKeranjang(product.id)" class="rounded-xl py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wide text-white bg-green-400 w-auto">Hapus</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="flex flex-row mt-2 mr-64 justify-end">
                <p><strong>Total Harga : Rp. {{totalHarga}}</strong></p>
            </div>

            <div class="flex flex-row mr-36 justify-end">
                <form>
                    <div class="flex flex-col">
                        <label class="mt-4" for="nama_pemesan">Nama Pemesan</label>
                        <input v-model="pesan.nama" class="rounded border-2" type="text">
                    </div>
                    <div class="flex flex-col my-4">
                        <label class="my-1" for="no_meja">No Meja</label>
                        <input v-model="pesan.no_meja" class="rounded border-2" type="text">
                    </div>

                    <div class="my-2">
                        <button @click="handleCheckout" type="submit" class="rounded-lg py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wide text-white bg-green-400 w-24">Checkout
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    name: 'Keranjang',
    data: () => ({
        pesan: {
            nama: '',
            no_meja: ''
        }
    }),
    computed: {
        ...mapState(['keranjang']),
        totalHarga() {
           const keranjangLength = this.keranjang.reduce((a, b) => a + Object.keys(b).length, 0);
           if (keranjangLength >= 2) {
                return this.keranjang.reduce(function (items, data) {
                return items + (data.products.harga * data.jumlah_pemesanan);
            }, 0)
           } else if (keranjangLength == 1) {
               return parseInt(this.keranjang.harga * this.keranjang.jumlah_pemesanan)
           } else {
               return 0;
           }
        }
    },
    methods: {
        ...mapActions(['getKeranjang', 'deleteKeranjang']),
        handleCheckout() {
            this.pesan.keranjang = this.keranjang;
            this.$store.dispatch('setCheckout', this.pesan);
        }
    },
    async mounted() {
        await this.getKeranjang();
    }
}
</script>