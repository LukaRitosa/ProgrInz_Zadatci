import { defineStore } from "pinia"

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [], 
    currentUser: null 
  }),
  persist: true,
  actions: {

    setCurrentUserSignUp(user) {
      this.currentUser = user
    },

    setCurrentUserLogIn(user) {
      this.currentUser = user
    },

    
    // signup(username, email, password){
    //   if(this.users.some(u => u.username === username || u.email === email)){
    //     console.log("Korisnik već postoji.")
    //     return false
    //   }
    //   else{
    //     const user= {username, email, password}
    //     this.users.push(user)
    //     this.currentUser = user
    //     return true
    //   }
    // },
    
    // login(username, password){
    //   const user= this.users.find(u =>u.username==username && u.password==password)
    //   if(!user){
    //     console.log("Korisnik ne postoji.")
    //     return false
    //   }
    //   else{
    //     this.currentUser=user
    //     return true
    //   }
    // },

    logout() {
      this.currentUser=null
    },
    
    // changepassword(staraLoz, novaLoz){
    //   if(this.currentUser.password===staraLoz && staraLoz!==novaLoz){
    //     const user=this.users.find(u =>u.username==this.currentUser.username)
    //     user.password=novaLoz
    //     console.log("Uspješno promjenjena lozinka")
    //     this.logout()
    //     return true
    //   }
    //   else{
    //     return false
    //   }
    // },

    // deleteaccount(password, email){
    //   if(this.currentUser.password!=password && this.currentUser.email!=email){
    //     console.log("Greška")
    //     return false
    //   }
    //   else{
    //       this.users = this.users.filter(u => u.password !== password && u.email !== email)
    //       console.log("uspješno obrisan račun")
    //       this.logout()
    //       return true
    //   }
    // }
  }
})