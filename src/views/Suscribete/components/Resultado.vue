<template>
    <div>
        <v-container class="resultado">
            <v-col md="12">
                <h1 class="titleResultadoResponsive">¡Gracias por suscribirte, Sofía!</h1>
            </v-col>
            <v-col md="12" align="center" justify="center">
                <p class="descriptionResultadoResponsive">SaludYa.com agradece tu suscripción. <b> En unos minutos llegará al correo y móvil que ingresaste un mensaje de confirmación</b>  con los detalles de la suscripción que elegiste.</p>
            </v-col>
            <v-col md="12" align="center" justify="center">
                <v-row class="rowInfo">
                    <img :src="info" alt="" width="19" height="19">
                    <span>Payu te hará un cobro mínimo de 9 pesos para validar tu tarjeta que será regresado  a tu cuenta en no más de 48 horas.</span>
                </v-row>
            </v-col>
            <v-col md="12" class="valorResultadoResponsive">
                <span class="planResultadoResponsive">Plan Básico Individual</span>
                <span class="planValorResultadoResponsive">$15.000 MXN</span>
            </v-col>
            <v-col md="12" class="titleTusDatosSuscribeteResponsive" align="center" justify="center">
                <span>Tus datos</span>
            </v-col>
            <v-row class="containerDatos">
                <v-col md="6" class="emailContentSuscribeteResponsive">
                    <v-row>
                        <img :src="Mail" alt="">
                        <span>Prósperarsoluciones@gmail.com</span>
                    </v-row>
                </v-col>
                <v-col md="6" class="cellphoneContentSuscribeteResponsive">
                    <v-row>
                        <img :src="Phone" alt="">
                        <span>310 588 8363</span>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="resultadoResponsive">
            <v-col md="12">
                <h1 class="titleResultadoResponsive">¡Gracias por suscribirte, Sofía!</h1>
            </v-col>
            <v-col md="12" align="center" justify="center">
                <p class="descriptionResultadoResponsive">SaludYa.com agradece tu suscripción. <b> En unos minutos llegará al correo y móvil que ingresaste un mensaje de confirmación</b>  con los detalles de la suscripción que elegiste.</p>
            </v-col>
            <v-col md="12" class="valorResultadoResponsive">
                <span class="planResultadoResponsive">Plan Básico Individual</span>
                <span class="planValorResultadoResponsive">$15.000 MXN</span>
            </v-col>
            <v-col md="12" class="titleTusDatosSuscribeteResponsive" align="center" justify="center">
                <span>Tus datos</span>
            </v-col>
            <v-col md="12" class="emailContentSuscribeteResponsive">
                <v-row>
                    <img :src="Mail" alt="">
                    <span>Prósperarsoluciones@gmail.com</span>
                </v-row>
            </v-col>
            <v-col md="12" class="cellphoneContentSuscribeteResponsive">
                <v-row>
                    <img :src="Phone" alt="">
                    <span>310 588 8363</span>
                </v-row>
            </v-col>
        </v-container>
    </div>
</template>
<script>
import mail from '../../../assets/img/Mail1.png';
import phone from '../../../assets/img/phone1.png';
import info from '../../../assets/img/info.png';
export default {
    data: () => ({
        Mail: mail,
        Phone: phone,
        info: info
    })
}
</script>