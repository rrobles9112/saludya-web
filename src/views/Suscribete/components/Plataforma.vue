<template>
    <div>
        <div class="platform">
            <v-img :src="imageResponse" max-height="210" style="background-position: 100% 100% !important;">
                <v-container>
                    <v-col md="12" align="center" justify="center">
                        <h1 class="titleplatformResponsive">Descarga el app en tu plataforma preferida</h1>
                    </v-col>
                    <v-col md="12" align="center" justify="center">
                        <img :src="Apple" class="applePlatformResponsive" alt="" width="177" height="58">
                        <img :src="Google" alt="" width="177" height="58">
                    </v-col>
                </v-container>
            </v-img>
        </div>
        <div class="platformResponsive">
            <v-img :src="backgroundPlatformResponsive" max-height="159" style="background-position: 100% 100% !important;">
                <v-container>
                    <v-col md="12" align="center" justify="center">
                        <h1 class="titleplatformResponsive">Descarga el app en tu plataforma preferida</h1>
                    </v-col>
                    <v-col md="12" align="center" justify="center">
                        <img :src="Apple" class="applePlatformResponsive" alt="" width="129" height="42">
                        <img :src="Google" alt="" width="129" height="42">
                    </v-col>
                </v-container>
            </v-img>
        </div>
    </div>
</template>
<script>
import background from '../../../assets/img/998.png';
import img from '../../../assets/img/996.png';
import apple from '../../../assets/img/apple.png';
import google from '../../../assets/img/google.png';
export default {
    data: () => ({
        backgroundPlatformResponsive: background,
        Google: google,
        Apple: apple,
        imageResponse: img,
    })
}
</script>