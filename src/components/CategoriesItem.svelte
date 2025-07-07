<script>
    export let categorySvg = "";
    export let categoryName = "";
</script>

<div class="categories__container_item animated">
    <div class="container__item_img">
        <img class="categories__item_img" src={categorySvg} alt="image" />
    </div>
    <p class="categories__item_text">{categoryName}</p>
</div>
