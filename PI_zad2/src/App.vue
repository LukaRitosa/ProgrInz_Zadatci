<template>
  <div id="app">
    <h1>Podaci o korisniku</h1>
    <div :class="isAdmin ? 'korisnik-admin' : 'korisnik-obican'">
      <p><strong>Ime i prezime:</strong> {{ korisnik.osobni_podaci.ime }} {{ korisnik.osobni_podaci.prezime }}</p>
      <p><strong>Adresa:</strong> {{ korisnik.osobni_podaci.adresa.ulica }} {{ korisnik.osobni_podaci.adresa.broj }}, {{ korisnik.osobni_podaci.adresa.grad }}</p>
      <p><strong>Telefon:</strong> {{ korisnik.osobni_podaci.broj_telefona }}</p>
    </div>

    <h2>Košarica</h2>
    <ul>
      <li v-for="(item, index) in korisnik.kosarica" :key="index" :class="{ 'najskuplja': isNajskupljaStavka(item) }">
        <img :src="getSlika(item.naziv)" :alt="item.naziv" width="40" height="40">
        <span>{{ item.naziv }} - Jedinična cijena: {{ dohvatiCijenu(item.naziv) }} HRK - Količina: {{ item.količina }} - Ukupna cijena: {{ ukupnaCijenaStavke(item) }} HRK</span>
      </li>
    </ul>

    <h3>Ukupna cijena: {{ sveukupnaCijena() }} HRK</h3>
    <h3>Najskuplja stavka: {{ najskupljaStavka().naziv }}</h3>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      slike: {
        "Jabuka": "https://www.svgrepo.com/show/530203/apple.svg",
        "Mrkva": "https://www.svgrepo.com/show/530216/carrot.svg",
        "Sir": "https://www.svgrepo.com/show/530219/cake.svg",
        "Kruh": "https://www.svgrepo.com/show/530223/bread.svg"
      },
      proizvodi: [
        { naziv: "Jabuka", cijena: 0.25 },
        { naziv: "Mrkva", cijena: 0.12 },
        { naziv: "Kruh", cijena: 2.00 },
        { naziv: "Sir", cijena: 4.48 }
      ],
      korisnik: {
        jeAdmin: true,
        osobni_podaci: {
          ime: "Marko",
          prezime: "Krivić",
          adresa: {
            grad: "Pula",
            ulica: "Veruda",
            broj: 32
          },
          broj_telefona: "+091-123-456"
        },
        kosarica: [
          { naziv: "Jabuka", količina: 4 },
          { naziv: "Mrkva", količina: 12 },
          { naziv: "Sir", količina: 1 },
          { naziv: "Kruh", količina: 3 }
        ]
      }
    };
  },
  computed: {
    isAdmin() {
      return this.korisnik.jeAdmin;
    }
  },
  methods: {
    dohvatiCijenu(naziv) {
      const proizvod = this.proizvodi.find(p => p.naziv === naziv);
      return proizvod ? proizvod.cijena : 0;
    },
    ukupnaCijenaStavke(item) {
      return this.dohvatiCijenu(item.naziv) * item.količina;
    },
    sveukupnaCijena() {
      return this.korisnik.kosarica.reduce((acc, item) => {
        return acc + this.ukupnaCijenaStavke(item);
      }, 0);
    },
    najskupljaStavka() {
      let najskuplja = this.korisnik.kosarica[0];
      let maxCijena = this.ukupnaCijenaStavke(najskuplja);

      for (let i = 1; i < this.korisnik.kosarica.length; i++) {
        const item = this.korisnik.kosarica[i];
        const ukupnaCijenaStavke = this.ukupnaCijenaStavke(item);
        if (ukupnaCijenaStavke > maxCijena) {
          najskuplja = item;
          maxCijena = ukupnaCijenaStavke;
        }
      }
      return najskuplja;
    },
    getSlika(naziv) {
      return this.slike[naziv];
    },
    isNajskupljaStavka(item) {
      return item === this.najskupljaStavka();
    }
  }
};
</script>

<style scoped>
.korisnik-admin {
  color: blue;
}
.korisnik-obican {
  color: black;
}
.najskuplja {
  color: red;
}
</style>
