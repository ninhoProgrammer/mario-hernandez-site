<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const name = ref('')
const email = ref('')
const message = ref('')
const isLoading = ref(false)
const isSuccess = ref(false)
const errorMsg = ref('')

const sendEmail = async () => {
  isLoading.value = true
  errorMsg.value = ''
  
  const templateParams = {
    from_name: name.value,
    reply_to: email.value,
    message: message.value,
  }

  try {
    await emailjs.send(
      import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
      import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
    )
    
    isSuccess.value = true
    name.value = ''
    email.value = ''
    message.value = ''
    
    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Email error:', error)
    errorMsg.value = 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <form @submit.prevent="sendEmail" class="space-y-6">
    <div v-if="isSuccess" class="p-4 mb-4 text-green-700 bg-green-100 rounded">
      ¡Mensaje enviado con éxito! Gracias por contactarme.
    </div>
    
    <div v-if="errorMsg" class="p-4 mb-4 text-red-700 bg-red-100 rounded">
      {{ errorMsg }}
    </div>
    
    <div>
      <input 
        v-model="name" 
        type="text" 
        placeholder="Name"   
        class="w-full border-b-2 p-1 border-gray-400 focus:outline-none focus:border-gray-500 py-2 placeholder-gray-500"     
        required 
      />
    </div>
    
    <div>
      <input 
        v-model="email" 
        type="email" 
        placeholder="Email" 
        class="w-full border-b-2 p-1 border-gray-400 focus:outline-none focus:border-[var(--color-primary)] py-2 placeholder-gray-500" 
        required 
      />
    </div>

    <div>
      <textarea 
        v-model="message" 
        rows="4" 
        placeholder="Message" 
        class="w-full border-b-2 p-1 border-gray-400 focus:outline-none focus:border-[var(--color-primary)] py-2 placeholder-gray-500" 
        required
      ></textarea>
    </div>

    <button 
      type="submit" 
      :disabled="isLoading"
      class="inline-flex items-center px-6 py-2 border-2 text-[var(--color-accent)] border-[var(--color-accent)] rounded-full hover:bg- hover:text-gray-500 hover:border-[var(--color-accent)] font-bold transition-all disabled:opacity-50"
    >
      <span v-if="isLoading">Enviando...</span>
      <span v-else>Enviar</span>
    </button>
  </form>
</template>