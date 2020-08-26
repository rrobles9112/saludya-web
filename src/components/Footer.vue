<template>
    <div>
        <div id="footer">
            <v-footer class="bg">
                <v-row>
                    <v-col sm="12" md="5" lg="5" align="center" justify="center">
                        <v-row>
                            <v-col md="5" offset-md="1">
                                <img src="../assets/img/Group 84.png" />
                            </v-col>
                            <v-col md="2">
                                <img src="../assets/img/_Group_.png" />
                            </v-col>
                            <v-col md="2">
                                <img src="../assets/img/25.png" />
                            </v-col>
                        </v-row>
                        <v-col md="12">
                            <span class="producto">BOP Solutions LLC Todos los derechos reservados 2020</span>
                        </v-col>
                    </v-col>
                    <v-col md="7">
                        <v-col md="12"></v-col>
                        <v-col md="12"></v-col>
                        <v-col md="4" class="espacio">
                            <router-link to="#" class="funcional">
                                Contáctanos
                            </router-link>
                        </v-col>
                        <v-col md="4" class="termino">
                            <router-link to="#" class="funcional">
                                Términos y Condiciones
                            </router-link>
                        </v-col>
                        <v-col md="4" class="laberinto">
                            <router-link to="#" class="funcional">
                                Aviso de Privacidad
                            </router-link>
                        </v-col>
                    </v-col>
                </v-row>
            </v-footer>
        </div>
        <div id="footerResponsive">
            <v-footer class="bg" height="381">
                <v-container>
                    <v-row style="margin-bottom: 42px;">
                        <v-col md="6">
                            <img class="salud" src="../assets/img/Group 84.png" />
                        </v-col>
                        <v-col md="6" style="text-align: end;">
                            <img class="mas" src="../assets/img/Layer 1.png" />
                            <img class="axa" src="../assets/img/25.png" />
                        </v-col>
                    </v-row>
                    <v-row style="margin-bottom: 42px;">
                        <v-col md="12" align="center" justify="center">                            
                            <h1 class="producto">BOP Solutions LLC Todos los derechos reservados 2020</h1>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="12" align="center" justify="center">
                            <router-link to="#" class="navigate">
                                <span>Contáctanos</span>
                            </router-link>
                            <router-link to="#" class="navigate">
                                <span>Términos y Condiciones</span>
                            </router-link>
                             <router-link to="#" class="navigateAv">
                                <span>Aviso de Privacidad</span>
                            </router-link>
                            <!-- <v-row>
                                <v-col md="3" align="start" justify="start" class="contactanos">
                                    
                                </v-col>
                                <v-col md="5" align="start" justify="start" class="terminos">
                                    
                                </v-col>
                                <v-col md="4" align="start" justify="start" class="aviso">
                                   
                                </v-col>
                            </v-row> -->
                        </v-col>
                    </v-row>
                </v-container>
            </v-footer>
        </div>
    </div>
    
</template>