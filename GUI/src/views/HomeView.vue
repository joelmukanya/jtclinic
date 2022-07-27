<template>
    <div class="container">
        <h2>Dentists - Patients</h2>
        <table>
            <thead>
                <tr>
                    <th>Doctor ID</th>
                    <th>Doctor Fullname</th>
                    <th>Dentist Age</th>
                    <th>Practice Number</th>
                    <th>Patient Number</th>
                    <th>Payment Methods</th>
                    <th>Medical Aid</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(dp, index) in dentistPatients" :key="index">
                    <td>{{dp.id}}</td>
                    <td>{{dp["Doctor Fullname"]}}</td>
                    <td>{{dp.dentistAge}}</td>
                    <td>{{dp.practiceNumb}}</td>
                    <td>{{dp["Patient Fullname"]}}</td>
                    <td>{{dp.paymentMethods}}</td>
                    <td>{{dp.medicalAid}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    computed: {
        dentistPatients() {
            return this.$store.state.dentistPatients
        }
    },
    mounted() {
        this.$store.dispatch('fetchDentistPatients');
    }
 }
</script>

<style>

</style>