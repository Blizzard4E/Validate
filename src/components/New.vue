<template>
    <div class="container">
        <div class="card" v-for="country in countries" :key="country.id">
            <router-link :to=" '/info/' + country.Slug"><h3>{{country.Country}}</h3></router-link>
            <p>{{country.Slug}}</p>
            <p>{{country.ISO2}}</p>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            countries: []
        }
    },
    mounted() {
        axios.get('https://api.covid19api.com/countries').then(res => {
            console.log(res.data);
            this.countries = res.data;
        })
    }
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

    * {
        color: white;
        font-family: 'Montserrat';
    }
    .card {
        margin: 1rem;
    }
</style>