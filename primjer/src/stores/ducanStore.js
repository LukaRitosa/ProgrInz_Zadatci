import { defineStore } from 'pinia'
import proizvodiData from '@/data/proizvodiData.js'

export const useDucanStore = defineStore('ducanStore', {
    state:()=>({
        products: proizvodiData.proizvodi,
        cart: []
    }),
    actions:{
        addToCart(product){
            const proizvod=this.products.find(p => p.name==product.name && p.price==product.price)
            if(proizvod){
                this.cart.push(proizvod)
            }
            else{
                console.log("Greška")
                return
            }
            
        }, 
        removeFromCart(index){
            const i=this.cart.findIndex(p=> p.i==index)
            if(i){
                this.cart.splice(index,1)
            }
            else{
                console.log("Greška")
                return
            }
        },
        addProduct(product){
            this.products.push(product)
        },
        removeProduct(index){
            const proizvod=this.products[index]
            // const i=this.products.findIndex(p=> p.i==index)
            // if(i){
            //     this.products.splice(index,1)
            // }
            if(proizvod){
                this.products.splice(index,1)
                this.cart=this.cart.filter(p=>!(p.name==proizvod.name && p.price==proizvod.price))
            }
            else{
                console.log("Greška")
                return
            }
        }
    }
})