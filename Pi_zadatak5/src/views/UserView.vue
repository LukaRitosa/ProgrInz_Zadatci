<script setup>
    import { RouterLink, useRouter } from 'vue-router'
    import { useUserStore } from '@/stores/userStore'
    import { ref } from 'vue'

    const username=ref("")    
    const email=ref("")    
    const password1=ref("")    
    const password2=ref("")  
    const poruka=ref("") 
    const password=ref("") 

    const router=useRouter()
    const userStore=useUserStore()

    const currentUser = userStore.currentUser

    function promjeni(){
        if(password1.value!==password2.value){
            poruka.value='Lozinke se ne podudaraju'
            return
        }

        const promjena=userStore.changepassword(password.value, password1.value)
        if(!promjena){
            if(password.value!==currentUser.password){
            poruka.value='Stara lozinka se ne podudara!'
            }
            else{
                poruka.value='Ista lozinka se već koristi!'
            }
            
        }
        else{
            router.push("/login")
        }
    }

    function odjava(){
        userStore.logout
        router.push("/login")
    }

    function obrisi(){
        const brisanje=userStore.deleteaccount(password.value, currentUser.email)
        if(!brisanje){
            poruka.value='Kriva lozinka'
        }
        else{
            router.push("/login")
        }
    }

</script>

<template>
    
    <div class="flex flex-col items-center justify-center h-screen bg-red-50 text-red-950 gap-6 p-6">
        
        <h1 class="text-3xl"> Korisnik: <b>{{ currentUser.username }}</b> </h1>
                

        <div class="flex gap-10">

            <div class="flex flex-col gap-4">
                <div>
                    <b>Email:</b>
                    <input type="text" class="border p-1" :placeholder="currentUser.email" readonly>
                </div>

                <div>   
                    <b>Trenutna Lozinka:</b>
                    <input type="text" class="border p-1" :placeholder="currentUser.password" v-model="password">
                </div>
                <button class="border bg-red-500 text-white hover:bg-red-300 p-2" @click="obrisi">Izbriši korisnički račun</button>
            </div>

            <div class="flex flex-col gap-4">
                <div>    
                    <b>Nova Lozinka:</b>
                    <input type="text" class="border p-1" placeholder="Nova lozinka..." v-model="password1">
                </div>
                
                <div>
                    <b>Ponovi lozinku:</b>
                    <input type="text" class="border p-1" placeholder="Ponovi novu lozinku..." v-model="password2">
                </div>            
                <button class="border bg-green-500 text-white hover:bg-green-300 p-2" @click="promjeni">Promjeni lozinku</button>
            </div>

        </div>

        <button class="border bg-yellow-500 text-white hover:bg-yellow-300 p-2" @click="odjava">Odjava</button>

        <div class="text-red-500">{{ poruka }}</div>
    </div>

</template>