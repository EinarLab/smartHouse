<script>
      import Possibility from "./Possibility.svelte";
        import light                                                     from "$lib/img/possibilities/light.jpg";
  import climat                                                    from "$lib/img/possibilities/climat.jpg";
  import security                                                  from "$lib/img/possibilities/security.jpg";
  import devices                                                   from "$lib/img/possibilities/devices.jpg";
  import multimedia                                                from "$lib/img/possibilities/multimedia.jpg";
  import smarthouse                                                from "$lib/img/possibilities/smarthouse.jpg";

    let categoriesName = "Электроснабжение";

    const listLighting = [
    "Электроснабжение — основа комфорта и безопасности вашего дома. Современные системы обеспечивают стабильное и надежное питание всех устройств, создавая удобную и безопасную среду для жизни.", 
    "⚡ Стабильное питание", 
    "🔋 Энергоэффективность и экономия", 
    "📊 Умный контроль и мониторинг",
    "🌐 Интеграция с умным домом"
]


const listClimateControl = [
  "Схемотехника включает разработку однолинейных схем и спецификаций, которые являются основой для проектирования и анализа электрических систем. Точные схемы обеспечивают правильное распределение электроэнергии и упрощают обслуживание оборудования.",
  "📐 Проектирование однолинейных схем",
  "📋 Создание спецификаций",
  "⚡ Управление электроснабжением",
  "🔧 Обеспечение надежности и безопасности",
  "🛠️ Оптимизация и стандартизация проектов"
];

const listSecurity = [
  "Авторский надзор обеспечивает контроль за соответствием выполнения проекта установленным требованиям и стандартам. Специалисты следят за качеством работ, соблюдением технической документации и сроков, что помогает избежать ошибок и повысить надежность объекта.",
  "👷 Контроль качества выполнения работ",
  "📋 Проверка соответствия проектной документации",
  "⏱️ Соблюдение сроков и этапов строительства",
  "🔍 Выявление и устранение несоответствий",
  "🤝 Взаимодействие с подрядчиками и заказчиками"
];

const listDevices = [
  "Дизайн проектов включает разработку концепций, планов и визуализаций, которые помогают создать эффективные и функциональные решения. Хороший дизайн учитывает технические требования, эстетические особенности и удобство эксплуатации.",
  "🎨 Креативные концепции",
  "📐 Техническое проектирование",
  "🖥️ Визуализация и моделирование",
  "🤝 Взаимодействие с заказчиком",
  "🔄 Адаптация и доработка"
];

const listMultimedia = [
  "Сборка электрощитов включает монтаж и подключение электрических компонентов для обеспечения надежного и безопасного распределения электроэнергии. Качественно собранный электрощит обеспечивает защиту оборудования и удобство эксплуатации всей электрической системы.",
  "🔌 Монтаж электрических компонентов",
  "🛡️ Установка защитных устройств",
  "⚙️ Компоновка и маркировка схем",
  "🔧 Тестирование и наладка",
  "📋 Соответствие нормативам и стандартам"
];
  
  const listSmarthouse = ["Беспроводные технологии играют ключевую роль в современных умных домах, обеспечивая гибкость, удобство и расширяемость системы. Благодаря Wi-Fi, Bluetooth, Zigbee, Z-Wave и другим стандартам связи, устройства в умном доме могут быть легко подключены к центральному контроллеру или маршрутизатору без необходимости прокладывать провода, что делает установку и настройку легкой и удобной. Пользователи могут добавлять новые устройства в систему без лишних трудностей, расширяя функциональность и умные возможности дома по мере необходимости. Беспроводные технологии также обеспечивают возможность управления умным домом из любой точки мира через интернет, что позволяет мониторить и контролировать систему удаленно через мобильные устройства. Все это делает беспроводные умные дома привлекательным выбором для тех, кто ценит современные технологии, удобство использования и гибкость в настройке своего домашнего окружения.", "📶 Гибкость в размещении", "💻 Легкость добавления новых устройств", "💬 Удаленное управление", "🔧 Простота обслуживания", "📡 Широкий выбор устройств"];

    let possiableTargets = [];


    function OpenBenefistsList(event) {
    if (possiableTargets.length > 0) {
      possiableTargets[0].style.backgroundColor = "var(--body-background-color)";
      possiableTargets[0].style.color = "var(--text-color)";
      possiableTargets.pop();
      console.log(possiableTargets);
    }

    const target = event.target;
    const targetContent = target.textContent; 
    console.log(targetContent);
    const possibCatItem = document.querySelector(".possibilities__categories_item")
    possibCatItem.style.backgroundColor = "var(--body-background-color)";

    switch (targetContent) {
      case "Электроснабжение":
        categoriesName = "Электроснабжение";
        target.style.backgroundColor = "var(--secondary-color)";
        possiableTargets.push(target);
        break;
      case "Однолинейная схема":
        categoriesName = "Однолинейная схема";

        target.style.backgroundColor = "var(--secondary-color)";
        possiableTargets.push(target);
        break;
      case "Авторский надзор":
        categoriesName = "Авторский надзор";

        target.style.backgroundColor = "var(--secondary-color)";
        possiableTargets.push(target);
        break;
      case "Дизайн проектов":
        categoriesName = "Дизайн проектов";

        target.style.backgroundColor = "var(--secondary-color)";
        possiableTargets.push(target);
        break;
      case "Сборка электрощитов":
        categoriesName = "Сборка электрощитов";

        target.style.backgroundColor = "var(--secondary-color)";
        possiableTargets.push(target);
        break;
      case "Умный дом":
        categoriesName = "Умный дом";

        target.style.backgroundColor = "var(--secondary-color)";
        possiableTargets.push(target);
        break;
      default:
        console.error("Такой возможности не существует");
    }
  }
</script>

<section class="possibilities animated">
    <div class="possibilities__categories animated" on:click={OpenBenefistsList}>
      <div class="possibilities__categories_item animated">Электроснабжение</div>
      <div class="possibilities__categories_item animated">Однолинейная схема</div>
      <div class="possibilities__categories_item animated">Авторский надзор</div>
      <div class="possibilities__categories_item animated">Дизайн проектов</div>
      <div class="possibilities__categories_item animated">Сборка электрощитов</div>
      <div class="possibilities__categories_item animated">Умный дом</div>
    </div>

    {#if categoriesName === "Электроснабжение"}
    <Possibility listBenefists = {listLighting} img = {light}/>
    {:else if categoriesName === "Однолинейная схема"}
    <Possibility listBenefists = {listClimateControl} img = {climat} />
    {:else if categoriesName === "Авторский надзор"}
    <Possibility listBenefists = {listSecurity} img = {security}/>
    {:else if categoriesName === "Дизайн проектов"}
    <Possibility listBenefists = {listDevices} img = {devices}/>
    {:else if categoriesName === "Сборка электрощитов"}
    <Possibility listBenefists = {listMultimedia} img = {multimedia}/>
    {:else if categoriesName === "Умный дом"}
    <Possibility listBenefists = {listSmarthouse} img = {smarthouse}/>
    {/if}
</section>