<template>
    <header class="header-panel header-main">
        <div class="header-upper-panel">
            <div class="container">
                <a href="#" class="header-upper-logo">Техномарт</a>
                <div class="header-upper-search">
                    <form method="post">
                        <input
                            type="search"
                            name="search"
                            id="search"
                            placeholder="Поиск:"
                            required
                        >
                        <label for="search"></label>
                    </form>
                </div>
                <a href="#" class="header-upper-bookmark">Закладки: 0</a>
                <a href="#" class="header-upper-cart">Корзина: 0</a>
                <a href="#" class="header-upper-order">Оформить заказ</a>
            </div>
        </div>
        <div class="container">
            <div class="header-middle-panel clearfix">
                <p class="header-middle-block header-middle-about">Интернет-магазин строительных материалов и
                    инструментов
                    для ремонта</p>
                <div class="header-middle-contacts">
                    <p class="header-contacts-telephone">{{getPhone}}</p>
                    <p class="header-contacts-address">{{getAddress}}</p>
                </div>
                <div class="header-middle-user header-user-connected">
                    <a href="#" class="header-user-login">Войти</a>
                    <a href="#" class="header-user-registration">Регистрация</a>
                </div>
            </div>
            <nav class="header-bottom-panel">
                <router-link
                    v-for="(menu, index) of mainMenu"
                    :to="menu.link"
                    :key="index"
                >{{menu.name}}</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
    import {mapGetters} from 'vuex'
	export default {
    	props: ['mainMenu', 'phone'],
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
