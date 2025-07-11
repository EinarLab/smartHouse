<script>
    export const prerender = true;

    import "$lib/css/reset-style.css";
    import "$lib/css/main.css";
    import "animate.css";

    import Navigation from "../components/Navigation.svelte";
    import Footer from "../components/Footer.svelte";
    import Possibilities from "../components/Possibilities.svelte";
    import Banner from "../components/Banner.svelte";
    import Categories from "../components/Categories.svelte";
    import Services from "../components/Services.svelte";
    import Projects from "../components/Projects.svelte";
    import Design from "../components/Design.svelte";
    import Feedback from "../components/Feedback.svelte";
    import Contacts from "../components/Contacts.svelte";
    import CompanyInfo from "../components/CompanyInfo.svelte";

    import {
        initIntersectionObserver,
        smoothScrollToHeading,
    } from "$lib/js/main.js";
    import { onMount } from "svelte";

    onMount(() => {
        initIntersectionObserver();
    });
</script>

<div id="wrapper">
    <button
        class="scroll-top"
        on:click={() => smoothScrollToHeading("heading0")}>⬆</button
    >

    <h1 id="heading0"></h1>

    <header class="header">
        <Navigation></Navigation>
        <Banner></Banner>
    </header>

    <main>
        <CompanyInfo></CompanyInfo>
        <Possibilities></Possibilities>

        <Categories></Categories>
        <Services></Services>
        <Projects></Projects>
        <Design></Design>
        <Feedback></Feedback>
        <Contacts></Contacts>
    </main>

    <Footer></Footer>
</div>
