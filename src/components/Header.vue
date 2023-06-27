<template>
    <header id="header">
        <nav-section />
        <section>
            <h1>
                Guilherme Forssetto Correa
            </h1>
            <h3>
                Full stack Developer
            </h3>
        </section>
    </header>
</template>

<script>

    import NavSection from './Nav.vue';

    export default {

        name:'HeaderSection',
        components:{
            NavSection
        }
    }

</script>
