<template>
    <div style="background: #fff">
        <v-container class="formWeb">
            <v-row>
                <v-col md="6">
                    <v-col md="12">
                        <label>Nombre</label><br>
                        <input type="text" class="nameForm" placeholder="Tu nombre"/>
                    </v-col>
                    <v-col md="12" style="margin-bottom: 38px">
                        <label>Apellido</label><br>
                        <input type="text" class="nameForm" placeholder="Tu apellido"/>
                    </v-col>
                    <v-divider style="margin-bottom: 25px"></v-divider>
                    <v-col md="12">
                        <label>Email</label><br>
                        <input type="text" class="nameForm" placeholder="Tu email"/>
                    </v-col>
                    <v-col md="12" style="margin-bottom: 38px">
                        <label>Telefono</label><br>
                        <input type="text" class="nameForm" placeholder="Tu telefono"/>
                    </v-col>
                    <v-divider style="margin-bottom: 25px"></v-divider>
                    <v-col md="12">
                        <label>Fecha de nacimiento</label><br>
                        <v-row>
                            <v-col md="4">
                                <input type="text" class="dayForm" placeholder="dd"/>
                            </v-col>
                            <v-col md="4">
                                <input type="text" class="dayForm" placeholder="mm"/>
                            </v-col>
                            <v-col md="4">
                                <input type="text" class="dayForm" placeholder="aaaa"/>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col md="12">
                        <label>Ciudad</label><br>
                        <input type="text" class="nameForm" placeholder="Tu ciudad"/>
                    </v-col>
                    <v-col md="12">
                        <label>Dirección</label><br>
                        <input type="text" class="nameForm" placeholder="Tu dirección"/>
                    </v-col>
                </v-col>
                <v-col md="6">
                    <v-col md="12" style="margin-bottom: 38px">
                        <v-card class="cardDatos">
                            <v-col md="12">
                                <v-checkbox v-model="data" class="mx-2 checkboxDatos" label="Acepta nuestros Términos y condiciones"></v-checkbox>
                                <v-checkbox v-model="poli" class="mx-2 checkboxDatos" label="Acepta nuestra Política de privacidad"></v-checkbox>
                            </v-col>
                            <v-col md="12" align="center" justify="center">
                                <router-link to="/suscribete" style="text-decoration: none;">                            
                                    <v-btn class="trarme"><span class="lep">Registrarme</span></v-btn>
                                </router-link>
                            </v-col>
                        </v-card>
                    </v-col>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="formResponsive">
            <v-col md="12">
                <label>Nombre</label><br>
                <input type="text" class="nameForm" placeholder="Tu nombre"/>
            </v-col>
            <v-col md="12" style="margin-bottom: 38px">
                <label>Apellido</label><br>
                <input type="text" class="nameForm" placeholder="Tu apellido"/>
            </v-col>
            <v-divider style="margin-bottom: 25px"></v-divider>
            <v-col md="12">
                <label>Email</label><br>
                <input type="text" class="nameForm" placeholder="Tu email"/>
            </v-col>
            <v-col md="12" style="margin-bottom: 38px">
                <label>Telefono</label><br>
                <input type="text" class="nameForm" placeholder="Tu telefono"/>
            </v-col>
            <v-divider style="margin-bottom: 25px"></v-divider>
            <v-col md="12">
                <label>Fecha de nacimiento</label><br>
                <v-row>
                    <v-col md="4">
                        <input type="text" class="nameForm" placeholder="dd"/>
                    </v-col>
                    <v-col md="4">
                        <input type="text" class="nameForm" placeholder="mm"/>
                    </v-col>
                    <v-col md="4">
                        <input type="text" class="nameForm" placeholder="aaaa"/>
                    </v-col>
                </v-row>
            </v-col>
            <v-col md="12">
                <label>Ciudad</label><br>
                <input type="text" class="nameForm" placeholder="Tu ciudad"/>
            </v-col>
            <v-col md="12">
                <label>Dirección</label><br>
                <input type="text" class="nameForm" placeholder="Tu dirección"/>
            </v-col>
            <v-col md="12" style="margin-bottom: 38px">
                <v-card class="cardDatos">
                    <v-col md="12">
                        <v-checkbox v-model="data" class="mx-2 checkboxDatos" label="Acepta nuestros Términos y condiciones"></v-checkbox>
                        <v-checkbox v-model="poli" class="mx-2 checkboxDatos" label="Acepta nuestra Política de privacidad"></v-checkbox>
                    </v-col>
                    <v-col md="12">
                        <router-link to="/suscribete" class="tion" style="text-decoration: none;">
            
                            <v-btn class="trarme"><span class="lep">Registrarme</span></v-btn>
                        </router-link>
                    </v-col>
                </v-card>
            </v-col>
        </v-container>
    </div>
</template>
<script>
export default {
    data: () =>({
        data: false,
        poli: false
    })
}
</script>