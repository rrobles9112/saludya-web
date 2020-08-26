<template>
    <div>
        <v-container class="functionsWeb">
            <v-col md="12" align="center" justify="center">
                <h1 class="functionsTitle">¿Cómo funciona el servicio de SaludYa?</h1>
            </v-col>
            <v-row>
                <v-col md="6" class="functions">
                    <v-list-group  sub-group :id="'id'+item.id" flat v-for="(item, index) in listWeb1" :key="index">
                        <template v-slot:activator>
                            <v-list-item-content @click="data(item.id)">
                                <v-row>
                                    <v-col md="1" style="max-width: 1%">
                                        <img :id="item.id" :src="image" alt="">
                                    </v-col>
                                    <v-col md="11">
                                        <v-list-item-title><b>{{ item.name }}</b></v-list-item-title>
                                    </v-col>
                                </v-row>
                            </v-list-item-content>
                        </template>
                        <v-container style="width: 78%">
                            <span class="descriptionFunction">{{ item.description }}</span>
                        </v-container>
                    </v-list-group>
                </v-col>
                <v-col md="6" class="functions">
                    <v-list-group  sub-group :id="'id'+item.id" flat v-for="(item, index) in listWeb2" :key="index">
                        <template v-slot:activator>
                            <v-list-item-content @click="data(item.id)">
                                <v-row>
                                    <v-col md="1" style="max-width: 1%">
                                        <img :id="item.id" :src="image" alt="">
                                    </v-col>
                                    <v-col md="11">
                                        <v-list-item-title><b>{{ item.name }}</b></v-list-item-title>
                                    </v-col>
                                </v-row>
                            </v-list-item-content>
                        </template>
                        <v-container style="width: 78%">
                            <span class="descriptionFunction">{{ item.description }}</span>
                        </v-container>
                    </v-list-group>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="functionsResponsive">
            <v-col md="12" align="center" justify="center">
                <h1 class="functionsTitle">¿Cómo funciona el servicio de <br> SaludYa?</h1>
            </v-col>
            <v-col md="12" class="functions">
                <v-list-group  sub-group :id="'id'+item.id" flat v-for="(item, index) in list" :key="index">
                    <template v-slot:activator>
                         <v-list-item-content @click="data(item.id)">
                            <v-row>
                                <v-col md="1" style="max-width: 1%">
                                    <img :id="item.id" :src="image" alt="">
                                </v-col>
                                <v-col md="11">
                                    <v-list-item-title><b>{{ item.name }}</b></v-list-item-title>
                                </v-col>
                            </v-row>
                        </v-list-item-content>
                    </template>
                    <v-container style="width: 78%">
                        <span class="descriptionFunction">{{ item.description }}</span>
                    </v-container>
                </v-list-group>
            </v-col>
        </v-container>
    </div>
