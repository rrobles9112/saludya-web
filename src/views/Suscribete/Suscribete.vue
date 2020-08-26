<template>
    <div style="background: #fff;">
        <headerser-component></headerser-component>
        <resultado-component></resultado-component>
        <plataforma-component></plataforma-component>
        <botton-component></botton-component>
    </div>
</template>
<script>
import HeaderserComponent from './components/headerser';
import ResultadoComponent from './components/Resultado';
import plataformaComponent from './components/Plataforma';
import BottonComponent from './components/Botton';
export default {
    components: {
        HeaderserComponent,
        ResultadoComponent,
        plataformaComponent,
        BottonComponent
        
    }
}
</script>