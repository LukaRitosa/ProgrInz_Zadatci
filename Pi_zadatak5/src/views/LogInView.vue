<script setup>
    import { RouterLink, useRouter } from 'vue-router'
    import { useUserStore } from '@/stores/userStore'
    import { ref } from 'vue'
    import { signInWithEmailAndPassword } from 'firebase/auth'
    import { auth } from '@/firebase.js'

    const email = ref('')
    const password = ref('')
    const poruka=ref({ error: false, message: '' })

    const prijava = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)

            userStore.setCurrentUserLogIn({
                email: userCredential.user.email,
                uid: userCredential.user.uid,
            })

            poruka.value.error = false;
            poruka.value.message = 'Korisnik prijavljen: ' + JSON.stringify(userCredential.user)

            router.push("/user")

        } catch (error) {
            poruka.value.error = true
            poruka.value.message = 'Greška pri prijavi: ' + error.message
        }
    }

    const router=useRouter()
    const userStore=useUserStore()

    // function prijava(){
    //     const pokusaj=userStore.login(username.value, password.value)
    //     if(!pokusaj){
    //         poruka.value="Račun ne postoji! Provjerite dali ste napravili grešku, ili idite na registraciju."
    //     }
    //     else{
    //         router.push("/user")
    //     }
    // }

</script>

<template>

     <form @submit.prevent="prijava">

        <nav>
        <RouterLink to="/signup">Registracija</RouterLink>
        </nav>

        <div class="flex flex-col items-center justify-center min-h-screen text-2xl bg-orange-100 text-orange-950 gap-6 p-6">
            <b>Prijava</b>

            <div>
                <b>Username:</b>
                <input type="text" class="border p-1" placeholder="Email..." v-model="email">
            </div>

            <div>
                <b>Lozinka:</b>
                <input type="text" class="border p-1" placeholder="Lozinka..." v-model="password">
            </div>

            <button class="border bg-orange-500 text-white hover:bg-orange-300 p-2" type="submit">Prijava</button>

            <div v-if="poruka.message" :class="poruka.error ? 'text-red-500' : 'text-green-600'">{{ poruka.message }}</div>

        </div>

     </form>

</template>