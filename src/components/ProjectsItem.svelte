<script>
    export let projectNumber = "";
    export let projectLogo = "";
    export let projectItemName = "";
    export let projectLink = "";
</script>

<a href={projectLink} target="_blank" class="project__item">
    <div class="project__item_logo-wrapper">
        <img class="project__item_logo" src={projectLogo} alt="image" />
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
        box-shadow: 0px 0px 5px 0px var(--accent-color);
        text-align: center;
        color: var(--text-color);
        font-size: 3vw;
        transition: 0.2s;
        overflow: hidden;
    }

    .project__item:first-child {
        border-radius: 20px 0px 0px 20px;
    }

    .project__item:last-child {
        border-radius: 0px 20px 20px 0px;
    }

    .project__item:hover {
        width: 100vw;
        
        box-shadow: 0 0 10px 5px var(--accent-color);
        cursor: pointer;
    }

    .project__item_logo-wrapper {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        overflow: hidden;
    }


    .project__item_logo {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .project__item_name {
        display: block;
        opacity: 0;
        color: #fff;
        z-index: 2;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 50vw;
        max-width: 90%;
        white-space: wrap;
        overflow: hidden;
        font-size: 3vw;
        transition: opacity 0.3s ease;
        pointer-events: none;
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
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
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
        opacity: 1;
        pointer-events: auto;
    }

    @media only screen and (max-width: 600px) {
@media only screen and (max-width: 600px) {
    .project__item {
        border-radius: 20px;
        width: 83vw;
    }

    .project__item:first-child,
    .project__item:last-child {
        border-radius: 20px;
    }

    .project__item:hover {
        width: 83vw;
        pointer-events: auto;
    }

    .project__item:hover .project__item_number {
        pointer-events: none;
    }

    .project__item:hover .project__item_logo-wrapper {
        pointer-events: none;
    }

    .project__item_number {
        display: none;
    }

    .project__item_logo-wrapper {
        display: block;
    }

    .project__item_logo-wrapper::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 20px;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        background: rgba(0, 0, 0, 0.3);
        opacity: 1;
        transition: opacity 0.3s ease;
        z-index: 2;
        pointer-events: none;
    }

    .project__item_name {
        padding: 0.5rem;
        display: block;
        opacity: 1 !important;
        pointer-events: auto !important;
        position: relative !important;
        width: 100%;
        font-size: 1.5rem;
        white-space: normal;
        overflow: visible;
        transform: none !important;
        left: auto !important;
        top: auto !important;
    }

    .project__item:hover .project__item_logo-wrapper::before {
        pointer-events: none;
    }

    .project__item:hover .project__item_name {
        pointer-events: none;
    }
}

    }
</style>
