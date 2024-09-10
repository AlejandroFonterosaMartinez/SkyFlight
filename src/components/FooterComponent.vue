<template>
    <footer class=" text-white py-6  transition-colors duration-500">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between mb-6">

                <div class="mb-4 md:mb-0">
                    <h5 class="text-lg font-semibold mb-2 text-white dark:text-blue-300">Quick Links</h5>
                    <ul class="list-none space-y-2">
                        <li><a href="#" class="hover:underline">Home</a></li>
                        <li><a href="#" class="hover:underline">Services</a></li>
                        <li><a href="#" class="hover:underline">About Us</a></li>
                        <li><a href="#" class="hover:underline">Contact</a></li>
                    </ul>
                </div>

                <div class="mb-4 md:mb-0">
                    <h5 class="text-lg font-semibold mb-2 text-white dark:text-blue-300">Follow Us</h5>
                    <div class="flex space-x-4">
                        <a href="#" class="hover:underline">Facebook</a>
                        <a href="#" class="hover:underline">Twitter</a>
                        <a href="#" class="hover:underline">Instagram</a>
                        <a href="#" class="hover:underline">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <p>&copy; 2024 SkyFlights. All rights reserved. &nbsp; Created by Alejandro Fonterosa Martinez.</p>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
    components: {

    },
    name: "footer-component",
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>
footer a {
    color: #ffffff;
}

footer a:hover {
    color: #dbeafe;
}


</style>