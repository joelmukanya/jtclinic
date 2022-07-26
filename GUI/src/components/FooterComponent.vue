<template>
  <div class="container bg-dark">
    <div class="row">
        <div class="col text-white">
            <p>Copyright &copy; <span>{{getCurrentYear}}</span></p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
   
    methods: {
        getCurrentYear() {
            return new Date().getFullYear();
        }
    }
}
</script>

<style>

</style>