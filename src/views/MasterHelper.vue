<template>
  <div>
    <v-row class="px-12">
      <v-col cols="6">
        <br />
        <h3>MASTER HELPER</h3>
      </v-col>
    </v-row>

    <Navbar></Navbar>
    <!-- <Appbar></Appbar> -->
    <br />

    <v-row class="px-12">
      <v-col cols="12" rounded>
        <v-row class="px-12">
          <v-col cols="4"><FilterArea></FilterArea></v-col>
          <v-col><FilterWarehouse></FilterWarehouse></v-col>
          <v-col><FilterSearch></FilterSearch></v-col>

          <!-- TAMBAH TABEL DATA -->
          <v-col cols="12">
            <br />
            <v-list-group group="inventory" color="green" v-privilege="'ivt'">
              <template v-slot:activator>
                <v-list-item-icon class="p-icon-nav">
                  <v-icon></v-icon>
                </v-list-item-icon>
                <v-list-item-title class="fs13"
                  >Create Helper</v-list-item-title
                >
              </template>

              <v-col cols="12" sm="12">
                <v-text-field
                  color="green"
                  v-model="form.Name"
                  label="NAMA HELPER"
                ></v-text-field>
                <v-text-field
                  color="green"
                  v-model="form.PhoneNumber"
                  label="NO HP"
                ></v-text-field>
                <v-text-field
                  color="green"
                  v-model="form.Type"
                  label="ALAMAT"
                ></v-text-field>
                <v-text-field
                  color="green"
                  v-model="form.Warehouse"
                  label="Werehouse"
                ></v-text-field>
                <v-text-field
                  color="green"
                  v-model="form.Status"
                  label="Status"
                ></v-text-field>
              </v-col>

              <v-btn style="color:white" color="green" @click="submitForm()">
                TAMBAH
              </v-btn>
            </v-list-group>
            <br /><br />
          </v-col>
        </v-row>

        <!-- ISI TABEL -->

        <!-- NAMPILIN SEMUA DATA
        <pre>{{tableData}}</pre> -->

        <v-data-table :headers="table" :items="tableData" :items-per-page="10">
          <template v-slot:tableData="props">
            <tr>
              <td>{{ props.items.code }}</td>
              <td>{{ props.items.name }}</td>
              <td>{{ props.items.phone_no }}</td>
              <td>{{ props.items.address }}</td>
              <td>{{ props.items.Status }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import axios from 'axios'
  import FilterArea from '../components/Filter/FilterArea.vue'
  import FilterWarehouse from '../components/Filter/FilterWarehouse.vue'
  import FilterSearch from '../components/Filter/FilterSearch.vue'
  import Navbar from '../components/Navbar.vue'
  // import Appbar from '../components/Appbar.vue'

  export default {
    components: { Navbar, FilterArea, FilterWarehouse, FilterSearch },
    name: 'apitest',
    data() {
      return {
        title: '',
        author: '',
        form: {},
        table: [
          {
            text: 'Helper ID',
            value: 'code',
          },
          {
            text: 'Name',
            value: 'name',
          },
          {
            text: 'Phone No',
            value: 'phone_no',
          },
          {
            text: 'Address',
            value: 'address',
          },

          // {
          //   text: 'Warehouse',
          //   value: 'warehouse.warehouse_name',
          // },
          {
            text: 'Status',
            value: 'status',
          },
          {
            value: 'actions',
            sortable: false,
          },
        ],
        tableData: [],
      }
    },
    methods: {
      renderData() {
        const token = localStorage.getItem('token')
        axios
          .get('v1/helper', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            // let that = this;

            this.tableData = response.data.data
            if (this.tableData === null) {
              this.tableData = []
              this.isLoading = false
            }
          })
          .catch((error) => {
            console.log(error)
          })
      },
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
