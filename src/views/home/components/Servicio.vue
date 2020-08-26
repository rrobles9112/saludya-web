<template>
    <div>
        <div class="serviceResponsive">
            <v-img :src="back" style="background-position: top; height: 456px; width: 100vw; background-size: 100% 100%;">
                <v-container>
                    <h1 class="titleService">SaludYa. El servicio de asistencia médica exclusivo para clientes Mastercard</h1>
                    <v-col md="12" align="center" justify="center" style="padding: 0; max-width: 100%; margin-top: 7px;">
                        <span class="descriptionService">La nueva app de AXA exclusiva para clientes Mastercard, que brinda servicios de salud para tí y tu familia.</span>
                    </v-col>
                    <v-col md="12">
                        <v-carousel cycle height="300" class="serviceCarousel">
                            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                                <v-col md="12" align="center" justify="center">
                                    <img src="../../../assets/img/4.png" class="slideImage" v-if="slide.id == 1" alt="">
                                    <img src="../../../assets/img/6.png" class="slideImage" v-else-if="slide.id == 2" alt="">
                                    <img src="../../../assets/img/1.png" class="slideImage" v-else-if="slide.id == 3" alt="">
                                    <img src="../../../assets/img/2.png" class="slideImage" v-else-if="slide.id == 4" alt="">
                                    <img src="../../../assets/img/3.png" class="slideImage" v-else-if="slide.id == 5" alt="">
                                    <img src="../../../assets/img/10.png" class="slideImage" v-else-if="slide.id == 6" alt="">
                                </v-col>
                                <v-col md="12" align="center" justify="center">
                                    <h1 class="titleSlide">{{ slide.title }}</h1>
                                    <span>{{ slide.description }}</span>
                                </v-col>
                            </v-carousel-item>
                        </v-carousel>
                    </v-col>
                </v-container>
            </v-img>
        </div>
        <div class="service">
            <v-img :src="backImg" style="background-position: top; height: 100%; width: 100vw; background-size: 100% 100%;">
                <v-container>
                    <v-col md="12" align="center" justify="center">
                        <h1 class="title">SaludYa. El servicio de asistencia médica <br> exclusivo para clientes Mastercard</h1>
                        <v-col md="12" class="text-center description">
                            <span>La nueva app de AXA exclusiva para clientes Mastercard, que brinda servicios de salud para ti y tu familia. </span>
                        </v-col>
                    </v-col>
                    <v-row>
                        <v-col md="4">  
                            <v-row>
                                <v-col md="3">
                                    <img class="aset" src="../../../assets/img/4.png" />
                                </v-col>
                                <v-col md="7">
                                    <h1 class="lor">Telemedicina</h1>
                                    <span class="nemo">Orientación médica, 24 hrs <br> los 365 días del año.</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col md="4">
                            <v-row>
                                <v-col md="3">
                                    <img class="aset" src="../../../assets/img/6.png" />
                                </v-col>
                                <v-col md="7">
                                    <h1 class="lor">Citas con Especialistas</h1>
                                    <span class="nemo">Cobertura a nivel nacional <br> y sin límite de uso.</span> 
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col md="4">
                            <v-row>
                                <v-col md="3">
                                    <img class="aset" src="../../../assets/img/1.png" />
                                </v-col>
                                <v-col md="7">
                                    <h1 class="lor">Citas con Especialistas</h1>
                                    <span class="olp">Revisión y diagnóstico sin<br>costo.Preciospreferenciales</span> 
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="4">
                            <v-row>
                                <v-col md="3">
                                    <img class="aset" src="../../../assets/img/2.png" />
                                </v-col>
                                <v-col md="7">
                                    <h1 class="lor">Asistencia Odontológica</h1>
                                    <span class="nemo">Limpiezas y diagnóstico sin costo</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col md="4">
                            <v-row>
                                <v-col md="3">
                                    <img class="aset" src="../../../assets/img/3.png" />
                                </v-col>
                                <v-col md="7">
                                    <h1 class="lor">Servicios de Ambulancia</h1>
                                    <span class="nemo">Eventos sin costo por emergencia</span> 
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col md="4">
                            <v-row>
                                <v-col md="3">
                                    <img class="aset" src="../../../assets/img/10.png" />
                                </v-col>
                                <v-col md="7">
                                    <h1 class="lor">Médico a domicilio</h1>
                                    <span class="olp">Médico a domicilio en el lugar que elijas</span> 
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-img>
        </div>
    </div>
    
        <!-- <div class="react">
            <v-container>
                <br>
                <v-col md="12" align="center" justify="center">
                    <h1 class="title">SaludYa. El servicio de asistencia médica <br> exclusivo para clientes Mastercard</h1>
                    <v-col md="12" class="text-center description">
                        <span>La nueva app de AXA exclusiva para clientes Mastercard, que brinda servicios de salud para ti y tu familia. </span>
                    </v-col>
                </v-col>
                <v-row>
                    <v-col md="4">  
                        <v-row>
                            <v-col md="3">
                                <img class="aset" src="../../../assets/img/4.png" />
                            </v-col>
                            <v-col md="7">
                                <h1 class="lor">Telemedicina</h1>
                                 <span class="nemo">Orientación médica, 24 hrs <br> los 365 días del año.</span>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col md="4">
                        <v-row>
                            <v-col md="3">
                                <img class="aset" src="../../../assets/img/6.png" />
                            </v-col>
                            <v-col md="7">
                                <h1 class="lor">Citas con Especialistas</h1>
                                <span class="nemo">Cobertura a nivel nacional <br> y sin límite de uso.</span> 
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col md="4">
                        <v-row>
                            <v-col md="3">
                                <img class="aset" src="../../../assets/img/1.png" />
                            </v-col>
                            <v-col md="7">
                                <h1 class="lor">Citas con Especialistas</h1>
                                <span class="olp">Revisión y diagnóstico sin<br>costo.Preciospreferenciales</span> 
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="4">
                        <v-row>
                            <v-col md="3">
                                <img class="aset" src="../../../assets/img/2.png" />
                            </v-col>
                            <v-col md="7">
                                <h1 class="lor">Asistencia Odontológica</h1>
                                 <span class="nemo">Limpiezas y diagnóstico sin costo</span>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col md="4">
                        <v-row>
                            <v-col md="3">
                                <img class="aset" src="../../../assets/img/3.png" />
                            </v-col>
                            <v-col md="7">
                                <h1 class="lor">Servicios de Ambulancia</h1>
                                <span class="nemo">Eventos sin costo por emergencia</span> 
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col md="4">
                        <v-row>
                            <v-col md="3">
                                <img class="aset" src="../../../assets/img/10.png" />
                            </v-col>
                            <v-col md="7">
                                <h1 class="lor">Médico a domicilio</h1>
                                <span class="olp">Médico a domicilio en el lugar que elijas</span> 
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div> -->
</template>
<script>
import bao from '../../../assets/img/992.svg';
import logo from '../../../assets/img/1.svg';
export default {

    data: () => ({
        back: logo,
        backImg: bao,
        slides: [
            {
                id: 1,
                image: '',
                title: 'Telemedicina',
                description: 'Orientación médica, 24 hrs los 365 días del año.'
            },
            {
                id: 2,
                image: '',
                title: 'Citas con Especialistas',
                description: 'Cobertura a nivel nacional  y sin límite de uso.'
            },
            {
                id: 3,
                image: '../../../assets/img/1.png',
                title: 'Citas con Especialistas',
                description: 'Revisión y diagnóstico sin costo.Preciospreferenciales'
            },
            {
                id: 4,
                image: '../../../assets/img/2.png',
                title: 'Asistencia Odontológica',
                description: 'Limpiezas y diagnóstico sin costo.'
            },
            {
                id: 5,
                image: '../../../assets/img/3.png',
                title: 'Servicios de Ambulancia',
                description: 'Eventos sin costo por emergencia.'
            },
            {
                id: 5,
                image: '../../../assets/img/10.png',
                title: 'Médico a domicilio',
                description: 'Médico a domicilio en el lugar que elijas.'
            },
        ],
        options: { autoplay: true }
    }),
    created(){
        this.editElement();
    },
    methods: {
        editElement(){
            document.addEventListener("DOMContentLoaded", () => {
                let arr = [
                    ...document.getElementsByClassName("mdi-chevron-right")
                ];
                arr.forEach(item => {
                    item.setAttribute("aria-label", "navigation button");
                });
            });
        }
    }
}
</script>