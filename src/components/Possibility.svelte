<script>
    import "$lib/css/main.css";

    export let listBenefists = [];
    export let img = "";
</script>

<div class="possibilities__description">
    <div class="possibilities__description_item">
      <ul class="possibilities__description_text animate__animated animate__fadeIn">
        {#each listBenefists as benefist}
            <li class="description__text_item animated">{benefist}</li>
        {/each}
      </ul>
    </div>
    <div class="possibilities__description_item">
        <div class="possibilities__description_img animate__animated animate__fadeIn">
            <img class="description__img_item" src="{img}" alt="image">
        </div>
    </div>
  </div>