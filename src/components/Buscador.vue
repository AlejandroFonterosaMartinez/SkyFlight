<template>
    <section id="home" class="flex-1 py-10 md:py-20 ">
        <div class='container mx-auto px-4 py-4 rounded-lg '>
            <h2 class="text-4xl md:text-5xl font-extrabold mb-4 text-center text-blue-600 dark:text-blue-300 ">
                Welcome to SkyFlights
            </h2>
            <p class="text-base md:text-lg mb-8 text-slate-700 dark:text-white text-center">
                Discover the best flights and travel deals.
            </p>

            <div class="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 py-4">
                <div class="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <v-date-input label="Date from" variant="solo"
                        class="w-full md:w-56 h-12 text-slate-700 dark:text-white"></v-date-input>
                    <v-date-input label="Date up to" variant="solo"
                        class="w-full md:w-56 h-12 text-slate-700 dark:text-white"></v-date-input>
                </div>

                <div class="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <div class="flex items-center w-full md:w-56">
                        <div class="flex items-center justify-center w-12 h-12 text-slate-700 dark:text-white md:mr-2">
                            <v-icon class="text-gray-400 mr-4">mdi-airplane-takeoff </v-icon>
                        </div>
                        <v-select
                            :items="['JFK - New York', 'LAX - Los Angeles', 'LHR - London Heathrow', 'CDG - Paris Charles de Gaulle']"
                            label="Select Departure Airport" variant="solo"
                            class="w-full md:w-56 h-12 text-slate-700 dark:text-white "></v-select>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <div class="flex items-center w-full md:w-56">
                        <div class="flex items-center justify-center w-12 h-12 text-slate-700 dark:text-white md:mr-2">
                            <v-icon class="text-gray-400 mr-4">mdi-airplane-landing</v-icon>
                        </div>
                        <v-select
                            :items="['JFK - New York', 'LAX - Los Angeles', 'LHR - London Heathrow', 'CDG - Paris Charles de Gaulle']"
                            label="Select Destination Airport" variant="solo"
                            class="w-full md:w-56 h-12 text-slate-700 dark:text-white "></v-select>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <div class="flex items-center w-full md:w-56">
                        <div class="flex items-center justify-center w-12 h-12 text-slate-700 dark:text-white md:mr-2">
                            <v-icon class="text-gray-400 mr-4">mdi-account</v-icon>
                        </div>
                        <v-number-input @min="1" :reverse="false" control label="Passengers" variant="solo"
                            :hideInput="false" :inset="false"
                            class="w-full md:w-56 h-12 text-slate-700 dark:text-white"></v-number-input>
                    </div>
                </div>

                <v-btn prepend-icon="mdi-airplane" class="w-full sm:w-auto bg-blue-600 text-white h-12 mt-3">
                    Search
                </v-btn>
            </div>
        </div>
    </section>

</template>
<script>
import { mapGetters } from 'vuex';
import { VDateInput } from 'vuetify/labs/VDateInput';
import { VSelect } from 'vuetify/components';
import { VNumberInput } from 'vuetify/labs/VNumberInput'

export default {
    components: {
        VDateInput,
        VSelect,
        VNumberInput,
    },
    computed: {
        ...mapGetters(['isDarkTheme']),
    },
};
</script>