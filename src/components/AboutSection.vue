<template>
    <section class="aboutSection row" id="about">
        <SectionTitle :title="'About Me'"/>
        <section>
            <p>
                Hello there! I am a motivated and dedicated full stack web developer with a passion for creating innovative and functional websites. Through personal projects and self-learning, I have built a strong foundation in web development. My ability to work well in a team, combined with an easygoing nature, allows me to thrive in collaborative environments. My goal is to leverage my skills and passion to make a positive impact and deliver exceptional results as a full stack web developer.
            </p>
        </section>
    </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue'

export default {
    name:'AboutSection',
    components:{
        SectionTitle
    }
}
</script>
