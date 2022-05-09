<template>
    <div class="container col-md-12 p-0 m-0">
        <nav-header/>
        <div class="container-content">
            <router-view/>
            <side-menu/>
        </div>
    </div>
</template>

<script>
import NavHeader from '@/components/NavHeader.vue';
import SideMenu from '@/components/SideMenu.vue';

export default {
    components: {
        NavHeader,
        SideMenu
    }
}
</script>

<style>
.container-content {
    position: relative;
}
</style>