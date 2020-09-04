<template>
    <div style="background: #fafafa" id="producto">
        <v-container id="planes">
            <v-row>
                <v-col md="12" aling="center" justify="center">
                    <h1 class="plan">Planes ajustados a tus necesidades</h1>
                </v-col>
            </v-row>
            <v-col md="12" align="center" justify="center">
                 <v-row>
                    <v-col md="6" v-for="(slide, i) in slides" :key="i">
                        <v-card class="planCard" :style="{ float: slide.position }">
                            <v-container style="padding: 37px;">
                                <v-col md="12" class="colTitlePlan">
                                    <span class="titlePlan">{{ slide.title }}</span>
                                </v-col>
                                <ul>
                                    <li v-for="(item, index) in slide.benefits" :key="index">
                                        <span>{{ item.name }}</span>
                                        <v-tooltip top >
                                            <template v-slot:activator="{ on, attrs }">
                                                <img src="../../../assets/img/info.png" v-bind="attrs" v-on="on" style="float: right; margin-top: 7px;" alt="">
                                            </template>
                                            <v-container>
                                                <v-col md="12" align="center" justify="center">
                                                    <span class="tooltipTitle">{{ item.name }}</span>
                                                </v-col>
                                                <v-col md="12" align="center" justify="center">
                                                    <span class="tooltipDescription">{{ item.description }}</span>
                                                </v-col>
                                                
                                            </v-container>
                                        </v-tooltip>
                                    </li>
                                </ul>
                                <v-col md="12" align="center" justify="center">
                                    <span class="tooltipDescription" v-if="slide.id == 2"><b>{{ slide.titular }}</b></span>
                                </v-col>
                                <v-col :class="slide.class">
                                    <span class="titular">{{ slide.caracteristics }}</span>
                                </v-col>
                                <h1 class="price">{{ slide.price }}</h1>
                                    <a href="/datos" class="ahora">
                                        <v-btn class="btnSuscribete" color="#5090FC" @click="this.$gtag.event(`Click a suscripción a un plan ${slide.title}`,{ method: 'Google' }); window.fbq('trackCustom',`Click a suscripción a un plan ${slide.title}`);">¡Suscríbete ahora!</v-btn>
                                    </a>
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-container>
        <v-container id="planesResponsive">
            <v-col md="12" align="center" justify="center">
                <h1 class="firstPlan">Planes ajustados a tus necesidades</h1>
                <v-carousel height="550" class="planes">
                    <v-carousel-item v-for="(slide, i) in slides" :key="i">
                        <v-card class="planCard" style="height: 405px; width: 290px">
                            <v-container>
                                <span class="titlePlan">{{ slide.title }}</span>
                                <ul>
                                    <li v-for="(item, index) in slide.benefits" :key="index">
                                        <span>{{ item.name }}</span>
                                        <v-tooltip top >
                                            <template v-slot:activator="{ on, attrs }">
                                                <img src="../../../assets/img/info.png" v-bind="attrs" v-on="on" style="float: right; margin-top: 7px;" alt="">
                                            </template>
                                            <v-container>
                                                <v-col md="12" align="center" justify="center">
                                                    <span class="tooltipTitle">{{ item.name }}</span>
                                                </v-col>
                                                <v-col md="12" align="center" justify="center">
                                                    <span class="tooltipDescription">{{ item.description }}</span>
                                                </v-col>
                                            </v-container>
                                        </v-tooltip>
                                    </li>
                                </ul>
                                <span class="caracteristics">{{ slide.caracteristics }}</span>
                                <h1 class="price">{{ slide.price }}</h1>
                                    <a href="/datos">
                                        <v-btn class="btnSuscribete" @click="this.$gtag.event(`Click a suscripción al plan ${slide.title}`,{ method: 'Google' }); window.fbq('trackCustom',`Click a suscripción al plan ${slide.title}`)" color="#5090FC">¡Suscríbete ahora!</v-btn>
                                    </a>
                            </v-container>
                        </v-card>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-container>
    </div>
</template>
<script>
export default {
    data: () => ({
        slides: [
            {
                id: 1,
                title: 'Plan Individual',
                benefits: [
                    { id: 1, name: 'Telemedicina', description: 'Orientación médica, 24 hrs los 365 días del año por chat, teléfono o videollamada.' },
                    { id: 2, name: 'Citas con especialistas', description: 'Concreta cita con Médicos Especialistas sin límite de uso y a precios preferenciales.' },
                    { id: 3, name: 'Asistencia Oftalmológica', description: 'Accede a diversos descuentos, así como costos preferentes para la adquisición de anteojos graduados. ' },
                    { id: 4, name: 'Asistencia Odontolígica', description: 'Dispones de 2 limpiezas y 2 consultas de diagnóstico sin coto por año. Con descuentos exclusivos con prestadores de servicios (radiografías, endodoncia, cosmética dental, etc)' },
                    { id: 5, name: 'Servicio de Ambulancia', description: 'En caso de accidente o enfermedad contaras con hasta 2 Eventos sin costo de ambulancia por año' }
                ],
                caracteristics: 'Gratis por 30 días',
                price: '$70.00',
                position: 'right',
                titular: '',
                class: 'colTitular'
            },
            {
                id: 2,
                title: 'Plan Familiar',
                benefits: [
                    { id: 1, name: 'Telemedicina', description: 'Orientación médica, 24 hrs los 365 días del año por chat, teléfono o videollamada.' },
                    { id: 2, name: 'Citas con especialistas', description: 'Concreta cita con Médicos Especialistas sin límite de uso y a precios preferenciales.' },
                    { id: 3, name: 'Asistencia Oftalmológica', description: 'Accede a diversos descuentos, así como costos preferentes para la adquisición de anteojos graduados. ' },
                    { id: 4, name: 'Asistencia Odontolígica', description: 'Dispones de 2 limpiezas y 2 consultas de diagnóstico sin coto por año. Con descuentos exclusivos con prestadores de servicios (radiografías, endodoncia, cosmética dental, etc)' },
                    { id: 5, name: 'Servicio de Ambulancia', description: 'En caso de accidente o enfermedad contaras con hasta 2 Eventos sin costo de ambulancia por año' }
                ],
                promotion: 'Titular + máximo 3 familiares',
                caracteristics: 'Gratis por 30 días',
                price: '$100.00',
                position: 'left',
                titular: 'Titular + máximo 3 familiares'
            }
        ]
    })
}
</script>