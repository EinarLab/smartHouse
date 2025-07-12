<script>
  import Possibility from "./Possibility.svelte";
  import light from "$lib/img/possibilities/light.jpg";
  import climat from "$lib/img/possibilities/climat.jpg";
  import security from "$lib/img/possibilities/security.jpg";
  import devices from "$lib/img/possibilities/devices.jpg";
  import multimedia from "$lib/img/possibilities/multimedia.jpg";
  import smarthouse from "$lib/img/possibilities/smarthouse.jpg";

  const categories = {
    "Электроснабжение": {
      list: [
        "Электроснабжение — основа комфорта и безопасности вашего дома. Современные системы обеспечивают стабильное и надежное питание всех устройств, создавая удобную и безопасную среду для жизни.",
        "⚡ Стабильное питание",
        "🔋 Энергоэффективность и экономия",
        "📊 Умный контроль и мониторинг",
        "🌐 Интеграция с умным домом",
      ],
      img: light
    },
    "Однолинейная схема": {
      list: [
        "Схемотехника включает разработку однолинейных схем и спецификаций, которые являются основой для проектирования и анализа электрических систем. Точные схемы обеспечивают правильное распределение электроэнергии и упрощают обслуживание оборудования.",
        "📐 Проектирование однолинейных схем",
        "📋 Создание спецификаций",
        "⚡ Управление электроснабжением",
        "🔧 Обеспечение надежности и безопасности",
        "🛠️ Оптимизация и стандартизация проектов",
      ],
      img: climat
    },
    "Авторский надзор": {
      list: [
        "Авторский надзор обеспечивает контроль за соответствием выполнения проекта установленным требованиям и стандартам. Специалисты следят за качеством работ, соблюдением технической документации и сроков, что помогает избежать ошибок и повысить надежность объекта.",
        "👷 Контроль качества выполнения работ",
        "📋 Проверка соответствия проектной документации",
        "⏱️ Соблюдение сроков и этапов строительства",
        "🔍 Выявление и устранение несоответствий",
        "🤝 Взаимодействие с подрядчиками и заказчиками",
      ],
      img: security
    },
    "Дизайн проектов": {
      list: [
        "Дизайн проектов включает разработку концепций, планов и визуализаций, которые помогают создать эффективные и функциональные решения. Хороший дизайн учитывает технические требования, эстетические особенности и удобство эксплуатации.",
        "🎨 Креативные концепции",
        "📐 Техническое проектирование",
        "🖥️ Визуализация и моделирование",
        "🤝 Взаимодействие с заказчиком",
        "🔄 Адаптация и доработка",
      ],
      img: devices
    },
    "Сборка электрощитов": {
      list: [
        "Сборка электрощитов включает монтаж и подключение электрических компонентов для обеспечения надежного и безопасного распределения электроэнергии. Качественно собранный электрощит обеспечивает защиту оборудования и удобство эксплуатации всей электрической системы.",
        "🔌 Монтаж электрических компонентов",
        "🛡️ Установка защитных устройств",
        "⚙️ Компоновка и маркировка схем",
        "🔧 Тестирование и наладка",
        "📋 Соответствие нормативам и стандартам",
      ],
      img: multimedia
    },
    "Умный дом": {
      list: [
        "Предлагаем решения для создания умного дома, которые отличаются простотой установки, энергоэффективностью и широкими возможностями интеграции. Благодаря беспроводным технологиям и локальной работе системы, устройства обеспечивают удобное и надежное управление освещением и другими электроприборами. Производство в России и поддержка отечественного производителя делают эти решения привлекательными для широкого круга пользователей. Являемся сертифицировванными партнерами Hite Pro.",
        "📶 Гибкость в размещении",
        "💻 Легкость добавления новых устройств",
        "💬 Удаленное управление",
        "🔧 Простота обслуживания",
        "📡 Широкий выбор устройств",
      ],
      img: smarthouse
    }
  };

  let selectedCategory = "Электроснабжение";
  let openedIndex = null;
  let isVisible = true;

  function selectCategory(event) {
    const target = event.target.closest('.possibilities__categories_item');
    if (!target) return;
    const category = target.textContent.trim();
    if (categories[category] && category !== selectedCategory) {
      isVisible = false;
      setTimeout(() => {
        selectedCategory = category;
        isVisible = true;
      }, 300);
      openedIndex = null;
    }
  }

  function toggleMobile(index) {
    openedIndex = openedIndex === index ? null : index;
  }
