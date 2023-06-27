<template>
    <article>
        <h3>{{ this.title }}</h3>
        <hr>
    </article>
</template>

<script>

export default {
    name:'SectionTitle',
    props:{
        title:[]
    }
}
</script>
