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
    <section class="py-12 my-16">
        <h2 class="text-3xl font-bold text-center mb-8 w-full -skew-y-2 bg-[var(--color-primary)] text-[var(--color-accent)]">Skills</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto -skew-y-2">
            <div
                v-for="(skill, index) in visibleSkills"
                :key="index"
                class="p-6 bg-white/80  border rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-300 ease-in-out opacity-0 animate-fade-in-up"
            >
                <component :is="skill.icon" />
                <h3 class="mt-4 text-xl font-semibold">{{ skill.title }}</h3>
                <p class="mt-2 text-gray-600">{{ skill.description }}</p>
            </div>
        </div>
    </section>

    <footer class="text-center py-10 text-sm text-white">
        <p>Thank you for visiting my portfolio! 👨‍💻</p>
        <p class="mt-2">&copy; 2025 Mario Hernández</p>
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