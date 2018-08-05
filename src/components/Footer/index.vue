<template>
    <footer>
        <div class="footer-upper-panel container clearfix">
            <router-link to="/" class="footer-panel-logo">Техномарт</router-link>
            <ul class="footer-panel-contacts">
                <li v-for="(menu, index) of mainMenu" :key="index">
                    <router-link :to="menu.link">
                        {{menu.name}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="footer-middle-panel container clearfix">
            <div class="footer-panel-address">
                <p>{{getAddress}}</p>
                <p>{{getPhone}}</p>
            </div>
            <ul class="footer-panel-offer">
                <li>
                    <a href="#">Материалы</a>
                </li>
                <li>
                    <a href="#">Техника</a>
                </li>
                <li>
                    <a href="#">Иструменты</a>
                </li>
                <li>
                    <a href="#">Спецпредложения</a>
                </li>
            </ul>
        </div>
        <div class="footer-bottom-panel">
            <div class="container clearfix">
                <div class="footer-bottom-copyright">
                    <p>© 2013-2018 Компания «Техномарт»</p>
                    <p>Все права защищены</p>
                </div>
                <div class="footer-bottom-social">
                    <a href="#" class="footer-social-btn footer-social-vk"></a>
                    <a href="#" class="footer-social-btn footer-social-fb"></a>
                    <a href="#" class="footer-social-btn footer-social-inst"></a>
                </div>
                <div class="footer-bottom-feedback">
                    <p>Обратная связь:</p>
                    <a href="mailto:info@alisultanov.ru" class="footer-feedback-mail">info@technomart.ru</a>
                </div>
                <div class="footer-bottom-design">
                    <p>Дизайн сайта -</p>
                    <a href="#" class="footer-design-author">alisultanov.ru</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import {mapGetters} from 'vuex'
	export default {
		props: ['mainMenu'],
		data() {
			return {
			}
		},
        computed: {
            ...mapGetters({
				getPhone: 'getPhone',
				getAddress: 'getAddress'
            })
        }
	}
</script>

<style lang="scss">
</style>
