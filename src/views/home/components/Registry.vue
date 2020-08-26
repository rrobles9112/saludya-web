<template>
    <div>
        <div class="registrateWeb">
            <v-img :src="img">
                <v-container>
                    <v-row>
                        <v-col md="3">
                            <img src="../../../assets/img/Group 73.png" alt="" style="margin-top: 123px;">
                        </v-col>
                        <v-col md="9">
                            <v-col md="12" align="center" justify="center" class="titleFirstRegistry">
                                <h1>Regístrate y descarga la app de SaludYa <br><b>¡Gratis por 30 días!</b></h1>
                            </v-col>
                            <v-col md="12" align="center" jsutify="center" class="descriptionRegistry">
                                <span>Completa el proceso de registro aquí mismo y posterior descarga la app para comenzar <br> a utilizar todos los servicios.</span>
                            </v-col>
                            <v-row>
                                <v-col md="6" class="cardDescription">
                                    <v-col md="12" class="listCard1">
                                        <b>Telemedicina</b><br>
                                        <span>Podrás hablar o chatear con un médico real las 24hs del día, los 365 días del año.</span>
                                    </v-col>
                                    <v-col md="12" class="listCard1">
                                        <b>Servicio de Ambulancia</b><br>
                                        <span>Coordina de forma fácil y rápida el pedido de ambulancia a tu domicilio.</span>
                                    </v-col>
                                </v-col>
                                <v-col md="6" class="cardDescription">
                                    <v-col md="12" class="listCard1">
                                        <b>Agendar Cita</b><br>
                                        <span>Agenda tu próxima cita al médico a través de nuestra red de prestadores.</span>
                                    </v-col>
                                    <v-col md="12" class="listCard1">
                                        <b>Tarjeta Digital</b><br>
                                        <span>Accede a precios preferenciales en toda nuestra red de prestadores.</span>
                                    </v-col>
                                </v-col>
                            </v-row>
                            <v-col md="12" align="center" justify="center">
                                <img src="../../../assets/img/apple.png" alt="" style="margin-right: 24.5px;">
                                <img src="../../../assets/img/google.png" alt="">
                            </v-col>
                        </v-col>
                    </v-row>
                </v-container>
            </v-img>
        </div>
        <div class="registrateResponsive" id="e92_733">
            <v-col md="12" align="center" justify="center">
                <h1 class="titleRegistry">Regístrate y descarga la app de <h1 class="titleRegistryH1">SaludYa ¡Gratis por 30 días!</h1></h1>
                <v-col md="12" class="descriptionRegistry text-center">
                    <span>Completa el proceso de registro aquí mismo y  posterior descarga la app para comenzar a utilizar todos los servicios.</span>
                </v-col>
                <v-col md="12" align="center" justify="center" class="telemedicinaTitle">
                    <span><b>Telemedicina</b></span>
                </v-col>
                <v-col md="12" align="center" justify="center" class="telemedicinaDescription text-center">
                    <span>Podrás hablar o chatear con un médico real las 24hs del día, los 365 días del año.</span>
                </v-col>
                <v-col md="12" align="center" justify="center" class="calendaryTitle">
                    <span><b>Agendar cita</b></span>
                </v-col>
                <v-col md="12" align="center" justify="center" class="calendaryDescription text-center">
                    <span>Agenda tu próxima cita al médico a través de nuestra red de prestadores.</span>
                </v-col>
                <v-col md="12" align="center" justify="center" class="serviceTitle">
                    <span><b>Servicio de Ambulancia</b></span>
                </v-col>
                <v-col md="12" align="center" justify="center" class="serviceDescription text-center">
                    <span>Coordina de forma fácil y rápida el pedido de ambulancia a tu domicilio</span>
                </v-col>
                <v-col md="12" align="center" justify="center" class="serviceTitle">
                    <span><b>Tarjeta Digital</b></span>
                </v-col>
                <v-col md="12" align="center" justify="center" class="serviceDescription text-center">
                    <span>Accede a precios preferenciales en toda nuestra red de prestadores.</span>
                </v-col>
                <v-col md="12" align="center" justify="center" class="downloadTitle text-center">
                    <span>Descarga la app de SaludYa</span>
                </v-col>
                <v-col md="12" align="center" justify="center" class="appleImage text-center">
                    <img src="../../../assets/img/apple.png" alt="">
                </v-col>
                <v-col md="12" align="center" justify="center" class="googleImage text-center">
                    <img src="../../../assets/img/google.png" alt="">
                </v-col>
            </v-col>
        </div>
    </div>
</template>
<script>
import back from '../../../assets/img/Rectangle 3.png';
export default {
    data: () => ({
        img: back
    })
}
</script>