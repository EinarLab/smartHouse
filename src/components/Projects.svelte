<script>
    import ProjectsItem from "./ProjectsItem.svelte";

    import test from "$lib/projects/test.pdf";

    import project1Bg from "$lib/img/projects-background/БДБ.03.КФ-05.2025-ЭОM-КАФЕ.gif";
    import project2Bg from "$lib/img/projects-background/БДБ.05.ЧД-05.2025-ЭОM-ИЖС.jpg";
    import project3Bg from "$lib/img/projects-background/БДБ.15.ЧД-06.2025-ЭОM-ИЖС.jpg";
    import project4Bg from "$lib/img/projects-background/БДБ.15.ЧД-06.2025-ЭОM.jpg";
    import project5Bg from "$lib/img/projects-background/БДБ.20.КВ-06.2025-ЭОM-квартира.jpg";
    import project6Bg from "$lib/img/projects-background/БДБ.23.ЧД-06.2025-ЭОM-ИЖС.jpg";

    import project1 from "$lib/projects/БДБ.03.КФ-05.2025-ЭОM-КАФЕ.pdf";
    import project2 from "$lib/projects/БДБ.05.ЧД-05.2025-ЭОM-ИЖС.pdf";
    import project3 from "$lib/projects/БДБ.15.ЧД-06.2025-ЭОM-ИЖС.pdf";
    import project4 from "$lib/projects/БДБ.15.ЧД-06.2025-ЭОM.pdf";
    import project5 from "$lib/projects/БДБ.20.КВ-06.2025-ЭОM-квартира.pdf";
    import project6 from "$lib/projects/БДБ.23.ЧД-06.2025-ЭОM-ИЖС.pdf";

    const projects__logo = [
        project1Bg,
        project2Bg,
        project3Bg,
        project4Bg,
        project5Bg,
        project6Bg
    ]

    const projectNames = [
        "БДБ.03.КФ-05.2025-ЭОM-КАФЕ",
        "БДБ.05.ЧД-05.2025-ЭОM-ИЖС",
        "БДБ.15.ЧД-06.2025-ЭОM-ИЖС",
        "БДБ.15.ЧД-06.2025-ЭОM",
        "БДБ.20.КВ-06.2025-ЭОM-квартира",
        "БДБ.23.ЧД-06.2025-ЭОM-ИЖС"
    ]

    const projects = [
        project1,
        project2,
        project3,
        project4,
        project5,
        project6
    ]

</script>

<section class="projects">
    <section class="projects__info">
         <h1 id="heading4" class="section__title services__section_title animated">Проекты</h1>
    </section>


<section class="projects__item_container">

    <ProjectsItem 
        projectNumber={"1"}
        projectLogo={projects__logo[0]}
        projectItemName={projectNames[0]}
        projectLink={projects[0]}
    >
    </ProjectsItem>

    <ProjectsItem 
        projectNumber={"2"}
        projectLogo={projects__logo[1]}
        projectItemName={projectNames[1]}
        projectLink={projects[1]}
     >
    </ProjectsItem>

    <ProjectsItem 
        projectNumber={"3"}
        projectLogo={projects__logo[2]}
        projectItemName={projectNames[2]}
        projectLink={projects[2]}
        >
    </ProjectsItem>

    <ProjectsItem 
        projectNumber={"4"}
        projectLogo={projects__logo[3]}
        projectItemName={projectNames[3]}
        projectLink={projects[3]}
        >
    </ProjectsItem>

    <ProjectsItem 
        projectNumber={"5"}
        projectLogo={projects__logo[4]}
        projectItemName={projectNames[4]}
        projectLink={projects[4]}
    >
    </ProjectsItem>

    <ProjectsItem 
        projectNumber={"6"}
        projectLogo={projects__logo[5]}
        projectItemName={projectNames[5]}
        projectLink={projects[5]}
    >
    </ProjectsItem>
</section>

</section>