<template>
    <div :class="['min-h-screen flex flex-col', { 'dark': isDarkTheme }]"
        class="transition-colors duration-700 ease-in-out">

        <!-- buscador -->
        <div class="transition-colors duration-700 ease-in-out"
            :class="['custom-bg', { 'custom-bg-dark': isDarkTheme }]">
            <NavbarComp></NavbarComp>
            <Buscador></Buscador>
        </div>

        <!-- ultimos vuelos -->
        <section id="last-flights"
            :class="['flex-1 py-20', { 'bg-white text-slate-700': !isDarkTheme, 'dark:bg-slate-800 dark:text-white': isDarkTheme }]">
            <div class="container mx-auto px-4">
                <h2
                    class="flex items-center justify-center text-4xl md:text-5xl font-extrabold mb-4 text-center text-blue-600 dark:text-blue-300">
                    Last Flights

                </h2>
                <Splide :options="{
                    perPage: 4,
                    autoplay: true,
                    interval: 3000,
                    pauseOnHover: false,
                    arrows: false,
                    pagination: false,
                    type: 'loop',
                    gap: '1.5rem',
                    breakpoints: {
                        1400: { perPage: 3 },
                        1024: { perPage: 2 },
                        768: { perPage: 1 },
                    },
                }" aria-label="Flight Carousel">
                    <SplideSlide v-for="flight in lastFlights" :key="flight.id">
                        <div
                            :class="['rounded-xl mb-4  shadow-lg overflow-hidden', { 'bg-white text-slate-700': !isDarkTheme, 'dark:bg-slate-700 dark:text-white': isDarkTheme }]">
                            <img :src="flight.image" :alt="flight.city"
                                class="w-full  object-cover transform transition-transform hover:scale-105 duration-500"
                                style="aspect-ratio: 16 / 9;" />
                            <div class="p-6 rounded-xl text-center">
                                <h3 class="text-xl font-semibold text-blue-600 dark:text-blue-300">{{ flight.city }}
                                </h3>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </section>

        <!-- Ofertas -->
        <section id="offers"
            :class="['flex-1 py-20', { 'bg-white text-slate-700': !isDarkTheme, 'dark:bg-slate-800 dark:text-white': isDarkTheme }]">
            <div class="container mx-auto px-4">
                <h2
                    class="flex items-center justify-center text-4xl md:text-5xl font-extrabold mb-4 text-center text-blue-600 dark:text-blue-300">
                    Special Offers
                    <!-- GIF del fuego al lado del texto -->
                    <img src="https://media.tenor.com/VUH3A7tK-qgAAAAi/dm4uz3-foekoe.gif" alt="Fire Icon"
                        class="w-8 h-8 md:w-10 md:h-10 ml-2 animate-bounce">

                </h2>

                <div>
                    <v-select v-model="selectedAirport"
                        :items="['', 'Barcelona 🇪🇸', 'Los Angeles 🇺🇸', 'London 🇬🇧', 'Paris 🇫🇷', 'Porto 🇵🇹', 'Lima 🇵🇪', 'New York 🇺🇸', 'Toronto 🇨🇦', 'Rome 🇮🇹']"
                        label="Select Departure Airport" variant="solo"
                        class="w-48 h-12 mb-8 text-slate-700 dark:text-white"></v-select>

                    <transition-group name="flight" tag="div"
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div v-for="flight in filteredFlights" :key="flight.id"
                            :class="['rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer', { 'bg-white text-gray-800': !isDarkTheme, 'dark:bg-slate-800 dark:text-white': isDarkTheme }]"
                            class="flight-item">
                            <div class="relative h-56">
                                <img :src="flight.image" :alt="flight.city"
                                    class="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105" />
                                <div
                                    class="absolute bottom-4 right-4 bg-blue-600 dark:bg-blue-400 text-white dark:text-slate-900 px-3 py-1 rounded-full text-sm font-medium shadow-md">
                                    {{ flight.city }}
                                </div>
                                <div
                                    class="absolute bottom-4 left-4 bg-orange-500 dark:bg-orange-700 text-white dark:text-slate-900 px-3 py-1 rounded-full text-xs font-light shadow-md">
                                    Discount: {{ flight.discount }}
                                </div>
                            </div>
                            <div class="p-4 text-center">
                                <span class="text-gray-500 dark:text-gray-200 text-lg line-through">{{ flight.oldPrice
                                    }}</span>
                                <p class="text-xl font-bold text-green-500 inline-block ml-3">{{ flight.price }}</p>
                                <p class="text-gray-500  dark:text-gray-200 text-right">{{ flight.date }}</p>
                            </div>
                        </div>
                    </transition-group>
                </div>
            </div>
        </section>

        <!-- foter-->
        <div :class="['bg-footer', { 'bg-footer-dark': isDarkTheme }]">



            <FooterComp></FooterComp>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import NavbarComp from './NavbarComponent.vue';
