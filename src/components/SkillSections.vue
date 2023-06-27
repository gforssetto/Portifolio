<template>
<section class="skillsSection row" id="skills">
    <SectionTitle :title="'Skills'"/>
    <section>
        <skill-cards :title="'CSS'" :number="'90%'"/>
        <skill-cards :title="'HTML'" :number="'100%'"/>
        <skill-cards :title="'JS'" :number="'80%'"/>
        <skill-cards :title="'PHP'" :number="'90%'"/>
        <skill-cards :title="'SQL'" :number="'90%'"/>
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
