<template>
    <div>
        <div class="cabeceraResponsive">
            <v-img :src="backResponsive" gradient="0deg, #00000052, #0000005c" style="background-position: top; height: 100%; width: 100vw; background-size: 100% 100%;">
                <v-container>
                    <v-col md="12">
                        <v-row>
                            <v-col md="6">
                                <img src="../../../assets/img/Group 72.png" class="logoSaludYa">
                            </v-col>
                            <v-col md="6" align="end" justify="end">
                                <img src="../../../assets/img/25.png" class="logoAxa">  
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col md="12">
                        <h1 class="descriptionCabecera">
                            La nueva app de asesoría médica que cuida de tu familia las 24hs del día
                        </h1>
                    </v-col>
                    <v-col md="12">
                        <router-link to="/datos"  class="deco" @click="this.$gtag.event('Ver planes de la app', { method: 'Google' }); window.fbq('trackCustom', 'Ver planes de la app');">
                            <v-btn class="buttonCabecera" ><span class="textCabecera">Obtenla gratis por 30 días</span></v-btn>
                        </router-link>
                    </v-col>
                </v-container>
            </v-img>
        </div>
        <div class="cabecera">
            <v-img :src="back" max-height="810px" gradient="0deg, #00000052, #0000005c" style="background-position: top; height: 821px; width: 100vw; background-size: 100% 100%;">
                <v-container>
                    <v-row>
                        <v-col md="6">
                            <img class="alto" src="../../../assets/img/Group 72.png" />
                        </v-col>
                        <v-col md="6" align="end" justify="end">
                            <img class="alto" src="../../../assets/img/25.png" />
                        </v-col>
                    </v-row>
                    <v-col md="6" class="descriptionCabecera">
                        <span class="salud">La nueva app de asesoría médica que cuida de tu familia las 24hs del día</span>
                    </v-col>
                    <v-col md="6" style="margin-top: 51px">
                        <a href="#planes" class="deco">
                            <v-btn class="medico" ><span class="texto">Obtenla gratis por 30 días</span></v-btn>
                        </a>
                    </v-col>
                </v-container>
            </v-img>
        </div>
    </div>
</template>
<script>
import back from '../../../assets/img/99.png';
import backResponsive from '../../../assets/img/986.png';
export default {
    data: () => ({
        back: back,
        backResponsive: backResponsive
    })
}
</script>