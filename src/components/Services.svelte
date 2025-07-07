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

    <section class="services__item_content">
        <section class="services__item_container">
            <ServicesItem
                img={images[0]}
                text={texts[0]}
                servicesItemOptions={[
                    "Определение электрических нагрузок и мощностей",
                    "Разработка схем распределения электроэнергии",
                    "Проектирование системы внутреннего электроосвещения",
                    "Оформление проектной документации",
                    "Расчет и проектирование систем защиты и заземления",
                ]}
            ></ServicesItem>
            <ServicesItem
                img={images[1]}
                text={texts[1]}
                servicesItemOptions={[
                    "Получение технических условий (ТУ) от поставщика электроэнергии",
                    "Расчет электрических нагрузок и подбор оборудования",
                    "Разработка однолинейной схемы",
                    "Составление спецификаций",
                    "Согласование и корректировка схемы",
                ]}
            ></ServicesItem>
            <ServicesItem
                img={images[2]}
                text={texts[2]}
                servicesItemOptions={[
                    "Планирование и организация работ авторского надзора",
                    "Проверка соответствия выполненных работ проектной документации",
                    "Документирование и ведение журнала авторского надзора",
                    "Консультирование и взаимодействие с подрядчиками и заказчиком",
                    "Участие в приемке и сдаче объекта",
                ]}
            ></ServicesItem>
        </section>

        <section class="services__item_container">
            <ServicesItem
                img={images[3]}
                text={texts[3]}
                servicesItemOptions={[
                    "Сбор исходных данных и обследование объекта",
                    "Формулирование требований заказчика",
                    "Разработка технических параметров проекта",
                    "Оформление технического задания в виде документа",
                    "Согласование и утверждение технического задания с заказчиком",
                ]}
            ></ServicesItem>
            <ServicesItem
                img={images[4]}
                text={texts[4]}
                servicesItemOptions={[
                    "Оценка и формирование групп потребителей",
                    "Подготовка и монтаж корпуса щита",
                    "Установка и крепление модульных компонентов",
                    "Подключение и маркировка проводов",
                    "Проверка и испытание собранного щита",
                ]}
            ></ServicesItem>
            <ServicesItem
                img={images[5]}
                text={texts[5]}
                servicesItemOptions={[
                    "Установка блока радиореле HiTE PRO в электрощит",
                    "Подключение модулей и интеграция с электрооборудованием",
                    "Настройка шлюза умного дома (HiTE PRO Gateway)",
                    "Маркировка и аккуратная прокладка проводов внутри щита",
                    "Проверка работоспособности и тестирование системы",
                ]}
            ></ServicesItem>
        </section>

        <section class="services__item_container">
            <ServicesItem
                img={images[6]}
                text={texts[6]}
                servicesItemOptions={[
                    "Монтаж и настройка датчиков и исполнительных устройств",
                    "Прокладка и маркировка кабелей, обеспечение электробезопасности",
                    "Настройка и привязка устройств к серверу умного дома HiTE PRO Gateway",
                    "Установка и подключение блоков радиореле HiTE PRO",
                    "Тестирование и запуск системы",
                ]}
            ></ServicesItem>
            <ServicesItem
                img={images[7]}
                text={texts[7]}
                servicesItemOptions={[
                    "Консультация по подбору оборудования ABB",
                    "Подбор аксессуаров и монтажных элементов",
                    "Обеспечение совместимости и качества",
                    "Организация закупки и логистики",
                    "Техническая поддержка и сопровождение",
                ]}
            ></ServicesItem>
            <ServicesItem
                img={images[8]}
                text={texts[8]}
                servicesItemOptions={[
                    "Разработка визуального оформления проектной документации",
                    "Создание удобных и информативных графических материалов",
                    "Соблюдение нормативных требований и стандартов",
                    "Оптимизация структуры и логики подачи информации",
                    "Подготовка презентационных материалов",
                ]}
            ></ServicesItem>
        </section>
    </section>
</section>
