<template>
    <aside>
        <h6>{{ this.title }}</h6>
        <span>
            {{ this.number }}
        </span>
    </aside>
</template>

<script>

export default {
    name:'SkillCards',
    props:{
        title:[],
        number:[]
    }

}
</script>
