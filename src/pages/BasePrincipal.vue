<template>
    <div class="container col-md-12 p-0 m-0">
        <nav-header/>
        <div class="container-content">
            <router-view/>
            <side-menu/>
        </div>
        <modal/>
    </div>
</template>

<script>
import NavHeader from '@/components/NavHeader.vue';
import SideMenu from '@/components/SideMenu.vue';
import Modal from '@/components/Modal.vue';

export default {
    components: {
        NavHeader,
        SideMenu,
        Modal
    },
    methods: {
        
    }
}
</script>

<style>
.container-content {
    position: relative;
    padding-top: 60px;
    overflow-x: hidden;
}
</style>