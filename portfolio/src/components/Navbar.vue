<template>
    <nav class="navbar">
        <div class="logo">Eduardo Freitas Fernandes</div>
        <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contacts</a></li>
            <li>
                <a href="/cv.pdf" class="cv-btn" download>CV</a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: white;
    border-bottom: 1px solid #eee;
    padding: 1.2rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    z-index: 100;
    box-sizing: border-box;
}

.logo {
    font-weight: 700;
    font-size: 1.15rem;
    white-space: nowrap;
}

.nav-links {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 1.2rem;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
}

.nav-links a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    padding: 0.35rem 0.5rem;
    border-radius: 4px;
    transition:
        color 0.2s ease,
        background-color 0.2s ease;
}

.nav-links a:hover {
    background-color: #f4f4f4;
    color: #000;
}

/* CV Button */
.cv-btn {
    padding: 0.45rem 0.9rem;
    border: 1px solid #42b883;
    border-radius: 999px;
    color: #42b883;
    font-weight: 600;
    transition: all 0.25s ease;
    background: transparent;
}

.cv-btn:hover {
    background: #42b883;
    color: white;
    transform: translateY(-1px);
}
</style>
