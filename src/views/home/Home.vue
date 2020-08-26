<template>
    <div>
        <cabecera-component></cabecera-component>
        <servicio-component></servicio-component>
        <planes-component></planes-component>
        <functions-component></functions-component>
        <registry-component></registry-component>
    </div>
</template>

<script>
import CabeceraComponent from './components/Cabecera';
import ServicioComponent from './components/Servicio';
import RegistryComponent from './components/Registry';
import PlanesComponent from './components/Planes';
import FunctionsComponent from './components/Functions';
export default {
    components: {
        CabeceraComponent,
        ServicioComponent,
        RegistryComponent,
        PlanesComponent,
        FunctionsComponent
    }
}
</script>