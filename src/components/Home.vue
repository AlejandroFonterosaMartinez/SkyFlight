<template>
  <div :class="['min-h-screen flex flex-col', { 'dark': isDarkTheme }]"
    class="transition-colors duration-700 ease-in-out">
    <div class="transition-colors duration-700 ease-in-out" :class="['custom-bg', { 'custom-bg-dark': isDarkTheme }]">
      <NavbarComp></NavbarComp>
      <!-- Home -->
      <Buscador></Buscador>
    </div>

    <!-- Sobre nosotros -->
    <section id="about"
      :class="['flex-1 py-20', { 'bg-white text-slate-700': !isDarkTheme, 'dark:bg-slate-800  dark:text-white': isDarkTheme }]">
      <div class="container mx-auto px-4">
        <!-- Título Principal -->
        <h2 class="text-4xl md:text-5xl font-extrabold mb-4 text-center text-blue-600 dark:text-blue-300">
          About Us
        </h2>
        <!-- Descripción breve -->
        <p class="text-lg max-w-3xl mx-auto text-center mb-12 px-4 md:px-0">
          We provide amazing flight deals to help you explore the world with comfort and ease.
        </p>

        <!-- Diseño de grilla para imagen y contenido -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          <!-- Imagen -->
          <div :class="[' object-cover rounded-xl  ', { 'bg-slate-800': isDarkTheme, 'bg-white': !isDarkTheme }]">
            <img src="../../public/img/fondo-about.png" alt="About Us"
              class="object-cover rounded-lg w-full h-full transform transition-transform hover:scale-105 duration-500">
          </div>

          <div class="space-y-8">

            <div
              :class="['p-6 rounded-xl shadow-lg', { 'bg-white text-slate-700': !isDarkTheme, 'dark:bg-slate-700  dark:text-white': isDarkTheme }]">
              <h3 class="text-3xl font-semibold mb-4 text-blue-600 dark:text-blue-300">
                Our Mission
              </h3>
              <p class="text-base leading-relaxed">
                Our mission is to provide you with the best flight deals and travel experiences. We leverage our
                partnerships with top airlines to offer exclusive deals and ensure you have a smooth and enjoyable
                travel experience.
              </p>
            </div>

            <div
              :class="['p-6 rounded-xl shadow-lg', { 'bg-white text-slate-700': !isDarkTheme, 'dark:bg-slate-700  dark:text-white': isDarkTheme }]">
              <h3 class="text-3xl font-semibold mb-4 text-blue-600 dark:text-blue-300">
                Why Choose Us?
              </h3>
              <ul class="list-disc list-inside space-y-2 text-base leading-relaxed">
                <li>Competitive prices on flights</li>
                <li>Exclusive offers and discounts</li>
                <li>24/7 customer support</li>
                <li>Easy-to-use booking platform</li>
              </ul>
            </div>

            <div
              :class="['p-6 rounded-xl shadow-lg', { 'bg-white text-slate-700': !isDarkTheme, 'dark:bg-slate-700  dark:text-white': isDarkTheme }]">
              <h3 class="text-3xl font-semibold mb-4 text-blue-600 dark:text-blue-300">
                Our Values
              </h3>
              <p class="text-base leading-relaxed">
                We believe in transparency, reliability, and customer satisfaction. Our team is dedicated to ensuring
                you get the best value and service in every booking.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Servicios -->
    <section id="services"
      :class="['flex-1 py-20', { 'bg-white text-slate-700': !isDarkTheme, 'dark:bg-slate-800  dark:text-white': isDarkTheme }]">
      <div class="container mx-auto text-center px-4">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-4 text-center text-blue-600 dark:text-blue-300">Our Services
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <!-- Flight Booking -->
          <div
            :class="['p-6 shadow-md rounded-lg flex flex-col md:flex-row items-center', { 'bg-white text-slate-700': !isDarkTheme, 'dark:bg-slate-700  dark:text-white': isDarkTheme }]">
            <img
              src="https://images.pexels.com/photos/163792/model-planes-airplanes-miniatur-wunderland-hamburg-163792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Flight Booking"
              class="w-full md:w-1/2 h-40 object-cover rounded-lg md:mr-4 mb-4 md:mb-0 transform transition-transform hover:scale-105 duration-500">
            <div class="text-left md:w-1/2">
              <h3 class="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-300">Flight Booking</h3>
              <p>Book flights easily and quickly with our intuitive platform.</p>
            </div>
          </div>
          <!-- Hotel Deals -->
          <div
            :class="['p-6 shadow-md rounded-lg flex flex-col md:flex-row items-center', { 'bg-white text-slate-700': !isDarkTheme, 'dark:bg-slate-700  dark:text-white': isDarkTheme }]">
            <img
              src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Hotel Deals"
              class="w-full md:w-1/2 h-40 object-cover rounded-lg md:mr-4 mb-4 md:mb-0 transform transition-transform hover:scale-105 duration-500">
            <div class="text-left md:w-1/2">
              <h3 class="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-300">Hotel Deals</h3>
              <p>Get the best hotel deals along with your flight reservations.</p>
            </div>
          </div>
          <!-- 24/7 Support -->
          <div
            :class="['p-6 shadow-md rounded-lg flex flex-col md:flex-row items-center', { 'bg-white text-slate-700': !isDarkTheme, 'dark:bg-slate-700  dark:text-white': isDarkTheme }]">
            <img src="https://img.freepik.com/foto-gratis/operador-call-center-seguro-hablando-cliente_74855-4059.jpg"
              alt="24/7 Support"
              class="w-full md:w-1/2 h-40 object-cover rounded-lg md:mr-4 mb-4 md:mb-0 transform transition-transform hover:scale-105 duration-500">
            <div class="text-left md:w-1/2">
              <h3 class="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-300">24/7 Support</h3>
              <p>Our support team is available 24/7 to assist you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacto -->
    <div class="" :class="['bg-footer', { 'bg-footer-dark': isDarkTheme }]">
      <section id="contact" class="flex-1 py-20  text-slate-700 dark:text-white custom-contact">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl md:text-5xl font-extrabold mb-4 text-center text-blue-600 dark:text-blue-300">Contact Us
          </h2>
          <p class="text-lg max-w-2xl mx-auto text-center mb-8 dark:text-white">
            If you have any questions, feel free to reach out to us.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-12">
            <div
              :class="['flex justify-center bg-cover rounded-lg', { 'bg-slate-800': isDarkTheme, 'bg-white': !isDarkTheme }]">
              <img src="../../public/img/img_contact.png" alt="Contact Us"
                class="object-cover rounded-lg w-full h-full transform transition-transform hover:scale-105 duration-500">
            </div>
            <div :class="[' p-6 rounded-lg shadow-md', { 'bg-slate-800': isDarkTheme, 'bg-white': !isDarkTheme }]">
              <v-form>
                <v-text-field label="Name" outlined class="mb-4" variant="solo" :dark="isDarkTheme"
                  required></v-text-field>

                <!-- Campo de Email -->
                <v-text-field label="Email" type="email" variant="solo" outlined class="mb-4" :dark="isDarkTheme"
                  required></v-text-field>

                <!-- Campo de Mensaje -->
                <v-textarea label="Message" outlined rows="4" class="mb-4" :dark="isDarkTheme" required
                  variant="solo"></v-textarea>

                <!-- Botón de Enviar -->
                <v-btn color="primary" class="w-full" elevation="2" prepend-icon="mdi-send">
                  Send Message
                </v-btn>
              </v-form>
            </div>

          </div>
        </div>
      </section>

      <!-- Footer-->
      <FooterComp></FooterComp>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NavbarComp from './NavbarComponent.vue';
import FooterComp from './FooterComponent.vue';
import Buscador from './Buscador.vue';

export default {
  components: {
    NavbarComp,
    FooterComp,
    Buscador
  },
  computed: {
    ...mapGetters(['isDarkTheme']),
},
};
</script>
