<template>
  <div>
    
    <v-row class="px-12">
      <v-col cols="6">
        <br>  <h3>List Packing</h3>
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
      <v-col cols="3"><FilterArea></FilterArea></v-col>
      <v-col><FilterWarehouse></FilterWarehouse></v-col>
      <v-col><FilterDeliveryDate></FilterDeliveryDate></v-col>
      <v-col><FilterSearch></FilterSearch></v-col>

      <!-- TAMBAH TABEL DATA -->
      <v-col cols="12">
        <br> 
        <v-list-group group="inventory" color="green"  v-privilege="'ivt'">
                    <template v-slot:activator>
                        <v-list-item-icon class="p-icon-nav">
                        <v-icon></v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="fs13">Create Packing</v-list-item-title>
                    </template>

            <v-col
              cols="12"
              sm="12"
            >
              <v-text-field
                color="green"
                v-model="form.PackingCode"
                label="PACKING CODE"
              ></v-text-field>
              <v-text-field
                color="green"
                v-model="form.DeliveryDate"
                label="DELIVERY DATE"
              ></v-text-field>
              <v-text-field
                color="green"
                v-model="form.Status"
                label="STATUS"
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
                <td>{{ props.tableData.document_code }}</td>
                <td>{{ props.tableData.delivery_date }}</td>
                <td>{{ props.tableData.Status }}</td>
                <td>{{ props.tableData.Action }}</td>
              </tr>
            </template>
          </v-data-table>
      </v-col>

    </v-row>
  </div>  
</template> 

<script>
  import axios from 'axios'
  import FilterArea from '../../components/Filter/FilterArea.vue'
  import FilterWarehouse from '../../components/Filter/FilterWarehouse.vue'
  import FilterDeliveryDate from '../../components/Filter/FilterDeliveryDate.vue'
  import FilterSearch from '../../components/Filter/FilterSearch.vue'
  import Navbar from '../../components/Navbar.vue'
  
  export default {
  components: { FilterArea, FilterWarehouse, FilterDeliveryDate, FilterSearch, Navbar,  },
    name: 'ListPacking',
    data() {
      return {
        title:'',
        author:'',
        form:{},
        table: [
          {
            text: 'PACKING CODE',
            value: 'document_code',
          },
          {
            text: 'DELIVERY DATE',
            value: 'delivery_date',
          },
          {
            text: 'STATUS',
            value: 'Status',
          },
          {
            text: 'ACTION',
            value: 'Action',
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
          .get('http://10.10.0.38:8083/v1/packing')
          
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