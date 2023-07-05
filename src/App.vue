<template>
  <div>
    <HeaderSection />
    <AboutSection />
    <SkillSections />
    <ProjectsSection/>
    <ContactForm />
    <FooterSection />
  </div>
</template>

<script>
import AboutSection from './components/AboutSection.vue'
import ContactForm from './components/ContactForm.vue'
import FooterSection from './components/Footer.vue'
import HeaderSection from './components/Header.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillSections from './components/SkillSections.vue'

export default {
  name: 'App',
  components:{
    HeaderSection,
    FooterSection,
    SkillSections,
    AboutSection,
    ContactForm,
    ProjectsSection
  }

}
</script>

<style>
@import url('./css/style.css');
</style>
