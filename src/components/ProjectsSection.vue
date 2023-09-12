<template>
    <section class="projectsSection row" id="portifolio">
        <SectionTitle :title="'My Projects'"/>
        <section class="Projects-Container">
            <ProjectCard :title="'Flex Page'" :alt="'Flex Blog'" :description="'CSS - HTML'" :src="'/img/Flex.png'" :git="'https://github.com/gforssetto/2023-03-Flex'" :web="'https://gforssetto.github.io/2023-03-Flex/'" />
            <ProjectCard :title="'Elegant Page'" :alt="'Elegant Blog'" :description="'CSS - HTML'" :src="'/img/Elegant.png'" :git="'https://github.com/gforssetto/2023-02-Elegant'" :web="'https://gforssetto.github.io/2023-02-Elegant/'" />
            <ProjectCard :title="'Delivery Page'" :alt="'Blog'" :description="'CSS - HTML'" :src="'/img/Delivery.png'" :git="'https://github.com/gforssetto/2030-03-Delivery'" :web="'https://gforssetto.github.io/2030-03-Delivery/'" />
            <!-- <ProjectCard :title="'Game Page'" :alt="'Blog'" :description="'CSS - HTML'" :src="'../img/test.3ad95538.png'" :git="'#'" :web="'#'" /> -->
            <!-- <ProjectCard :title="'Clothing Page'" :alt="'Blog'" :description="'Vue - PHP'" :src="'../img/test.3ad95538.png'" :git="'#'" :web="'#'" /> -->
        </section>
    </section>
</template>

<script>
import ProjectCard from './ProjectCard.vue';
import SectionTitle from './SectionTitle.vue';

export default {
    name:'ProjectsSection',
    components:{
        SectionTitle,
        ProjectCard
    }
}
</script>