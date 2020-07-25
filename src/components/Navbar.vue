<template>
    <nav class="container">
        <div class="logo">
            <div>
                <h1>Valid</h1>
                <p>Truthful Resources</p>    
            </div>
        </div>
        <div>
            <h2>We Will Have A Peaceful World By Preventing The Spread Of Misinformation</h2>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Latest News</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    nav {
        color: black;
        display: grid;
        grid-template-columns: 30% 70%;

        div.logo {
            
            background: rgb(253, 212, 219);
            
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            
            h1 {
                font-size: 3rem;
                padding: 0.5rem 1rem;
            }
            p {
                text-align: center;
            }
        }

        div {
            display: grid;
            grid-template-columns: 1fr;

            h2 {
                background: whitesmoke;
                padding: 2rem 1rem;
                font-size: 1.6rem;
                text-align: center;
            }

            ul {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                background: pink;

                li {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 2.5rem;
                }
                a {
                    color: black;
                }
            }
        }
    }
</style>