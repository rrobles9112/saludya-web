<template>
    <div>
        <div class="headerSuscribete">
            <v-img :src="imageWeb" max-height="133" style="background-position: 100% 100% !important;">
                <v-container>
                    <v-row>
                        <v-col md="12">
                            <img :src="logoSaludYa" class="logoSaludYaSuscribete" width="251px" height="63px">
                            <img :src="logoAxa" class="logoAxaSuscribete" width="53" height="53">
                        </v-col>
                    </v-row>
                </v-container>
            </v-img>
        </div>
        <div class="headerSuscribeteResponsive">
            <v-img :src="headerSubscribete" max-height="78" style="background-position: 100% 100% !important;">
                <v-container>
                    <v-row>
                        <v-col md="12">
                            <img :src="logoSaludYa" class="logoSaludYaSuscribete" width="120" height="30.12">
                            <img :src="logoAxa" class="logoAxaSuscribete" width="32.02" height="32.02">
                        </v-col>
                    </v-row>
                </v-container>
            </v-img>
        </div>
    </div>
</template>
<script>
import imageSubscribete from '../../../assets/img/999.png';
import logoSaludYa from '../../../assets/img/Group 72.png';
import logoAxa from '../../../assets/img/25.png';
import imageSubscribeteWeb from '../../../assets/img/997.png';
export default {
    data: () => ({
        headerSubscribete: imageSubscribete,
        logoSaludYa: logoSaludYa,
        logoAxa: logoAxa,
        imageWeb: imageSubscribeteWeb,
    })
}
</script>