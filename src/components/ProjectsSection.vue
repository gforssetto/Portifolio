<template>
    <section class="projectsSection row" id="portifolio">
        <SectionTitle :title="'My Projects'"/>
        <section class="Projects-Container">
            <ProjectCard :title="'Blog Page'" :alt="'Blog'" :description="'CSS - HTML'" :src="'/img/test.3ad95538.png'" :git="'#'" :web="'#'" />
            <ProjectCard :title="'Delivery Page'" :alt="'Blog'" :description="'PHP'" :src="'/img/test.3ad95538.png'" :git="'#'" :web="'#'" />
            <ProjectCard :title="'Game Page'" :alt="'Blog'" :description="'CSS - HTML'" :src="'/img/test.3ad95538.png'" :git="'#'" :web="'#'" />
            <ProjectCard :title="'Clothing Page'" :alt="'Blog'" :description="'Vue - PHP'" :src="'/img/test.3ad95538.png'" :git="'#'" :web="'#'" />
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