<script setup>
    import { ref, onMounted } from 'vue';
    import CodeIcon from './icons/CodeIcon.vue';
    import DatabaseIcon from './icons/DatabaseIcon.vue';
    import ServerIcon from './icons/ServerIcon.vue';

    const skills = [
        {
            icon: CodeIcon,
            title: 'Web Development',
            description: 'Building responsive and modern websites and applications.',
        },
        {
            icon: DatabaseIcon,
            title: 'Databases',
            description: 'Design, management, and optimization of relational and non-relational databases.',
        },
        {
            icon: ServerIcon,
            title: 'DevOps & Servers',
            description: 'Automation, deployment, and server infrastructure setup.',
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
</script>

<template>
    <section class="py-12 mt-2 md:mt-16">
        <h2 class="text-3xl font-bold text-center mb-8 w-full -skew-y-2 bg-[var(--color-primary)] text-[var(--color-accent)]">
            <span class="typed-text inline-block animate-blink">Skills</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0 gap-3 md:gap-6 max-w-5xl mx-auto -skew-y-2">
            <div
                v-for="(skill, index) in visibleSkills"
                :key="index"
                class="p-2 md:p-6 bg-white/80 border rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-300 ease-in-out opacity-0 animate-fade-in-up"
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

    <footer class="relative bg-gradient-to-r buttom-0 text-[var(--color-accent)] py-4 mt-0 md:mt-16 px-1 overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,red,transparent_70%)] animate-pulse"></div>

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