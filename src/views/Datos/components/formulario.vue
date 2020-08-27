<template>
    <div style="background: #fff">
        <v-container class="formWeb">
            <v-row>
                <v-col md="6">
                    <v-col md="12">
                        <label>Nombre</label><br>
                        <input type="text" v-model.trim="user.name" class="nameForm" placeholder="Tu nombre"/>
                        <small v-if="errorName">Tu nombre no puede llevar números o caracteres especiales</small>
                    </v-col>
                    <v-col md="12" style="margin-bottom: 38px">
                        <label>Apellido</label><br>
                        <input type="text" v-model.trim="user.lastName" class="nameForm" placeholder="Tu apellido"/>
                        <small v-if="errorLastName">Tu apellido no puede llevar números o caracteres especiales</small>
                    </v-col>
                    <v-divider style="margin-bottom: 25px"></v-divider>
                    <v-col md="12">
                        <label>Email</label><br>
                        <input type="email" v-model.trim="user.email" class="nameForm" placeholder="Tu email"/>
                        <small v-if="errorEmail">Correo electronico invalido</small>
                    </v-col>
                    <v-col md="12" style="margin-bottom: 38px">
                        <label>Telefono</label><br>
                        <input type="number" v-model.trim="user.phone" class="nameForm" placeholder="Tu telefono"/>
                        <small v-if="errorPhone">Número de telefono incorrecto, solo puede llevar números</small>
                    </v-col>
                    <v-divider style="margin-bottom: 25px"></v-divider>
                    <v-col md="12">
                        <label>Fecha de nacimiento</label><br>
                        <v-row>
                            <v-col md="4">
                                <input type="number" v-model.trim="user.day"  class="dayForm" placeholder="dd"/>
                            </v-col>
                            <v-col md="4">
                                <input type="number" v-model.trim="user.month" class="dayForm" placeholder="mm"/>
                            </v-col>
                            <v-col md="4">
                                <input type="number" v-model.trim="user.year" class="dayForm" placeholder="aaaa"/>
                            </v-col>
                        </v-row>
                        <small v-if="errorDay">El día solo puede llevar números</small>
                        <small v-if="erroMonth">Solo ingresa el número del mes</small>
                        <small v-if="errorYear">Ingresa los 4 digitos de tu año de nacimiento</small>
                    </v-col>
                    <v-col md="12">
                        <label>Ciudad</label><br>
                        <input type="text" v-model.trim="user.city" class="nameForm" placeholder="Tu ciudad"/>
                        <small v-if="errorCity">La ciudad donde te encuentras no puede contener números.</small>
                    </v-col>
                    <v-col md="12">
                        <label>Dirección</label><br>
                        <input type="text" v-model.trim="user.address" class="nameForm" placeholder="Tu dirección"/>
                        <small v-if="errorAddress">Ingresa la dirección de tu residencia.</small>
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
                                <!-- <router-link to="/suscribete" style="text-decoration: none;">                             -->
                                    <v-btn class="trarme" @click="validateInputs"><span class="lep" >Registrarme</span></v-btn>
                                <!-- </router-link> -->
                            </v-col>
                        </v-card>
                    </v-col>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="formResponsive">
             <v-col md="12">
                <label>Nombre</label><br>
                <input type="text" v-model.trim="user.name" class="nameForm" placeholder="Tu nombre"/>
                <small v-if="errorName">Tu nombre no puede llevar números o caracteres especiales</small>
            </v-col>
            <v-col md="12" style="margin-bottom: 38px">
                <label>Apellido</label><br>
                <input type="text" v-model.trim="user.lastName" class="nameForm" placeholder="Tu apellido"/>
                <small v-if="errorLastName">Tu apellido no puede llevar números o caracteres especiales</small>
            </v-col>
            <v-divider style="margin-bottom: 25px"></v-divider>
            <v-col md="12">
                <label>Email</label><br>
                <input type="email" v-model.trim="user.email" class="nameForm" placeholder="Tu email"/>
                <small v-if="errorEmail">Correo electronico invalido</small>
            </v-col>
            <v-col md="12" style="margin-bottom: 38px">
                <label>Telefono</label><br>
                <input type="number" v-model.trim="user.phone" class="nameForm" placeholder="Tu telefono"/>
                <small v-if="errorPhone">Número de telefono incorrecto, solo puede llevar números</small>
            </v-col>
            <v-divider style="margin-bottom: 25px"></v-divider>
            <v-col md="12">
                <label>Fecha de nacimiento</label><br>
                <v-row>
                    <v-col md="4">
                        <input type="number" v-model.trim="user.day"  class="dayForm" placeholder="dd"/>
                    </v-col>
                    <v-col md="4">
                        <input type="number" v-model.trim="user.month" class="dayForm" placeholder="mm"/>
                    </v-col>
                    <v-col md="4">
                        <input type="number" v-model.trim="user.year" class="dayForm" placeholder="aaaa"/>
                    </v-col>
                </v-row>
                <small v-if="errorDay">El día solo puede llevar números</small>
                <small v-if="erroMonth">Solo ingresa el número del mes</small>
                <small v-if="errorYear">Ingresa los 4 digitos de tu año de nacimiento</small>
            </v-col>
            <v-col md="12">
                <label>Ciudad</label><br>
                <input type="text" v-model.trim="user.city" class="nameForm" placeholder="Tu ciudad"/>
                <small v-if="errorCity">La ciudad donde te encuentras no puede contener números.</small>
            </v-col>
            <v-col md="12">
                <label>Dirección</label><br>
                <input type="text" v-model.trim="user.address" class="nameForm" placeholder="Tu dirección"/>
                <small v-if="errorAddress">Ingresa la dirección de tu residencia.</small>
            </v-col>
            <v-col md="12" style="margin-bottom: 38px">
                <v-card class="cardDatos">
                    <v-col md="12">
                        <v-checkbox v-model="data" class="mx-2 checkboxDatos" label="Acepta nuestros Términos y condiciones"></v-checkbox>
                        <v-checkbox v-model="poli" class="mx-2 checkboxDatos" label="Acepta nuestra Política de privacidad"></v-checkbox>
                    </v-col>
                    <v-col md="12">
                        <v-btn class="trarme"><span class="lep" @click="validateInputs">Registrarme</span></v-btn>
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
        poli: false,
        ruleString: /[A-Za-z ñ]+/,
        ruleEmail: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        ruleNumber: /^([0-9])*$/,
        user: {
            name: '',
            lastName: '',
            email: '',
            phone: null,
            day: null,
            month: null,
            year: null,
            city: '',
            address: ''
        },
        errorName: false,
        errorLastName: false,
        errorEmail: false,
        errorPhone: false,
        erroMonth: false,
        errorYear: false,
        errorDay: false,
        errorCity: false,
        errorAddress: false,
    }),
    methods: {
        validateInputs(){

            console.log(!this.ruleNumber.test(this.user.phone))


            if(!this.ruleString.test(this.user.name)){
                this.errorName = true
            }else if(!this.ruleString.test(this.user.lastName)){
                this.errorName = false
                this.errorLastName = true
            }else if(!this.ruleEmail.test(this.user.email)){
                this.errorLastName = false
                this.errorEmail = true
            }else if(this.user.phone < 700000){
                this.errorEmail = false
                this.errorPhone = true
            }else if(this.user.day < 1 || this.user.day > 31 ){
                this.errorPhone = false
                this.errorDay = true
            }else if(!this.ruleString.test(this.user.city)){
                this.errorDay = false
                this.errorCity = true
            }else if(!this.user.address){
                this.errorCity = false
                this.errorAddress = true

            }
            else{
                this.$router.push('/suscribete')
            }
        }
    }
}
</script>