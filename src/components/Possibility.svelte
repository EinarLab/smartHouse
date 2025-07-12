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

<style>
  .possibilities__description {
      width: 100%;
      height: auto;

      display: flex;
      justify-content: space-between;
  }

  .possibilities__description_item {
      padding-left: 4vw;

      width: 50%;
      height: auto;

      box-shadow: 0 5px 5px -5px var(--accent-color);
      background-color: var(--secondary-color);
  }

  .possibilities__description_text {
      padding-top: 3vw;
      padding-bottom: 5vw;

      font-size: 1.25vw;
      line-height: 1.5;
  }

  .description__text_item {
      padding-top: 2vw;

      color: var(--text-color);
  }

  .possibilities__description_img {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
  }

    .description__img_item {
      padding: 1vw;
      margin-right: 20px;

      width: 35vw;
      height: 20vw;

      background-color: #fff;
      box-shadow: 0px 0px 5px 0px var(--accent-color);
      transition: 0.2s;
  }

  .description__img_item:hover {
      box-shadow: 0px 0px 10px 10px var(--accent-color);
      transform: scale(1.1);

      cursor: pointer;
  }
</style>