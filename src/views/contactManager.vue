<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Contact Manager
          <router-link to="/contact/add" class="btn btn-success btn-sm"><i class="fa fa-plus-circle"></i> New</router-link>
        </p>
        <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit blanditiis porro a sunt sequi nemo alias ipsum adipisci cumque, labore iusto? Eos facilis delectus unde sed laudantium repellat modi nesciunt.</p>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Search Name" />
                </div>
                <div class="col">
                  <input type="submit" class="btn btn-outline-dark"/>
                </div>
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default{
  name:'contactManager',
}
</script>

<style scoped>

</style>
