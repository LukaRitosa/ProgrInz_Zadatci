<script setup>
    import { RouterLink, useRouter } from 'vue-router'
    import { useUserStore } from '@/stores/userStore'
    import { ref } from 'vue'

    const username=ref("")    
    const email=ref("")    
    const password1=ref("")    
    const password2=ref("")  
    const poruka=ref("")  

    const router=useRouter()
    const userStore=useUserStore()

    function registracija(){
        if(password1.value!==password2.value){
            poruka.value='Lozinke se ne podudaraju'
            return
        }
        const da=userStore.signup(username.value, email.value, password1.value)
        if(da){
            router.push("/user")
        }
        else{
            poruka.value='Račun već postoji, idite na prijavu.'
        }
    }
</script>

<template>

    <nav>
    <RouterLink to="/login">Prijava</RouterLink>
    </nav>

    <div class="flex flex-col items-center justify-center min-h-screen text-2xl bg-blue-100 text-blue-950 gap-6 p-6">
        <b>Registracija</b>

        <div>
            <b>Username:</b>
            <input type="text" class="border p-1" placeholder="Korisničko ime..." v-model="username">
        </div>

        <div>   
            <b>Email:</b>
            <input type="text" class="border p-1" placeholder="Mail..." v-model="email">
        </div>

        <div>    
            <b>Lozinka:</b>
            <input type="text" class="border p-1" placeholder="Lozinka..." v-model="password1">
        </div>
        
        <div>
            <b>Ponovi lozinku:</b>
            <input type="text" class="border p-1" placeholder="Ponovi lozinku..." v-model="password2">
        </div>

        <button class="border bg-blue-500 text-white hover:bg-blue-300 p-2" @click="registracija">Registracija</button>

        <div class="text-blue-500">{{ poruka }}</div>
    
    </div>

</template>