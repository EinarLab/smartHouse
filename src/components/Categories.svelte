<script>
    import CategoriesItem from "./CategoriesItem.svelte";

    import categorySvgApartment from "$lib/svg/apartment.svg";
    import categorySvgPrivateHouse from "$lib/svg/private_house.svg";
    import categorySvgTownhouse from "$lib/svg/townhouse.svg";
    import categorySvgStore from "$lib/svg/store.svg";
    import categorySvgOffice from "$lib/svg/office.svg";
    import categorySvgCafe from "$lib/svg/cafe.svg";
    import categorySvgRestoraunt from "$lib/svg/restaurant.svg";
    import categorySvgfoodTrucks from "$lib/svg/food_trucks.svg";
</script>

<section class="categories">
    <section class="categories__info">
        <h1 id="heading2" class="section__title animated">
            Проекты электроснабжения —<br />
            <span class="section__title_allocation">
                надежность и эффективность<br />
                для вашего объекта
            </span>
        </h1>
        <p class="section__subtext category__section_subtext animated">
            Проекты электроснабжения играют ключевую роль в обеспечении
            безопасности и эффективности различных объектов — от жилых квартир и
            частных домов до коммерческих помещений и небольших промышленных
            предприятий. Правильно разработанные проекты позволяют
            оптимизировать энергопотребление, снизить эксплуатационные расходы и
            обеспечить стабильную работу электрических систем. От тщательного
            проектирования внутреннего силового электрооборудования до
            продуманного освещения — каждый этап важен для создания комфортной и
            безопасной среды. Комплексный подход к проектированию
            электроснабжения гарантирует надежность и долговечность инженерных
            решений, соответствующих современным стандартам и требованиям.
        </p>
    </section>

    <section class="categories__containers">
        <div class="categories__container">
            <CategoriesItem
                categorySvg={categorySvgApartment}
                categoryName={"Квартиры"}
            ></CategoriesItem>

            <CategoriesItem
                categorySvg={categorySvgTownhouse}
                categoryName={"Таунхаусы"}
            ></CategoriesItem>

            <CategoriesItem
                categorySvg={categorySvgOffice}
                categoryName={"Офисы"}
            ></CategoriesItem>

            <CategoriesItem
                categorySvg={categorySvgRestoraunt}
                categoryName={"Рестораны"}
            ></CategoriesItem>
        </div>

        <div class="categories__container">
            <CategoriesItem
                categorySvg={categorySvgPrivateHouse}
                categoryName={"Частные дома"}
            ></CategoriesItem>

            <CategoriesItem
                categorySvg={categorySvgStore}
                categoryName={"Магазины"}
            ></CategoriesItem>

            <CategoriesItem categorySvg={categorySvgCafe} categoryName={"Кафе"}
            ></CategoriesItem>

            <CategoriesItem
                categorySvg={categorySvgfoodTrucks}
                categoryName={"Фудтраки"}
            ></CategoriesItem>
        </div>
    </section>
</section>
