<script setup>

    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { useUserStore } from '@/stores/userStore'
    import { updatePassword, signOut } from 'firebase/auth'
    import { auth } from '@/firebase.js'

    const router = useRouter()
    const userStore = useUserStore()

    const password1 = ref("")
    const password2 = ref("")
    const poruka = ref("")

    const currentUser = userStore.currentUser

    const promijeniLozinku = async () => {
        if(password1.value!==password2.value){
            poruka.value='Lozinke se ne podudaraju'
            return
        }

        
        try{
            await updatePassword(auth.currentUser, password1.value)

            await signOut(auth)
            userStore.logout()

            router.push("/")
        }
        catch (err) {
            console.error(err)
            poruka.value = "Došlo je do greške pri promjeni lozinke!"
        }   
    }


</script>


<template>


        <div class="flex flex-col items-center justify-center h-screen gap-6 p-4 bg-blue-50 text-blue-900">
            <h1 class="text-2xl">Promjena lozinke:</h1>


            <form @submit.prevent="promijeniLozinku" class="flex flex-col gap-4 w-80">
                <input type="text" class="border p-2" placeholder="Nova lozinka" v-model="password1">
                <input type="text" class="border p-2" placeholder="Ponovi novu lozinku" v-model="password2">
                <button class="bg-blue-600 text-white p-2 hover:bg-blue-400" type="submit">Spremi</button>
            </form>

            <div class="text-red-500">{{ poruka }}</div>
        </div>

</template>