<script setup>
    
    import Tekst from '@/components/JustifiedTextSection.vue'
    import Crta from '@/components/Separator.vue'


</script>

<template>

    <div  class="grow flex flex-col gap-4">
        <h1 class="text-indigo-100 text-2xl text-center font-medium mt-2">
            <Tekst text="GRAFIKA"/>
        </h1>
        
        <Crta/>

        <section class="grid grid-cols-2 items-center text-justify">
            <p>            
            <Tekst text="Za ovaj dio projekta izrađena je vektorska grafika. Koristit će se program Inkscape, 
                pomoću kojeg će se izraditi dizajn mačke, uz detaljan opis postupka izrade."/>
            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Inkscape_Logo.svg/1200px-Inkscape_Logo.svg.png" alt="inkscape logo"
            class="h-24 w-full object-contain">
        </section>
        
        <Crta/>

        <section class="flex w-full items-center">
            <img src="@/assets/images/cats.png" alt="figma logo"
                class="h-64 grow object-contain">
        </section>

        <Crta/>
        
        <section class="text-justify flex flex-col gap-2">
            <Tekst text=" Koraci izrade:"/>
            <ol class="flex flex-col gap-1 list-decimal pl-8">
                <li>
                    <Tekst text="Priprema dokumenta"/>
                    <ul class="list-disc pl-8">
                        <li>
                            <Tekst text="Otvori se novi dokument u Inkscapeu i postavi odgovarajuće dimenzije canvas-a. "/>                                
                        </li>
                        <li>
                            <Tekst text=" Kreiraju se tri sloja: Obris, Pozadina, i Efekti za bolje upravljanje elementima."/>
                        </li>
                    </ul>
                </li>

                <li>
                    <Tekst text="Dodaje se gotovi obris mačke"/>
                    <ul class="list-disc pl-8">
                        <li>
                            <Tekst text="Boja obrisa postavlja se na crvenu."/>
                        </li>
                    </ul>
                </li>

                <li>
                    <Tekst text="Dodavanje pozadine"/>
                    <ul class="list-disc pl-8">
                        <li>
                            <Tekst text=" Na sloj Pozadina dodaje se pravokutnik koji prekriva cijelu površinu platna."/>
                        </li>
                        <li>
                            <Tekst text=" Primjenjuje se gradijent (linearni ili radijalni) pomoću alata Gradient Tool (Ctrl+F1), 
                            s nijansama koje prelaze od svijetle ružičaste do ljubičaste."/>
                        </li>
                        <li>
                            <Tekst text="Oblik mačke kopira se (Ctrl+C), a zatim zalijepi (Ctrl+V) unutar sloja Pozadina 
                            kako bi se koristio kao maska."/>
                        </li>
                    </ul>
                </li>
                
                <li>
                    <Tekst text="Primjena maske"/>
                    <ul class="list-disc pl-8">
                        <li>
                            <Tekst text="Izabere se oblik mačke na sloju Pozadina i grupira (Ctrl+G) s gradijentom."/>
                        </li>
                        <li>
                            <Tekst text="Maskiranje se primjenjuje putem opcije Set Clip ili Set Mask u izborniku Object."/>
                        </li>
                        <li>
                            <Tekst text=" Na ovaj način pozadina je ograničena na unutar obrisa mačke."/>
                        </li>
                    </ul>
                </li>
                
                <li>
                    <Tekst text="Dodavanje efekata i sjena"/>
                    <ul class="list-disc pl-8">
                        <li>
                            <Tekst text=" Na sloj Efekti dodaje se duplicirani oblik mačke, koji se zatim malo pomiče 
                            prema dolje i desno kako bi se stvorila sjena."/>
                        </li>
                        <li>
                            <Tekst text="Sjena se popuni tamnijom nijansom postojeće pozadine i smanji joj se 
                            neprozirnost (Opacity) putem izbornika Fill and Stroke."/>
                        </li>
                        <li>
                            <Tekst text="Dodatno, unutar sloja Efekti, koriste se prilagodbe gradijenta i 
                            blagog zamućenja (Blur) kako bi se naglasili detalji na tijelu mačke."/>
                        </li>
                    </ul>
                </li>
            </ol>

        </section>
    </div>
</template>