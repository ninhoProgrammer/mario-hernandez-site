<script setup>
    import { ref, onMounted } from 'vue';
    import CodeIcon from './icons/CodeIcon.vue';
    import DatabaseIcon from './icons/DatabaseIcon.vue';
    import ServerIcon from './icons/ServerIcon.vue';

    const skills = [
        {
            icon: CodeIcon,
            title: 'Web Development',
            description: 'Building responsive and modern web applications.',
            modal: 'Experience building dynamic web applications using HTML, CSS, JavaScript, Vue.js, and Astro. Focused on creating responsive and high-performance user interfaces, improving user experience, and integrating frontend applications with REST APIs.',
        },
        {
            icon: DatabaseIcon,
            title: 'Databases',
            description: 'Design, optimization, and data management.',
            modal: 'Experience in database design, query optimization, and data transformation. Skilled in handling large datasets, ensuring data integrity, and improving performance in SQL-based systems using SQL Server, MySQL, and Oracle.',
        },
        {
            icon: CodeIcon,
            title: 'Backend & Data Integration',
            description: 'API development and system integration.',
            modal: 'Experience developing backend solutions using C# and Node.js. Built REST APIs to automate data processing and integrate external systems. Worked with relational databases and implemented data transformation logic for efficient workflows.',
        },
        {
            icon: ServerIcon,
            title: 'DevOps & Deployment',
            description: 'Deployment, automation, and version control.',
            modal: 'Experience deploying applications using Docker and managing source control with GitHub. Familiar with CI/CD practices and automating development workflows to improve deployment speed and reliability.',
        },
    ];

    const visibleSkills = ref([]);

    onMounted(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < skills.length) {
                visibleSkills.value.push(skills[i]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 200);
    });

    const selectedSkill = ref(null)
    const showModal = ref(false)

    const openModal = (skill) => {
        selectedSkill.value = skill
        showModal.value = true
    }

    const closeModal = () => {
        showModal.value = false
    }
</script>

<template>
    <section class="py-12 mt-2 md:mt-16">
        <h2 class="text-3xl font-bold text-center mb-8 w-full -skew-y-2 bg-[var(--color-primary)] text-[var(--color-accent)]">
            <span class="typed-text inline-block animate-blink">Skills</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 px-4 md:px-0 gap-2 md:gap-4 max-w-5xl mx-auto -skew-y-2">
            <div
                v-for="(skill, index) in visibleSkills"
                :key="index"
                @click="openModal(skill)"
                class="p-2 md:p-6 bg-white/80 border shadow-md flex flex-col items-center text-center transition-all duration-300 ease-in-out opacity-0 animate-fade-in-up cursor-pointer hover:scale-105"
            >
                <component :is="skill.icon" />
                <h3 class="mt-2 md:mt-4 text-lg md:text-xl font-semibold">
                    {{ skill.title }}
                </h3>
                <p class="mt-1 md:mt-2 text-sm md:text-base text-[var(--color-text)]">
                    {{ skill.description }}
                </p>
            </div>
        </div>
    </section>

    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
        <div class="text-center md:text-left bg-[var(--color-text)] m-4 md:m-0 p-6 h-58 border-2 border-[var(--color-accent)] shadow-lg max-w-xl w-full relative md:space-y-2 -skew-y-2 hover:shadow-[var(--color-primary)] hover:scale-105 transition-transform duration-300">
            <h2 class="md:absolute bg-[var(--color-accent)] p-1 w-auto md:w-[360px] left-12 text-xl md:text-2xl font-bold text-[var(--color-primary)] z-1">
                {{ selectedSkill.title }}
            </h2> 
            <!-- Botón cerrar -->
            <button 
                @click="closeModal"
                class="absolute text-lg top-0 right-2 text-[var(--color-primary)] hover:text-[var(--color-accent)] hover:scale-105 transition-colors duration-300"
            >
                ✕
            </button>

            <!-- Contenido -->
            <div v-if="selectedSkill" class="flex flex-col bg-[var(--color-secondary)]  md:mt-0 p-4 items-end space-y-2 z-0">
                <component class="p-1 self-center md:self-end" :is="selectedSkill.icon" />
                
                <p class="text-sm md:text-lg mt-2 text-[var(--color-accent)] max-w-full">
                    {{ selectedSkill.modal }}
                </p>
            </div>

        </div>
    </div>

    <footer class="relative bg-gradient-to-r buttom-0 text-[var(--color-accent)] py-4 mt-0 md:mt-16 px-1 overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,darkorange,transparent_70%)] animate-pulse"></div>

        <div class="relative z-10 flex flex-col items-center space-y-1 md:space-y-2 text-center">
            <p class="text-sm font-semibold tracking-wide">
                Thank you for visiting my portfolio! <span class="animate-bounce inline-block">👨‍💻</span>
            </p>

            <div class="w-36 h-[2px] bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 rounded-full"></div>

            <p class="text-sm mt-2">
                &copy; 2025 <span class="font-medium text-[var(--color-secondary)]">Mario Hernández</span>. All rights reserved.
            </p>
        </div>

    </footer>
</template>

<style scoped>
    @keyframes fade-in-up {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
    }
    .animate-fade-in-up {
        animation: fade-in-up 0.5s ease forwards;
    }
</style>