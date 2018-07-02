<template>
    <div id="app">
        <router-view/>
        <header class="main_h sticky" id="home">
            <section class="head-content">
                <a class="logo" href="#"><img src="images/TVoD.png" class="svg-logo" /></a>
                <div class="mobile-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="header-navigation responsive-header">

                    <div class="center-menu-content">

                        <div class="close-about-section">
                            <svg class="svg-close" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 1024 1024">
                                <g id="icomoon-ignore">
                                </g>
                                <path d="M626.784 512.032l195.072 195.072c12.672 12.672 12.672 33.248 0 45.92l-68.832 68.832c-12.672 12.672-33.216 12.672-45.92 0l-195.104-195.072-195.104 195.072c-12.672 12.672-33.216 12.672-45.888 0l-68.864-68.832c-12.672-12.672-12.672-33.216 0-45.92l195.104-195.072-195.104-195.104c-12.672-12.672-12.672-33.248 0-45.92l68.896-68.832c12.672-12.672 33.216-12.672 45.888 0l195.072 195.104 195.104-195.104c12.672-12.672 33.216-12.672 45.92 0l68.832 68.864c12.672 12.672 12.672 33.216 0 45.92l-195.072 195.072z"></path>
                            </svg>
                        </div>
                        <nav>

                            <ul>
                                <li><a data-scroll="" data-options="easing: easeInQuad" href="#home" class="Quick-navigation-item">Trang chủ</a></li>
                                <li><a href="live.html">Truyền hình</a></li>
                                <li><a data-scroll="" data-options="easing: easeInQuad" href="#intro" class="Quick-navigation-item">Nội dung</a></li>
                                <li><a href="guide.html">Hướng dẫn</a></li>
                                <li><a data-scroll="" data-options="easing: easeInQuad" href="#price" class="Quick-navigation-item">Khuyến mại</a></li>
                                <li><a data-scroll="" data-options="easing: easeInQuad" href="#footer" class="Quick-navigation-item">Liên hệ</a></li>
                                <li><a href="acc.html">Tài khoản</a></li>
                            </ul>

                        </nav>
                    </div>
                </div>
            </section>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>
