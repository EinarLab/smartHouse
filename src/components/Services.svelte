<script>
    import ServicesItem from "./ServicesItem.svelte";
    import electricalDesign from "$lib/svg/electrical-design-of-internal-power-electrical-equipment.svg";
    import electricalDrawingSchemes from "$lib/svg/electrical-drawing-schemes.svg";
    import electricalDesignersSupervision from "$lib/svg/electrical-designers-supervision.svg";
    import electricalTechnicalSpecifications from "$lib/svg/electrical-technical-specifications.svg";
    import electricalShield from "$lib/svg/electrical-shield.svg";
    import electricalShieldSmartHouse from "$lib/svg/electrical-shield-smart-house.svg";
    import electricalSystemInstallationSmartHouse from "$lib/svg/electrical-system-installation-smart-house.svg";
    import electricalAssistance from "$lib/svg/electrical-assistance.svg";
    import electricalDesignProjects from "$lib/svg/electrical-design-projects.svg";

    const images = [
        electricalDesign,
        electricalDrawingSchemes,
        electricalDesignersSupervision,
        electricalTechnicalSpecifications,
        electricalShield,
        electricalShieldSmartHouse,
        electricalSystemInstallationSmartHouse,
        electricalAssistance,
        electricalDesignProjects,
    ];

    const texts = [
        "Проектирование внутреннего силового электрооборудования и электрического осведения (ЭОМ)",
        "Составление однолинейных схем и спецификаций к ним",
        "Организация и контроль реализации проекта электроснабжения (авторский надзор)",
        "Составление технического задания на проектирование ЭОМ",
        "Сборка электрощитов в соответствии с проектом, однолинейной схемой или спецификацией",
        'Сборка электрощитов с системой "Умный дом" Hite Pro',
        'Монтаж системы "Умный дом" Hite Pro',
        'Помощь с закупкой компелктующих для электрощитов, бренд "АВВ"',
        "Дизайн проектов",
    ];
</script>

<section class="services">
    <section class="services__info">
        <h1
            id="heading3"
            class="section__title services__section_title animated"
        >
            <span class="section__title_allocation">
                Разработали готовые<br />
                решения
            </span>
            для ускорения<br />
            выполнения заказов
        </h1>
    </section>

    <section class="services__item_container">
        <ServicesItem img={images[0]} text={texts[0]}></ServicesItem>
        <ServicesItem img={images[1]} text={texts[1]}></ServicesItem>
        <ServicesItem img={images[2]} text={texts[2]}></ServicesItem>
    </section>

    <section class="services__item_container">
        <ServicesItem img={images[3]} text={texts[3]}></ServicesItem>

        <ServicesItem img={images[4]} text={texts[4]}></ServicesItem>

        <ServicesItem img={images[5]} text={texts[5]}></ServicesItem>
    </section>

    <section class="services__item_container">
        <ServicesItem img={images[6]} text={texts[6]}></ServicesItem>

        <ServicesItem img={images[7]} text={texts[7]}></ServicesItem>

        <ServicesItem img={images[8]} text={texts[8]}></ServicesItem>
    </section>
</section>
