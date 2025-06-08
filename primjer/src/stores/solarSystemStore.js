import { defineStore } from 'pinia'
import solarSystemData from '@/data/solarSystemData'

export const useSolarSystemStore = defineStore('solarSystemStore', {
  state: () => ({
    planets: solarSystemData.planets,
    currentPlanet: null,
    currentSatellite: null
  }),
  actions: {
    getPlanets() {
        return this.planets
    },

    getPlanet(planetName){
        const planet=this.planets.find(p => p.name.toLowerCase() === planetName.toLowerCase())
        this.currentPlanet = planet || null
        return this.currentPlanet        
    },

    getSatellite(planetName, satelliteName){
        const planet=this.getPlanet(planetName)
        if (!planet || !planet.satellites) {
            this.currentSatellite = null
            return null
        }
        const satellite=planet.satellites.find(s => s.name.toLowerCase() === satelliteName.toLowerCase())
        this.currentSatellite=satellite || null
        return this.currentSatellite
    }

    }
})