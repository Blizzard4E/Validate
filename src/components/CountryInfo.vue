<template>
    <div class="container">
        <div class="card">
            <h1>Today:</h1>
            <p>Confirmed: {{info.Confirmed}}</p>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            info: {}
        }
    },
    mounted() {
        axios.get('https://api.covid19api.com/dayone/country/' + this.$route.params.country).then(res => {
            console.log(res.data);
            this.info = res.data.reverse()[0];
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