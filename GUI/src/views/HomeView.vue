<template>
    <div class="container">
        <h2>Dentists - Patients</h2>
    </div>
</template>

<script>
export default {
    computed: {
        dentistPatients() {
            return this.$store.state.dentistPatients
        }
    },
    // data() {
    //     return {
    //         id: 0,
    //         doctorFullname: '',
    //         dentistAge: 0,
    //         practiceNumb: '',
    //         patientFullname: '',
    //         paymentMethods: '',
    //         medicalAid: ''
    //     }
    // },
    mounted() {
        this.$store.dispatch('fetchDentistPatients');
    }
 }
</script>

<style>

</style>