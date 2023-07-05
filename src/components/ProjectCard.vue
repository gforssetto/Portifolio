<template>
    <figure class="Project-Card">
        <img :src="this.src" :alt="alt">
        <figcaption>
            <h4>{{ title }}</h4>
            <p>
                {{ description }}
            </p>
            <span>
                <a :href="this.git" class="fa-brands fa-github"></a>
                <a :href="this.web" class="fa-solid fa-globe"></a>
            </span>
        </figcaption>
    </figure>
</template>

<script>
export default {
    name:'ProjectCard',
    props:{
        src: [],
        alt:[],
        title:[],
        description:[],
        git:[],
        web:[]
    }
}
</script>