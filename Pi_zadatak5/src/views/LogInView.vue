<script setup>
    import { RouterLink, useRouter } from 'vue-router'
    import { useUserStore } from '@/stores/userStore'
    import { ref } from 'vue'

    const username=ref("")    
    const password=ref("")    
    const poruka=ref("")  

    const router=useRouter()
    const userStore=useUserStore()

    function prijava(){
        const pokusaj=userStore.login(username.value, password.value)
        if(!pokusaj){
            poruka.value="Račun ne postoji! Provjerite dali ste napravili grešku, ili idite na registraciju."
        }
        else{
            router.push("/user")
        }
    }
    
</script>

<template>
    <nav>
    <RouterLink to="/signup">Registracija</RouterLink>
    </nav>

    <div class="flex flex-col items-center justify-center min-h-screen text-2xl bg-orange-100 text-orange-950 gap-6 p-6">
        <b>Prijava</b>    

        <div>
            <b>Username:</b>
            <input type="text" class="border p-1" placeholder="Korisničko ime..." v-model="username">
        </div>

        <div>    
            <b>Lozinka:</b>
            <input type="text" class="border p-1" placeholder="Lozinka..." v-model="password">
        </div>

        <button class="border bg-orange-500 text-white hover:bg-orange-300 p-2" @click="prijava">Prijava</button>

        <div class="text-orange-500">{{ poruka }}</div>
    
    </div>

</template>