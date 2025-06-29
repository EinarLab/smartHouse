<script>
    export let projectNumber = "";
    export let projectLogo = "";
    export let projectItemName = "";
    export let projectLink = "";
</script>

<a href="{projectLink}" target="_blank" class="project__item">
    <div class="project__item_logo-wrapper">
        <img class="project__item_logo" src="{projectLogo}" alt="image">
    </div>
    <p class="project__item_number">{projectNumber}</p>
    <p class="project__item_name">{projectItemName}</p> 
</a>

<style>
    .project__item {
        width: 30vw;
        height: 40vw;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: var(--secondary-color);
        border-radius: 20px;
        box-shadow: 0px 0px 5px 0px var(--accent-color);
        text-align: center;
        color: var(--text-color);
        font-size: 3vw;
        transition: .5s;
        overflow: hidden;
    }

    .project__item:hover {
        cursor: pointer;
        width: 100vw;
    }

    .project__item_logo-wrapper {
        display: none;
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        border-radius: 20px;
        overflow: hidden;
    }

    .project__item_logo {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .project__item_name {
        display: none;
        color: #fff;
        z-index: 2;
        position: relative;
    }

    .project__item_number {
        z-index: 2;
        position: relative;
    }

    .project__item:hover .project__item_number {
        display: none;
    }

    .project__item:hover .project__item_logo-wrapper {
        display: block;
    }

    .project__item_logo-wrapper::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        border-radius: 20px;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        background: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 2;
        pointer-events: none;
    }

    .project__item:hover .project__item_logo-wrapper::before {
        opacity: 1;
    }

    .project__item:hover .project__item_name {
        display: block;
        z-index: 3;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        text-shadow: 0 2px 8px #000;
    }
</style>