import FooterComp from './FooterComponent.vue';
import Buscador from './Buscador.vue';
import { mapGetters } from 'vuex';
import { VSelect } from 'vuetify/components';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';
import '@splidejs/vue-splide/css/core';
import { mdi } from 'vuetify/iconsets/mdi-svg';
export default {
    components: {
        NavbarComp,
        Buscador,
        FooterComp,
        Swiper,
        SwiperSlide,
        Splide,
        SplideSlide,
        SplideTrack,
        VSelect
    },
    data() {
        return {
            lastFlights: [
                { id: 1, city: 'Oporto - Liverpool', image: 'https://images.pexels.com/photos/465654/pexels-photo-465654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
                { id: 2, city: 'Madrid - London', image: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
                { id: 3, city: 'Belgium - Paris', image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
                { id: 4, city: 'Barcelona - New York', image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
                { id: 5, city: 'Jakarta - Tokyo', image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
                { id: 6, city: 'Dubai - Sydney', image: 'https://images.pexels.com/photos/5707610/pexels-photo-5707610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
                { id: 7, city: 'Vigo - Barcelona', image: 'https://images.pexels.com/photos/1386444/pexels-photo-1386444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
                { id: 8, city: 'Prague - Rome', image: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            ],
            flightsToShow: 8,
            selectedAirport: '',
            fligthsoffers: [
                { id: 1, city: 'Liverpool', image: 'https://images.pexels.com/photos/465654/pexels-photo-465654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$199', oldPrice: '$290', discount: '31%', airport: 'Barcelona 🇪🇸', date: '12 nov. 2024' },
                { id: 2, city: 'London', image: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$249', oldPrice: '$320', discount: '22%', airport: 'Los Angeles 🇺🇸', date: '11 dec. 2025' },
                { id: 3, city: 'Paris', image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$299', oldPrice: '$410', discount: '27%', airport: 'London 🇬🇧', date: '13 apr. 2024' },
                { id: 4, city: 'New York', image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$349', oldPrice: '$550', discount: '36%', airport: 'Barcelona 🇪🇸', date: '14 feb. 2025' },
                { id: 5, city: 'Los Angeles', image: 'https://images.pexels.com/photos/2525903/pexels-photo-2525903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$349', oldPrice: '$510', discount: '32%', airport: 'London 🇬🇧', date: '13 may. 2025' },
                { id: 6, city: 'Sydney', image: 'https://images.pexels.com/photos/5707610/pexels-photo-5707610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$229', oldPrice: '$410', discount: '44%', airport: 'Rome 🇮🇹', date: '08 sep. 2025' },
                { id: 7, city: 'Barcelona', image: 'https://images.pexels.com/photos/1386444/pexels-photo-1386444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=', price: '$129', oldPrice: '$250', discount: '48%', airport: 'Rome 🇮🇹', date: '10 dec. 2025' },
                { id: 8, city: 'Rome', image: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$219', oldPrice: '$310', discount: '29%', airport: 'Los Angeles 🇺🇸', date: '02 jul. 2025' },
                { id: 9, city: 'Berlin', image: 'https://images.pexels.com/photos/275202/pexels-photo-275202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$229', oldPrice: '$410', discount: '44%', airport: 'Toronto 🇨🇦', date: '24 jun. 2024' },
                { id: 10, city: 'Amsterdam', image: 'https://images.pexels.com/photos/1414467/pexels-photo-1414467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$259', oldPrice: '$370', discount: '30%', airport: 'Toronto 🇨🇦', date: '02 feb. 2025' },
                { id: 11, city: 'Istanbul', image: 'https://images.pexels.com/photos/879478/pexels-photo-879478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$299', oldPrice: '$340', discount: '12%', airport: 'New York 🇺🇸', date: '24 aug. 2024' },
                { id: 12, city: 'Dubai', image: 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$399', oldPrice: '$410', discount: '3%', airport: 'Rome 🇮🇹', date: '10 dec. 2025' },
                { id: 13, city: 'Cape Town', image: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$499', oldPrice: '$740', discount: '33%', airport: 'New York 🇺🇸', date: '20 mar. 2025' },
                { id: 14, city: 'Los Angeles', image: 'https://images.pexels.com/photos/2525903/pexels-photo-2525903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$349', oldPrice: '$510', discount: '32%', airport: 'Lima 🇵🇪', date: '11 jul. 2025' },
                { id: 15, city: 'Toronto', image: 'https://images.pexels.com/photos/1868676/pexels-photo-1868676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$269', oldPrice: '$320', discount: '16%', airport: 'Lima 🇵🇪', date: '05 jun. 2025' },
                { id: 16, city: 'Rio de Janeiro', image: 'https://images.pexels.com/photos/3648269/pexels-photo-3648269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$349', oldPrice: '$401', discount: '13%', airport: 'Porto 🇵🇹', date: '25 mar. 2025' },
                { id: 17, city: 'Buenos Aires', image: 'https://images.pexels.com/photos/4328243/pexels-photo-4328243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$299', oldPrice: '$330', discount: '9%', airport: 'Porto 🇵🇹', date: '11 oct. 2024' },
                { id: 18, city: 'Mexico City', image: 'https://images.pexels.com/photos/3551805/pexels-photo-3551805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$199', oldPrice: '$220', discount: '9%', airport: 'Paris 🇫🇷', date: '25 sep. 2025' },
                { id: 19, city: 'Moscow', image: 'https://images.pexels.com/photos/3629813/pexels-photo-3629813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$349', oldPrice: '$450', discount: '22%', airport: 'Barcelona 🇪🇸', date: '23 jul. 2025' },
                { id: 20, city: 'Hong Kong', image: 'https://images.pexels.com/photos/6456847/pexels-photo-6456847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$399', oldPrice: '$620', discount: '36%', airport: 'Paris 🇫🇷', date: '05 apr. 2024' }
            ]
            ,
        };
    },
    computed: {
        ...mapGetters(['isDarkTheme']),
        displayedFlights() {
            return this.fligthsoffers.slice(0, this.flightsToShow);
        },
        filteredFlights() {
            if (!this.selectedAirport) {
                return this.fligthsoffers;
            }
            return this.fligthsoffers.filter(flight => flight.airport === this.selectedAirport);
        }
    },
    mounted() {
        this.applyTheme();
    },
    watch: {
        isDarkTheme(newVal) {
            this.applyTheme();
        }
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
    methods: {
        applyTheme() {
            if (this.isDarkTheme) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
        },

    }
};
</script>

<style>
.flight-enter-active,
.flight-leave-active {
    transition: all 0.5s ease;
}

.flight-enter-from,
.flight-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

@keyframes wiggle {

    0%,
    100% {
        transform: rotate(-5deg);
    }

    50% {
        transform: rotate(5deg);
    }
}

.animate-wiggle {
    animation: wiggle 1s infinite;
}
</style>