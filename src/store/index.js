import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bestProducts: [],
    products: [],
    product: [],
    pesan: {},
    keranjang: []
  },
  mutations: {
    setBestProducts (state, data) {
      state.bestProducts = data;
    },
    setProducts (state, data) {
      state.products = data;
    },
    setProduct (state, data) {
      state.product = data;
    },
    setKeranjang (state, data) {
      state.keranjang = data;
    }
  },
  actions: {
    async getBestProducts({commit}) {
      try {
        let response = await axios.get('http://localhost:3000/best-products');
        commit('setBestProducts', response.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getProducts({commit}) {
      try {
        let response = await axios.get('http://localhost:3000/products');
        commit('setProducts', response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async searchFood ({commit}, keyword) {
      try {
        let response = await axios.get('http://localhost:3000/products?q=' + keyword);
        commit('setProducts', response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async setPemesanan(store, data) {
     try {
          if (data.jumlah_pemesanan) {
            await axios.post('http://localhost:3000/keranjangs', data)
            Vue.toasted.success('Pesanan masuk keranjang', {position: 'top-right', duration: 1500});
            router.push( {path: '/keranjang'} );
          } else {
            Vue.toasted.error('Jumlah pemesanan harus diisi!', {position: 'top-right', duration: 1500});
          }
     } catch (error) {
          console.error(error);
     }
    },
    async getProductById({commit}, productId) {
      try {
          let response = await axios.get('http://localhost:3000/products/' + productId);
          commit('setProduct', response.data);
          router.push({ path: `/foods/${productId}` });
      } catch (error) {
          console.error(error);
      }
    },
    async getKeranjang({commit}) {
      try {
          let response = await axios.get('http://localhost:3000/keranjangs');
          commit('setKeranjang', response.data);
      } catch (error) {
          console.error(error);
      }
    },
    async deleteKeranjang({dispatch}, productId) {
      try {
          await axios.delete('http://localhost:3000/keranjangs/' + productId);
          Vue.toasted.success('Keranjang berhasil dihapus', {position: 'top-right', duration: 1500});
          dispatch('getKeranjang')
      } catch (error) {
          console.error(error);
      }
    },
    async deleteAllKeranjang({state, dispatch}) {
      try {
          state.keranjang.map(item => {
            axios.delete('http://localhost:3000/keranjangs/' + item.id)
            dispatch('getKeranjang')
            .catch(error => console.error(error));
          })
      } catch (error) {
          console.error(error);
      }
    },
    async setCheckout({dispatch}, data) {
      try {
           if (data.nama && data.no_meja) {
             await axios.post('http://localhost:3000/pesanans', data).then(() => {
               dispatch('deleteAllKeranjang')
               Vue.toasted.success('Sukses dipesan!', {position: 'top-right', duration: 1500});
               router.push( {path: '/pesanan-sukses'} );
             })
           } else {
             Vue.toasted.error('Nama pemesan dan no meja harus diisi!', {position: 'top-right', duration: 1500});
           }
      } catch (error) {
           console.error(error);
      }
     },
  }
})
