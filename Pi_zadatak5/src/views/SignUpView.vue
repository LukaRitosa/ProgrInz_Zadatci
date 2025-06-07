<script setup>
    import { RouterLink, useRouter } from 'vue-router'
    import { useUserStore } from '@/stores/userStore'
    import { ref } from 'vue'
    import { createUserWithEmailAndPassword } from 'firebase/auth'
    import { auth } from '@/firebase.js'
    
    const username=ref("")    
    const email=ref("")    
    const password=ref("")    
    const password2=ref("")  
    const poruka=ref({ error: false, message: '' })      

    const router=useRouter()
    const userStore=useUserStore()

//     function registracija(){
//         if(password1.value!==password2.value){
//             poruka.value='Lozinke se ne podudaraju'
//             return
//         }
//         const da=userStore.signup(username.value, email.value, password1.value)
//         if(da){
//             router.push("/user")
//         }
//         else{
//             poruka.value='Račun već postoji, idite na prijavu.'
//         }
//     }

    
    const registracija = async () => {
        if(password.value!==password2.value){
            poruka.value.error = true
            poruka.value.message = 'Lozinke se ne podudaraju'
            return
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)

            userStore.setCurrentUserSignUp({
                username: username.value,
                email: userCredential.user.email,
                uid: userCredential.user.uid
            })

            poruka.value = { error: false, message: 'Korisnik registriran!' }
            router.push('/user')
        } catch (error) {
            poruka.value = { error: true, message: 'Greška: ' + error.message }
        }
    }


</script>

<template>

     <form @submit.prevent="registracija">

        <nav>
        <RouterLink to="/">Prijava</RouterLink>
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
                <input type="text" class="border p-1" placeholder="Lozinka..." v-model="password">
            </div>
            
            <div>
                <b>Ponovi lozinku:</b>
                <input type="text" class="border p-1" placeholder="Ponovi lozinku..." v-model="password2">
            </div>

            <button class="border bg-blue-500 text-white hover:bg-blue-300 p-2" type="submit">Registracija</button>

            <div v-if="poruka.message" :class="poruka.error ? 'text-red-500' : 'text-green-600'">{{ poruka.message }}</div>
        
        </div>

     </form>

</template>