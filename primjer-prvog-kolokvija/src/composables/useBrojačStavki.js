import { ref } from 'vue'

const brojač = ref(0)

export function useBrojačStavki() {
    const postavi = (vrijednost) => brojač.value = vrijednost;
    return { brojač, postavi }
}