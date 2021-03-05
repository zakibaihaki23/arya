<template>
  <v-app>
    <v-data-table
      :headers="table"
      :items="tableData"
      align="left"
      :items-per-page="10"
      class="elevation-1"
    >
      <template v-slot:tableData="props">
        <tr>
          <td>{{ props.tableData.product_name }}</td>
          <td>{{ props.tableData.category }}</td>
          <td>{{ props.tableData.price }}</td>
          <td>{{ props.tableData.categroy }}</td>
          <td>{{ props.tableData.total_order }}</td>
          <td>{{ props.tableData.order_complete }}</td>
          <td>{{ props.tableData.order_incomplete }}</td>
        </tr>
      </template>
      
    </v-data-table>

    <!-- NAMPILIN SEMUA DATA
    <pre>{{tableData}}</pre> -->
    <br><br><br>
    <div>
      <v-card>
        <h1>create</h1>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="form.product_name"
            label="Title"
          ></v-text-field>
          <v-text-field
            v-model="author"
            label="Author"
          ></v-text-field>
        </v-col>
        <v-btn
          color="primary"
          @click="submitForm()"
        >
          SUBMIT
        </v-btn>

      </v-card>
    </div>
  </v-app>  
</template> 

<script>
  import axios from 'axios'
  
  export default {
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
            text: 'Product_name',
            value: 'product_name',
          },
          {
            text: 'Category',
            value: 'category',
          },
          {
            text: 'Price',
            value: 'price',
          },
          {
            text: 'Categroy',
            value: 'categroy',
          },
           {
            text: 'Total_order',
            value: 'total_order',
          },
           {
            text: 'Order_complete',
            value: 'order_complete',
          },
           {
            text: 'Order_incomplete',
            value: 'order_incomplete',
          },
        ],
        tableData: [],
      }
    },
    methods: {
      renderData() {
        let that = this
        axios
          .get('https://602e1cd14410730017c50005.mockapi.io/product')
          //https://jsonplaceholder.typicode.com/comments?postId=1
          .then((response) => {
            console.log(response)
            that.tableData = response.data
          })
          
          .catch((error) => {
            console.log(error)
          })
      },
      submitForm(){
        axios.post('https://602e1cd14410730017c50005.mockapi.io/product', this.form)
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