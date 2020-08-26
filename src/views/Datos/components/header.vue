<template>
    <div>
        <div class="headerDatos">
            <v-img :src="backHeaderDatos">
                <v-container>
                    <v-row>
                        <v-col md="12" class="logosHeaderDatos" max-height="392" style="background-position: 100% 100% !important; max-height: 392px;">
                            <img :src="logoSaludYa" class="logoSaludYaSuscribete" width="251" height="63">
                            <img :src="logoAxa" class="logoAxaSuscribete" width="53" height="53">
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="12" class="messageHeaderDatosResponsive">
                            <router-link to="/">
                                <img :src="leftImage" class="logoSaludYaSuscribete" width="10" height="24">
                            </router-link>
                            <span>Regístrate sin costo por 30 días</span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="12" class="titlePage">
                            <img :src="leftImage" class="logoSaludYaSuscribete" style="visibility: hidden;  margin-right: 31px;" width="7" height="16">
                            <span>Datos del afiliado</span>
                        </v-col>
                    </v-row>
                </v-container>
            </v-img>
        </div>
        <div class="headerDatosResponsive">
            <v-img :src="backHeaderDatosResponsive" max-height="203" style="background-position: 100% 100% !important;">
                <v-container>
                    <v-row>
                        <v-col md="12">
                            <img :src="logoSaludYa" class="logoSaludYaSuscribete" width="120" height="30.12">
                            <img :src="logoAxa" class="logoAxaSuscribete" width="32.02" height="32.02">
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="12" class="messageHeaderDatosResponsive">
                            <router-link to="/">
                                <img :src="leftImage" class="logoSaludYaSuscribete" width="7" height="16">
                            </router-link>
                            <span>Regístrate sin costo por 30 días</span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="12" class="titlePage">
                            <img :src="leftImage" class="logoSaludYaSuscribete" style="visibility: hidden;  margin-right: 19px;" width="7" height="16">
                            <span>Datos del afiliado</span>
                        </v-col>
                    </v-row>
                </v-container>
            </v-img>
        </div>
    </div>
</template>
<script>
import img from '../../../assets/img/995.png';
import imgResponsvie from '../../../assets/img/994.png';
import logoSaludYa from '../../../assets/img/Group 72.png';
import logoAxa from '../../../assets/img/25.png';
import leftChevron from '../../../assets/img/993.png';
export default {
    data: () => ({
        backHeaderDatos: img,
        backHeaderDatosResponsive: imgResponsvie,
        logoSaludYa: logoSaludYa,
        logoAxa: logoAxa,
        leftImage: leftChevron
    })
}
</script>