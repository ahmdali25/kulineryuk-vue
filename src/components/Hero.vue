<template>
    <section class="grid grid-cols-2 mt-20 mb-40">
        <div class="flex justify-center self-center">
            <div class="flex flex-col">
                <div class="text-4xl">
                    <h2 class="leading-relaxed"><strong>Berbagai kuliner lezat,</strong> <br> Ada Dalam Genggaman Anda</h2>
                </div>
                <div class="py-4 text-lg">
                    <p>Ayo segera pilih dan pesan makanan favorit Anda</p>
                </div>
                <div class="my-4">
                    <router-link to="/foods" class="rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wide text-white bg-green-400">Pesan Sekarang</router-link>
                </div>
            </div>
        </div>
        <div class="w-10/12">
            <img src="../assets/images/hero.png" alt="Hero">
        </div>
    </section>
</template>