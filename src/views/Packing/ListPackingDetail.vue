<template>
  <div>
    
    <v-row class="px-12">
      <v-col cols="6">
        <br>  <h3>List Packing Detail</h3>
      </v-col>
    </v-row>

    <Navbar></Navbar>
    <!-- <Appbar></Appbar> -->
  <br>
  
    <v-row class="px-12">
      <v-col 
      cols="12"
      rounded>

      <v-row class="px-12">
      <v-col cols="6"><FilterSearch></FilterSearch></v-col>

      <!-- TAMBAH TABEL DATA -->
      <v-col cols="12">
        <br> 
        <v-list-group group="inventory" color="green"  v-privilege="'ivt'">
                    <template v-slot:activator>
                        <v-list-item-icon class="p-icon-nav">
                        <v-icon></v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="fs13">Create Helper</v-list-item-title>
                    </template>

            <v-col
              cols="12"
              sm="12"
            >
              <v-text-field
                color="green"
                v-model="form.Item"
                label="Item"
              ></v-text-field>
              <v-text-field
                color="green"
                v-model="form.TotalOrder"
                label="Total Order"
              ></v-text-field>
              <v-text-field
                color="green"
                v-model="form.UOM"
                label="UOM"
              ></v-text-field>
              <v-text-field
                color="green"
                v-model="form.TotalPackingPack"
                label="Total Packing Pack"
              ></v-text-field>
              <v-text-field
                color="green"
                v-model="form.TotalPackingKg"
                label="Total Packing Kg"
              ></v-text-field>
              <v-text-field
                color="green"
                v-model="form.Packingby"
                label="Packing By"
              ></v-text-field>
            </v-col>
            
            <v-btn
              style="color:white"
              color="green"
              @click="submitForm()"
            >
              TAMBAH
            </v-btn>
        </v-list-group>
        <br><br>
      </v-col>

      </v-row>
      
        <!-- ISI TABEL -->

         <!-- NAMPILIN SEMUA DATA
        <pre>{{tableData}}</pre> -->

          <v-data-table 
            :headers="table"
            :items="tableData"
            :items-per-page="10"
          >
            <template v-slot:tableData="props">
              <tr>
                <td>{{ props.tableData.id }}</td>
                <td>{{ props.tableData.Item }}</td>
                <td>{{ props.tableData.TotalOrder }}</td>
                <td>{{ props.tableData.UOM}}</td>
                <td>{{ props.tableData.TotalPackingPack }}</td>
                <td>{{ props.tableData.TotalPackingKg }}</td>
                <td>{{ props.tableData.Packingby }}</td>
              </tr>
            </template>
          </v-data-table>
      </v-col>

    </v-row>
  </div>  
</template> 

<script>
  import axios from 'axios'
  import FilterSearch from '../../components/Filter/FilterSearch.vue'
  import Navbar from '../../components/Navbar.vue'
  // import Appbar from '../components/Appbar.vue'
  
  export default {
  components: { FilterSearch, Navbar,  },
    name: 'apitest',
    data() {
      return {
        title:'',
        author:'',
        form:{},
        table: [
           {
            text: 'NO',
            value: 'No',
          },
          {
            text: 'Id',
            value: 'id',
          },
          {
            text: 'Item',
            value: 'Item',
          },
          {
            text: 'TOTAL ORDER',
            value: 'TotalOrder',
          },
          {
            text: 'UOM',
            value: 'UOM',
          },
          {
            text: 'TOTAL PACKING ( PACK )',
            value: 'TotalPackingPack',
          },
          {
            text: 'TOTAL PACKING ( Kg )',
            value: 'TotalPackingKg',
          },
          {
            text: 'PACKING BY',
            value: 'Packingby',
          },
        ],
        tableData: [],
      }
    },
    methods: {
      renderData() {
        let that = this
        axios

          //UNTUK MENGAMBIL & MENAMPILKAN DATA
          .get('{{URL}}/v1/packing/items')
          .then((response) => {
            console.log(response.data)
            that.tableData = response.data
          })
          
          .catch((error) => {
            console.log(error)
          })
          },

          // UNTUK MEMASUKAN DATA
          submitForm(){
            axios.post('https://603db17548171b0017b2d7f0.mockapi.io/Helper', this.form)
          .then(function (response) {
            console.log(response);
            })
          .catch(function (error) {
            console.log(error);
              });
          }
    },
    created() {
      this.renderData()
    },
  }
</script>

<style scoped>
  .isitbl {
    height: 100%;
    width: 100%;
    position: relative;
    top: 0;
    right: 0;
  }
</style>