<script setup>
    import { ref, computed, onMounted, onUnmounted } from 'vue';
    let interval;

    const slides = ref([
        {
            id: 1,
            text: 'Landing page',
            description: 'This is a page built with Astro and it\'s free. Software development — we build your website so you can be everywhere.', // explanatory text
            circleColor: 'bg-red-500 hover:bg-red-600', 
            image: '../landingpage.webp', 
            url: 'https://landing-page-delta-roan.vercel.app', // destination URL
        },

        {
            id: 2,
            text: 'Invitations',
            description: 'Design invitations: where creativity comes to life. Discover how we transform ideas into captivating visual experiences.',
            circleColor: 'bg-blue-500 hover:bg-blue-600',
            image: '../wedding.webp', 
            url: '/proyecto/diseno',
        },

        {
            id: 3,
            text: 'Ecommerce Promo',
            description: 'Boost your online store with our dynamic eCommerce promo designs that captivate and convert visitors into loyal customers.',
            circleColor: 'bg-green-500 hover:bg-green-600',
            image: '../EcommercePromo.webp', 
            url: 'https://github.com/ninhoProgrammer/ecommer',
        },
    ]);

    const currentSlideIndex = ref(0);

    // Computed para obtener el slide actual
    const currentSlide = computed(() => slides.value[currentSlideIndex.value]);

    // Función para avanzar al siguiente slide
    const nextSlide = () => {
        currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length;
    };

    // Función para ir al slide anterior (opcional, pero útil)
    const prevSlide = () => {
        currentSlideIndex.value = (currentSlideIndex.value - 1 + slides.value.length) % slides.value.length;
    };

    // Opcional: Auto-avance cada 5 segundos
    onMounted(() => {
        interval = setInterval(nextSlide, 5000);
    });

    onUnmounted(() => {
        clearInterval(interval);
    });
</script>

<template>
    <div class="relative w-full h-[420px] md:h-[510px] overflow-hidden">
        <Transition name="slide-fade" mode="out-in">
            <div 
                :key="currentSlide.id"
                class="absolute inset-0 p2 md:p-10 flex flex-col justify-end transition-all duration-700 ease-in-out bg-cover bg-center"
                :style="{ backgroundImage: `url(${currentSlide.image})` }"
            >
                <div class="absolute inset-0 bg-black/40"></div>

                <div class="relative w-full h-full flex flex-col justify-between">
                    <div class="absolute md:top-0 md:right-0 p-4 bg-white/20 backdrop-blur-sm text-white max-w-sm rounded-lg text-center md:text-right">
                        <p class="text-xs md:text-base font-medium">{{ currentSlide.description }}</p>
                    </div>

                    <div class="absolute bottom-1 md:bottom-0 left-0 right-0 p-6 md:p-4 flex justify-between items-end space-x-4">
                        
                        <div class="p-4 bg-black/50 backdrop-blur-sm text-white max-w-sm rounded-lg z-10">
                            <p class="text-xs md:text-base font-bold">{{ currentSlide.text }}</p>
                        </div>

                        <div class="flex flex-col items-end space-y-4 z-10">
                            <a 
                                :href="currentSlide.url"
                                target="_blank" 
                                :class="['w-32 h-10 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center text-white text-xs font-extrabold uppercase tracking-wide', currentSlide.circleColor]"
                                rel="noopener noreferrer"
                            >
                                Ver Más &rarr;
                            </a>
                        </div>

                    </div>

                </div>
                
            </div>
        </Transition>

        <button 
            @click="prevSlide" 
            class="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 p-3 bg-white/30 text-white rounded-full z-20 hover:scale-110 hover:bg-white/50 transition"
        >
            &lt;
        </button>

        <button 
            @click="nextSlide" 
            class="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 p-3 bg-white/30 text-white rounded-full z-20 hover:scale-110 hover:bg-white/50 transition"
        >
            &gt;
        </button>
        
        <div class="absolute bottom-1 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            <button
                v-for="(slide, index) in slides"
                :key="slide.id"
                @click="currentSlideIndex = index"
                :class="['w-3 h-3 rounded-full transition-colors duration-300', index === currentSlideIndex ? 'bg-white' : 'bg-white/50 hover:scale-110 hover:bg-white/70']"
                aria-label="Ir al slide"
            >
            </button>
        </div>
        
    </div>
</template>

<style>
/* ... (Mismo código de las transiciones 'slide-fade' ) ... */
.slide-fade-enter-active { transition: all 0.5s ease-out; }
.slide-fade-leave-active { 
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
    position: absolute; 
    width: 100%;
}
.slide-fade-enter-from { transform: translateX(100%); opacity: 0; }
.slide-fade-leave-to { transform: translateX(-100%); opacity: 0; }
</style>