</template>
<script>
export default {
    data: () => ({
        activate: false,
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAARCAYAAAAPFIbmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD2SURBVHgBfZLbEYIwEEUTHv+WYAn4zWMmJViBWIFYgVKBWAFYgSXg8PiWDqQF/3l4l4kzAsE7s2zCnOzeLLA8zw9Zlvnsj7S+7wPOeVwUxW4R0nV9SwvASVmWlhKybbsCsKdN13UptJ5B9PA8L0EKESvTNAlczSCS67pnVLwh1oZhpEpIVvSRKoSFi8RKiNQ0jUC1GuFjPCd6x5lCZB4tX/LQRlNBGMtBLishRGVMAdkioJZt225n7egTIUUSQBFRjyD4sODj+fVBbUa3I6MY4n04xfnxFxggCaQ0ROxDx3GiqU8NLS4SuNLUmUL0q7yRHwACtqAP1SV9y1OeRW8AAAAASUVORK5CYII=',
        list: [
            { id: "1", name: '¿Cómo me suscribo a SaludYa?', description: 'Suscribirte es muy fácil. Selecciona el Plan que mejor se ajuste a tus necesidades, da clic en “¡Suscríbete Ahora!” a continuación, solo debes completar el formulario de datos personales y de pago, para finalizar da clic en “Registrarme” y listo tienes 30 días gratis para probar el servicio.' },
            { id: "2", name: '¿Cuándo es conveniente solicitar una consulta online?', description: '' },
            { id: "3", name: '¿Cuántos servicios de Telemedicina puedo solicitar?', description: '' },
            { id: "4", name: '¿Cómo hago uso de los servicios de mi plan SaludYa?', description: '' },
            { id: "5", name: '¿Qué sucede luego de mi periodo gratuito?', description: '' },
            { id: "6", name: '¿Cómo puedo cancelar el servicio?', description: '' },
        ],
        listWeb1: [
            { id: "1", name: '¿Cómo me suscribo a SaludYa?', description: 'Suscribirte es muy fácil. Selecciona el Plan que mejor se ajuste a tus necesidades, da clic en “¡Suscríbete Ahora!” a continuación, solo debes completar el formulario de datos personales y de pago, para finalizar da clic en “Registrarme” y listo tienes 30 días gratis para probar el servicio.' },
            { id: "3", name: '¿Cuántos servicios de Telemedicina puedo solicitar?', description: '' },
            { id: "5", name: '¿Qué sucede luego de mi periodo gratuito?', description: '' },
        ],
        listWeb2: [
            { id: "2", name: '¿Cuándo es conveniente solicitar una consulta online?', description: '' },
            { id: "4", name: '¿Cómo hago uso de los servicios de mi plan SaludYa?', description: '' },
            { id: "6", name: '¿Cómo puedo cancelar el servicio?', description: '' },
        ]
    }),
    methods: {
        data(id){
            var cor = document.getElementById("id"+id).getElementsByClassName('v-list-item--active')
            console.log(cor.length)
            if(cor.length > 0){
                document.getElementById(id).src =  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAARCAYAAAAPFIbmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD2SURBVHgBfZLbEYIwEEUTHv+WYAn4zWMmJViBWIFYgVKBWAFYgSXg8PiWDqQF/3l4l4kzAsE7s2zCnOzeLLA8zw9Zlvnsj7S+7wPOeVwUxW4R0nV9SwvASVmWlhKybbsCsKdN13UptJ5B9PA8L0EKESvTNAlczSCS67pnVLwh1oZhpEpIVvSRKoSFi8RKiNQ0jUC1GuFjPCd6x5lCZB4tX/LQRlNBGMtBLishRGVMAdkioJZt225n7egTIUUSQBFRjyD4sODj+fVBbUa3I6MY4n04xfnxFxggCaQ0ROxDx3GiqU8NLS4SuNLUmUL0q7yRHwACtqAP1SV9y1OeRW8AAAAASUVORK5CYII='
            }else{
                document.getElementById(id).src =  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEMSURBVHgBjVHLbcJAEJ1Z2U58owSXkBLiQyTiXNJBMEiRcgsVABUEnyJFIksqyA18czoIJbgE3yzshcfuIiRL/DynmTczb+e95UgqiS06qNQwffNzahnRV3UHR/wSVCIABMT0zDdu1v0sgzYET9/qBQ7/EyEAiUIs+26o8cQAhuhBv3DxAlmPtoS5yfUBcTrw5nxodmf1mJlGtsBmuBzcTo8JtHSgp9OCFcLFq7cyODeHHmfVOzF/2AbTeBG7E5PfS3R8qEyn+krOsa7Dpn9M5wwj69UUpBKGm9maaFWyE/7FXDR3jkisNFkGjcW9QsJP2vd6p+bFKTCN/RxcG8OtZoAm5whaRXTlt0zsADFqc891DA2LAAAAAElFTkSuQmCC'
            }
        }
    },
    computed: {
        
    }
}
</script>