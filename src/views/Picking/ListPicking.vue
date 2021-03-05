<template>
  <div>
    
    <v-row class="px-12">
      <v-col cols="6">
        <br>  <h3>Packing Item</h3>
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
      <v-col cols="2"><FilterArea></FilterArea></v-col>
      <v-col><FilterWarehouse></FilterWarehouse></v-col>
      <v-col><FilterDeliveryDate></FilterDeliveryDate></v-col>
      <v-col><FilterDeliveryTime></FilterDeliveryTime></v-col>
      <v-col><FilterStatus></FilterStatus></v-col>
      <v-col><FilterSearch></FilterSearch></v-col>
      

      <!-- TAMBAH TABEL DATA -->
      <v-col cols="12">
        <br> 
        <v-list-group group="inventory" color="green"  v-privilege="'ivt'">
                    <template v-slot:activator>
                        <v-list-item-icon class="p-icon-nav">
                        <v-icon></v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="fs13">Tambah List Order</v-list-item-title>
                    </template>

            <v-col
              cols="12"
              sm="12"
            >
              <v-text-field
                color="green"
                v-model="form.OrderCode"
                label="ORDER CODE"
              ></v-text-field>
              <v-text-field
                color="green"
                v-model="form.DelieryDate"
                label="DELIVERY DATE"
              ></v-text-field>
              <v-text-field
                color="green"
                v-model="form.Merchant"
                label="MERCHANT"
              ></v-text-field>
              <v-text-field
                color="green"
                v-model="form.Branch"
                label="BRANCH"
              ></v-text-field>
              <v-text-field
                color="green"
                v-model="form.TotalAmount"
                label="TOTAL AMOUNT"
              ></v-text-field>
              <v-text-field
                color="green"
                v-model="form.Start"
                label="START"
              ></v-text-field>
              <v-text-field
                color="green"
                v-model="form.Finis"
                label="FINIS"
              ></v-text-field>
              <v-text-field
                color="green"
                v-model="form.Status"
                label="STATUS"
              ></v-text-field>
              <v-text-field
                color="green"
                v-model="form.Item"
                label="ITEM"
              ></v-text-field>
              <v-text-field
                color="green"
                v-model="form.Helper"
                label="HELPER"
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
                <td>{{ props.tableData.OrderCode }}</td>
                <td>{{ props.tableData.DelieryDate }}</td>
                <td>{{ props.tableData.DelieryTime }}</td>
                <td>{{ props.tableData.Merchant }}</td>
                <td>{{ props.tableData.Branch }}</td>
                <td>{{ props.tableData.TotalAmount }}</td>
                <td>{{ props.tableData.Start }}</td>
                <td>{{ props.tableData.Finis }}</td>
                <td>{{ props.tableData.Status }}</td>
                <td>{{ props.tableData.Item }}</td>
                <td>{{ props.tableData.Helper }}</td>
                
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
  import FilterSearch from '../../components/Filter/FilterSearch.vue'
  import Navbar from '../../components/Navbar.vue'
  import FilterStatus from '../../components/Filter/FilterStatus.vue'
  import FilterDeliveryDate from '../../components/Filter/FilterDeliveryDate.vue'
  import FilterDeliveryTime from '../../components/Filter/FilterDeliveryTime.vue'
  
  export default {
  components: { Navbar, FilterArea, FilterWarehouse, FilterSearch, FilterDeliveryDate, FilterDeliveryTime, FilterStatus, },
    name: 'apitest',
    data() {
      return {
        title:'',
        author:'',
        form:{},
        table: [
          {
            text: 'Id',
            value: 'id',
          },
          {
            text: 'ORDER CODE',
            value: 'OrderCode',
          },
          {
            text: 'DELIVERY DATE',
            value: 'DeliveryDate',
          },
          {
            text: 'DELIVERY TIME',
            value: 'DeliveryTime',
          },
          {
            text: 'MERCHANT',
            value: 'Merchant',
          },
          {
            text: 'BRANCH',
            value: 'Branch',
          },
          {
            text: 'TOTAL AMOUNT',
            value: 'TotalAmount',
          },
          {
            text: 'START',
            value: 'Start',
          },
          {
            text: 'FINISH',
            value: 'FInish',
          },
          {
            text: 'STATUS',
            value: 'Status',
          },
          {
            text: 'ITEM',
            value: 'Item',
          },
           {
            text: 'HELPER',
            value: 'Helper',
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
          .get('https://603db17548171b0017b2d7f0.mockapi.io/Helper')
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