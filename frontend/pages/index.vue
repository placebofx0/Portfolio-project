<script setup>
useHead({
    title: 'Kanit Wongwiengkan\'s portfolios',
    meta: [
        { name: 'description', content: 'Kanit Wongwiengkan\'s portfolios.' }
    ],
})

const experiences = [{
            "logo": "https://www.dermscanasia.com/wp-content/uploads/2019/07/dermscan-01-s.png",
            "title": "Operation technician",
            "company" : "Dermscan Asia",
            "type": "fulltime",
            "start": "2021-06-01T00:00:00.000+07:00",
            "end": null,
            "skills": [ 
                "Word",
                "Excel" ],
            "detail": "- Provide support to researchers in conducting product research based on customer requirements."
},/*{
            "logo": "https://www.dermscanasia.com/wp-content/uploads/2019/07/dermscan-01-s.png",
            "title": "Operation technician",
            "company" : "Dermscan Asia",
            "type": "fulltime",
            "start": "2021-06-01T00:00:00.000+07:00",
            "end": null,
            "skills": [ 
                "Word",
                "Excel" ],
            "detail": "- Support researcher"},*/];

function isExperienceVisible(index) {
    return true;
}

</script>

<template>

    <section class="mb-10">
        <SkillList 
        :skills="['Word', 'Excel', 'Photoshop', 'Illustrator', 'Premiere pro', 'Html', 'CSS']"
        :can-edit="true"/>
    </section>

    <section class="mb-10">
        <ExperienceList 
            :experiences="experiences"
            :can-edit="true"
            :has-more-experiences="true"
            :is-experience-visible="isExperienceVisible"
        />
    </section>
</template>