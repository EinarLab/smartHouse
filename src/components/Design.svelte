<script>
    import DesignItem from "./DesignItem.svelte";

    import DesignItemBg1 from "$lib/img/design/Дизайн-проект_квартиры.jpg";

    const designBgs = [
        DesignItemBg1
    ]

    const designTexts = [
        'Дизайн-проект квартиры',
        'Дизайн-проект квартиры ЖК "Сармановский',
        'Дизайн-проект квартиры ЖК "Притяжение"',
        'Реконструкция частного дома Габишего'
    ];

    const designProjects = [
        "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FRR8WEMwxv1p1xNYAVYhuOXbooJmiHD2IhdJ5EMgmkRSEAb2IAel8TJynSPAAKgqKq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=%D0%A1%D0%B0%D0%B2%D0%B8%D0%BD%D0%A5%D0%B0%D1%83%D1%81_.pdf&nosw=1",
        "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FAtjr%2FG%2Bo8td2Ga59oKs9eicQfwDla8PZBvGQYb9ClcBYG%2B%2F3MjCbb19yuEsWGF4xq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=%D0%96%D0%9A%20%D0%A1%D0%B0%D1%80%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9.pdf&nosw=1",
        "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2F12p5WH%2Bx2sELBWTFCA63hPVAn9rSE%2FguLrN%2FxhntGJjPaQfTueGU1EoTI%2B%2BU9zJEq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=%D0%96%D0%9A%20%D0%9F%D1%80%D0%B8%D1%82%D1%8F%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC_.pdf&nosw=1",
        "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FBExuSusfEwRHV0v1PMpO0z%2Fo6qoYQ9oenzsJr2PT5PVR52tooOn2z3MHVQDYt9IDq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC%20%D0%B0.%D0%BA%D1%83%D1%82%D1%83%D1%8F.pdf&nosw=1",
    ]
</script>

<section class="design">
    <section class="design__info">
         <h1 id="heading5" class="section__title animated animate__animated animate__fadeIn">Дизайны</h1>
    </section>

    <section class="design__item_container">
        <DesignItem 
            designItemBg={designBgs[0]}
            designItemText={designTexts[0]}
            designItemProject={designProjects[0]}
        >
        </DesignItem>

        <DesignItem 
            designItemText={designTexts[1]}
            designItemProject={designProjects[1]}
        >
        </DesignItem>

        <DesignItem 
            designItemText={designTexts[2]}
            designItemProject={designProjects[2]}
        >
        </DesignItem>

        <DesignItem 
            designItemText={designTexts[3]}
            designItemProject={designProjects[3]}
        >
        </DesignItem>
    </section>
</section>

<style>
    .design {
        margin-bottom: 5vw;

        padding-top: 1vw;
        padding-bottom: 1vw;
        padding-left: 4vw;
        padding-right: 4vw;

        width: 100%;
        height: auto;

        display: flex;
        flex-direction: column;
}

    .design__item_container {
        width: 100%;
        height: auto;

        display: grid; 
        grid-template-columns: repeat(2, 1fr);
        gap: 1vw;

        box-sizing: border-box;
    }

    @media only screen and (max-width: 600px) {
        .design__item_container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10vw;
        }
    }
</style>