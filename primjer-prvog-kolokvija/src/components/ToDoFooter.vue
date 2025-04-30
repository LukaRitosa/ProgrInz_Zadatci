<template>
    <div class="flex items-center justify-center bg-neutral-900 text-stone-300 py-3">
        <slot/> - {{ new Date().getFullYear() }}©
    </div>  
</template>