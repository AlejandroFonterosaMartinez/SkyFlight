<template>
    <nav>
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button type="button"
                        class="relative inline-flex items-center justify-center rounded-md p-2  text-blue-600 bg-white   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu" aria-expanded="false">
                        <span class="absolute -inset-0.5"></span>
                        <span class="sr-only">Open main menu</span>

                        <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <router-link to="/Home"
                            class="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase text-white bg-blue-600 rounded-xl py-3 px-2">
                            SkyFlights
                        </router-link>
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">

                            <a href="#"
                                class="block  px-3 py-2 text-base font-medium text-blue-600 bg-white rounded-2xl  ">
                                <v-icon class="text-blue-600">mdi-bag-suitcase</v-icon> My bookings</a>
                            <a href="#"
                                class="block  px-3 py-2 text-base font-medium text-blue-600 bg-white rounded-2xl  ">
                                <v-icon class="text-blue-600">mdi-help</v-icon> ¿Need help?</a>
                            <router-link to="/Vuelos"
                                class="block  px-3 py-2 text-base font-medium text-blue-600 bg-white rounded-2xl  ">
                                <v-icon class="text-blue-600">mdi-airplane-landing</v-icon> Flights</router-link>
                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                    <!-- tema -->
                    <div class="relative ml-3">
                        <div>
                            <button type="button" @click="cambiarTema"
                                class="relative rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 text-blue-600 bg-white"
                                >
                                <span class="absolute -inset-1.5"></span>
                                <v-icon  class="text-blue-600"
                                    v-if="!isDarkTheme">
                                    mdi-weather-sunny
                                </v-icon>
                                <v-icon class="text-blue-600" v-else>
                                    mdi-weather-night
                                </v-icon>
                            </button>
                        </div>
                    </div>

                    <!-- Noti-->
                    <button type="button"
                        class="relative rounded-full bg-white ml-3  p-1 text-blue-600  focus:outline-none focus:ring-2  focus:ring-offset-2 ">
                        <span class="absolute -inset-1.5"></span>
                        <span class="sr-only">View notifications</span>
                        <svg class="h-6 w-6 text-blue-600 " fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    </button>

                    <!-- Perfil -->
                    <div class="relative ml-3">
                        <div>
                            <button type="button"
                                class="relative rounded-full bg-white  p-1 text-blue-600  focus:outline-none focus:ring-2  focus:ring-offset-2 ">
                                <span class="absolute -inset-1.5"></span>
                                <span class="sr-only">Open user menu</span>
                                <v-icon class="text-blue-600">mdi-account</v-icon>
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>

        <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2">

                <a href="#" class="block  px-3 py-2 text-base font-medium text-blue-600 bg-white rounded-2xl  "> <v-icon
                        class="text-blue-600">mdi-bag-suitcase</v-icon> My bookings</a>
                <a href="#" class="block  px-3 py-2 text-base font-medium text-blue-600 bg-white rounded-2xl  "> <v-icon
                        class="text-blue-600">mdi-help</v-icon> ¿Need help?</a>

            </div>
        </div>
    </nav>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import { VIcon } from 'vuetify/components';

export default {
    components: {
        VIcon,
    },
    computed: {
        ...mapGetters(['isDarkTheme']),
    },
    methods: {
        ...mapActions(['cambiarTema']),
        applyTheme() {
            if (this.isDarkTheme) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
        },
    },
    watch: {
        isDarkTheme(newVal) {
            this.applyTheme();
        },
    },
    mounted() {
        this.applyTheme();
    },
};
</script>
