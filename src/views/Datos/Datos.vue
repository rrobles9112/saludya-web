<template>
    <div style="background: #fff">
        <header-component></header-component>
        <formulario-component></formulario-component>
    </div>
</template>
<script>
import HeaderComponent from './components/header';
import FormularioComponent from './components/formulario';
export default {
    components: {
        HeaderComponent,
        FormularioComponent
    }
}
</script>