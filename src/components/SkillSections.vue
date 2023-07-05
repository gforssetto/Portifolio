<template>
<section class="skillsSection row" id="skills">
    <SectionTitle :title="'Skills'"/>
    <section>
        <skill-cards :title="'CSS'" />
        <skill-cards :title="'HTML'"/>
        <skill-cards :title="'JS'" />
        <skill-cards :title="'vue.JS'"/>
        <skill-cards :title="'React'" />
        <skill-cards :title="'PHP'" />
        <skill-cards :title="'SQL'" />
    </section>
</section>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
import SkillCards from './SkillCards.vue'

export default {
    name:'SkillSection',
    components:{
        SkillCards,
        SectionTitle
    }
}
</script>
