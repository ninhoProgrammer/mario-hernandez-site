<template>
    <section class="my-20 md:my-10 py-4 md:py-16  text-center">
        <h2 class="relative text-3xl font-bold text-center mb-8 w-full -skew-y-2 bg-[var(--color-secondary)] text-[var(--color-accent)]">
            <span class="typed-text inline-block border-r-2 border-[var(--color-secondary)]  animate-blink">{{ animatedText }}</span>
        </h2>

        <div class="w-3/4 -skew-y-2 mx-auto relative overflow-hidden">
            <div class="flex transition-transform  duration-700 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div v-for="(group, i) in techGroups" :key="i" class="min-w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 px-4">
                    <div v-for="tech in group" :key="tech.name" class="bg-white/80 backdrop-blur-lg shadow-md rounded-xl p-4 md:p-6 hover:scale-105 hover:shadow-xl transition">
                        <img 
                            :src="tech.logo" 
                            :alt="tech.name" 
                            class="w-auto h-10 md:h-14 mx-auto mb-3 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition"
                        />
                        <p class="text-[var(--color-textTitle)] font-medium text-sm">{{ tech.name }}</p>
                    </div>
                </div>
            </div>

            <!-- Controles -->
            <div class="absolute top-1/2 left-0 transform -translate-y-1/2">
                <button 
                    @click="prev" 
                    class="bg-[var(--color-accent)] p-4 rounded-full hover:scale-110 hover:bg-[var(--color-secondary)] hover:text-[var(--color-accent)] transition"
                >
                    &lt;
                </button>
            </div>
            <div class="absolute top-1/2 right-0 transform -translate-y-1/2">
                <button 
                    @click="next" 
                    class="bg-[var(--color-accent)] p-4 rounded-full hover:scale-110 hover:bg-[var(--color-secondary)] hover:text-[var(--color-accent)] transition"
                >
                    &gt;
                </button>
            </div>
        </div>

        
    </section>
</template>

<script setup>
    import { ref, computed, onMounted, onUnmounted } from 'vue';

    // Animación de texto
    const animatedText = ref('');
    const phrases = ["Technologies I Master", "My Dev Toolkit", "Stack I Love"];
    let currentPhrase = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
        const current = phrases[currentPhrase];
        
        if (isDeleting) {
            animatedText.value = current.substring(0, animatedText.value.length - 1);
            typingSpeed = 50;
        } else {
            animatedText.value = current.substring(0, animatedText.value.length + 1);
            typingSpeed = 100;
        }

        if (!isDeleting && animatedText.value === current) {
            typingSpeed = 1500;
            isDeleting = true;
        } else if (isDeleting && animatedText.value === '') {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    };

    onMounted(() => {
        type();
    });

    const technologies = [
        // 🧠 Lenguajes y programación
        { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },

        // 🖥️ Bases de datos y servidores
        { name: 'SQL Server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
        { name: 'phpMyAdmin', logo: 'https://www.phpmyadmin.net/static/images/logo-og.png' },

        // 🌐 Frameworks y bibliotecas
        { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Three.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        
        // ⚙️ Desarrollo y herramientas
        { name: 'REST API', logo: 'https://cdn-icons-png.flaticon.com/512/1006/1006771.png' },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Crystal Reports', logo: 'https://res.cloudinary.com/codeparva/image/upload/v1619578094/crystal_logo_b3f7dfc56b.png' },
        
        // 🛠️ Control de versiones
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
    ];

    const chunkArray = (arr, size) => Array.from(
        { length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );

    const techGroups = computed(() => chunkArray(technologies, 4));
    const currentIndex = ref(0);

    function next() {
        currentIndex.value = (currentIndex.value + 1) % techGroups.value.length;
    }

    function prev() {
        currentIndex.value = (currentIndex.value - 1 + techGroups.value.length) % techGroups.value.length;
    }

    // Auto-slide
    let interval;
    onMounted(() => {
        interval = setInterval(next, 5000);
    });
    onUnmounted(() => {
        clearInterval(interval);
    });
</script>