</script>

<!-- Десктоп версия -->
<section class="possibilities animated desktop" on:click={selectCategory}>
  <div class="possibilities__categories animated">
    {#each Object.keys(categories) as category}
      <div
        class="possibilities__categories_item animated"
        class:selected={selectedCategory === category}
      >
        <p class="possibilities__categories_item-header">{category}</p>
      </div>
    {/each}
  </div>

  <div class="possibility-wrapper" class:visible={isVisible}>
    <Possibility
      listBenefists={categories[selectedCategory].list}
      img={categories[selectedCategory].img}
    />
  </div>
</section>

<!-- Мобильная версия -->
<section class="possibilities mobile">
  <div class="possibilities__mobile_container">
    {#each Object.entries(categories) as [category, data], i}
      <div
        class="possibilities__categories_item mobile-item"
        on:click={() => toggleMobile(i)}
        class:selected={openedIndex === i}
        role="button"
        tabindex="0"
        aria-expanded={openedIndex === i}
        aria-controls={"desc-" + i}
        on:keydown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleMobile(i);
          }
        }}
      >
        <p class="possibilities__categories_item-header">{category}</p>
      </div>

      <div
        id={"desc-" + i}
        class="possibilities__description_mobile"
        class:show={openedIndex === i}
        role="region"
        aria-live="polite"
      >
        <div class="possibilities__description_item">
          {#each data.list as line}
            <p class="description__text_item">{line}</p>
          {/each}
          <img src={data.img} alt={category} class="possibilities__description_img" />
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .possibilities {
    margin-bottom: 5vw;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    transition: 0.2s;
  }

  .possibilities__categories {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .possibilities__categories_item {
    background-color: var(--body-background-color);
    box-shadow: 0px 0px 5px 0px var(--accent-color);
    color: var(--text-color);
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, transform 0.2s;
    user-select: none;
    width: 20vw;
    height: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5vw;
  }

  .possibilities__categories_item-header {
    display: inline;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .possibilities__categories_item:hover {
    background-color: var(--accent-color);
    color: #fff;
  }

  .possibilities__categories_item.selected {
    background-color: var(--secondary-color);
    color: var(--text-color);
  }

  .possibility-wrapper {
    opacity: 0;
    transition: opacity 0.3s ease;
    will-change: opacity;
  }
  .possibility-wrapper.visible {
    opacity: 1;
  }

  .desktop {
    display: block;
  }

  .mobile {
    display: none;
  }

  .possibilities__mobile_container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .possibilities__categories_item.mobile-item {
    width: 100%;
    min-height: 3.5rem;
    font-size: 1.1rem;
    padding: 0.8rem 1rem;
    margin-bottom: 0;
    border-radius: 0;
    box-shadow: 0px 0px 3px 0px var(--accent-color);
    border-bottom: 1px solid var(--accent-color);
  }

  .possibilities__categories_item.mobile-item.selected {
    border-bottom: none;
  }

  .possibilities__description_mobile {
    background-color: var(--secondary-color);
    box-shadow: 0px 0px 5px 0px var(--accent-color);
    border-top: none;
    border-radius: 0 0 10px 10px;
    opacity: 0;
    visibility: hidden;
    max-height: 0;
    overflow: hidden;
    transition: opacity 0.4s ease, visibility 0.4s ease, max-height 0.4s ease;
  }

  .possibilities__description_mobile.show {
    opacity: 1;
    visibility: visible;
    max-height: 1000px;
    overflow: visible;
    margin-bottom: 1rem;
  }

  .possibilities__description_item {
    padding: 1rem;
    background: none;
    box-shadow: none;
  }

  .description__text_item {
    font-size: 0.9rem;
    line-height: 1.4rem;
    margin: 0.25rem 0;
    color: var(--text-color);
  }

  .possibilities__description_img {
    margin-top: 1rem;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 0 5px var(--accent-color);
  }

  @media (max-width: 600px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
      padding: 0 1rem;
    }

    .possibilities__description_item {
      width: 100%;
      display: block;
    }
  }
</style>
