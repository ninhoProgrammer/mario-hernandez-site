<template>
  <section id="skills" class="max-w-6xl pt-20 px-4 mx-auto text-white">
    <h2 class="text-4xl font-bold mb-6 text-center">My Skills</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="group text-xs bg-white/70 backdrop-blur-lg p-5 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white transition duration-300"
        :style="{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)', transitionDelay: `${index * 150}ms` }"
      >
        <div class="flex items-start gap-4 mb-4">
          <div class="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
            <component :is="skill.icon" />
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gray-800">{{ skill.title }}</h3>
            <p class="text-gray-600">{{ skill.description }}</p>
          </div>
        </div>
        <p class="text-gray-700">{{ skill.detail }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => (isVisible.value = true), 300)
})

const CodeIcon = {
  template: `<svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>`
}

const LaptopIcon = {
  template: `<svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5h18v11H3z" /><path d="M2 17h20" /></svg>`
}

const SettingsIcon = {
  template: `<svg class="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9.4 19a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 5 15.5a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 5 9.4a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9.4 5a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09c0 .68.4 1.29 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82c.13.48.13 1 0 1.48Z" /></svg>`
}

const LanguageIcon = {
  template: `<svg class="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 8h14M4 12h16M5 16h14" /></svg>`
}

const skills = [
  {
    icon: CodeIcon,
    title: "Programming",
    description: "C#, SQL, JavaScript",
    detail: "Efficient backend and frontend logic using clean, scalable practices."
  },
  {
    icon: LaptopIcon,
    title: "Tools",
    description: "Visual Studio, GitHub, Windows Forms",
    detail: "Desktop development with .NET and essential productivity tools."
  },
  {
    icon: SettingsIcon,
    title: "Development",
    description: "Problem Solving, UI & UX, Clean Code",
    detail: "Focused on user experience and code maintainability."
  },
  {
    icon: LanguageIcon,
    title: "Languages",
    description: "Spanish (native), English (learning)",
    detail: "Fluent in Spanish, improving English for international work."
  }
]
</script>