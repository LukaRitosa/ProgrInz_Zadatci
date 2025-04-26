<script setup>

    import Tekst from '@/components/JustifiedTextSection.vue'
    import Crta from '@/components/Separator.vue'

</script>

<template>
    <div  class="grow flex flex-col gap-4">
        <h1 class="text-indigo-100 text-2xl text-center font-medium mt-2">
            <Tekst text="SLIKA"/>
        </h1>
        
                
        <Crta/>

        <section class="grid grid-cols-2 items-center text-justify">
            <p>
                <Tekst text="Za ovaj dio projekta trebali smo urediti sliku.Koristit ćemo program GIMP, 
                pomoću kojeg ćemo izraditi dizajn majice i detaljno opisati postupak izrade."/>
            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/The_GIMP_icon_-_gnome.svg/1200px-The_GIMP_icon_-_gnome.svg.png" alt="gimp logo"
                class="h-24 w-full object-contain">
        </section>
        
        <Crta/>

        <section class="flex w-full items-center">
            <img src="@/assets/images/shirt.png" alt="shirt"
                class="h-52 grow object-contain">
            <img src="@/assets/images/layers.png" alt="layers"
                class="h-32 grow object-contain">
        </section>

        <Crta/>

        <section class="text-justify flex flex-col gap-2">
            <Tekst text="Koraci izrade:"/>
            <ol class="flex flex-col gap-1 list-decimal pl-8">
                <li>
                    <Tekst text="Priprema podloge"/>
                    <ul class="list-disc pl-8">
                        <li>
                            <Tekst text="Otvara se slika crne majice u GIMP-u kao osnovna podloga."/>                                    
                        </li>
                        <li>
                            <Tekst text="Dodaje se nova prozirna slojna maska za područja na kojima će se crtati ili dodavati elementi."/>
                        </li>
                    </ul>
                </li>

                <li>
                    <Tekst text="Dodavanje dizajna"/>
                    <ul class="list-disc pl-8">
                        <li>
                            <Tekst text="Grafika (npr. prirodni motiv s planinama) uvozi se kao novi sloj."/>
                        </li>
                        <li>
                            <Tekst text="Veličina grafike podešava se pomoću alata Scale Tool kako bi odgovarala prednjem dijelu majice."/>
                        </li>
                        <li>
                            <Tekst text="Dizajn se postavlja unutar sloja povezanog s majicom."/>
                        </li>
                    </ul>
                </li>

                <li>
                    <Tekst text="Tekstualni elementi"/>
                    <ul class="list-disc pl-8">
                        <li>
                            <Tekst text='Pomoću alata Text Tool dodaje se natpis "NATURE" iznad grafike.'/>
                        </li>
                        <li>
                            <Tekst text="Odabire se font i boja teksta koji odgovaraju prirodnom stilu dizajna."/>
                        </li>
                        <li>
                            <Tekst text="Tekst se prilagođava veličinom i pozicijom kako bi bio centriran."/>
                        </li>
                    </ul>
                </li>
                        
                <li>
                    <Tekst text="Detalji rukava"/>
                    <ul class="list-disc pl-8">
                        <li>
                            <Tekst text="Kreira se novi sloj u kombinaciji s maskom za crtanje detalja na rukavima."/>
                        </li>
                        <li>
                            <Tekst text="Koristi se četka (Brush Tool) s prilagođenim uzorkom za dodavanje teksture na rubove rukava."/>
                        </li>
                        <li>
                            <Tekst text="Neprozirnost i boja četke podešavaju se kako bi dizajn izgledao prirodno."/>
                        </li>
                    </ul>
                </li>
            </ol>

        </section>

        <Crta/>
        
        <section class="grid grid-cols-2 text-justify">
            
            <div class="text-justify flex flex-col gap-2">
                <Tekst text="Izgled maske korištene za crtanje detalja unutar majice:"/>
                <ul class="flex flex-col justify-center list-disc pl-8 h-full gap-2 pb-8">
                    <li>
                        <Tekst text="Crna boja = prozirno"/>
                    </li>
                    <li>
                        <Tekst text="Bijela boja = vidljivo"/>
                    </li>
                </ul>
            </div>

            <img src="@/assets/images/mask.png" alt="mask"
                class="h-48 w-full object-contain">

        </section>
    </div>
</template>