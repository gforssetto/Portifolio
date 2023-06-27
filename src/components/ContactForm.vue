<template>
    <section class="formSection row" id="contact">
        <SectionTitle :title="'Contact Me'"/>
        <form action="#">
            <input type="text" name="name" id="name" placeholder="Your Name">
            <select name="subject" id="subject">
                <option value="none" selected disabled>Select One</option>
                <option value="bussiness">Bussines</option>
                <option value="others">Others...</option>
            </select>
            <textarea name="message" id="message">
            </textarea>
        </form>
    </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue'

export default {
    name:'ContactForm',
    components:{
        SectionTitle
    }
}
</script>