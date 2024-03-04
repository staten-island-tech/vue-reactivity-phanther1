<template>
  <div class="header">
    <h1>War Thunder Tank Sale</h1>
    <h2>BEWARE, DON'T SPEND MORE THAN 1 MILLION SILVER LIONS OR ELSE!!! (I warned you)</h2>
    <a href="https://warthunder.com/en/" target="_blank" >Download War Thunder Now!</a>
  </div>
    <div class="flexbox">
    <cardSet
      v-for="tank in tanks"
      :key="tank.name"
      :Tank="tank"
    />
  </div>
  <div class="cartdiv">
    <CheckOut />
  </div>
</template>

<script setup>
import cardSet from "@/components/ItemCard.vue";
import CheckOut from "@/components/CheckOut.vue";
const tanks = [
  { 
    name: "M4",
    nation: "America",
    price: 1300,
    img: "https://th.bing.com/th/id/OIP.DyAhQ-E2bc0IKZSBmhVa_gHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  { 
    name: "M18 Hellcat",
    nation: "America",
    price: 38000,
    img: "https://th.bing.com/th/id/OIP.PX-u_0Y4aHhVS_cMde6EFAHaEK?w=294&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  { 
    name: "M26 Pershing",
    nation: "America",
    price: 53000,
    img: "https://th.bing.com/th/id/OIP.9pZlhEr_KoCTxhRTxoA-IQHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  { 
    name: "M60",
    nation: "America",
    price: 150000,
    img: "https://th.bing.com/th/id/OIP.0Ha6A0QITltHEM10g2WkEgHaEK?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },

  { 
    name: "Pz.Kpfw. IV Ausf. F2",
    nation: "Germany",
    price: 16000,
    img: "https://th.bing.com/th/id/OIP.pEXEpk54QrXtEVHE8U-XMAHaEk?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  { 
    name: "Tiger I",
    nation: "Germany",
    price: 43000,
    img: "https://th.bing.com/th/id/OIP.Fb2vnoftOlO-HjTkd8iRgQHaDw?w=304&h=177&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  { 
    name: "Panther II",
    nation: "Germany",
    price: 98000,
    img: "https://th.bing.com/th/id/OIP.6NZIDOX-CcwHfDozXlB8lgHaEK?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  { 
    name: "Leopard 2A5",
    nation: "Germany",
    price: 210000,
    img: "https://th.bing.com/th/id/OIP.fjPF6AQhCzdbo18-_CA9MwHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },

  { 
    name: "AMX-13 (FL11)",
    nation: "France",
    price: 24000,
    img: "https://th.bing.com/th/id/OIP.dXoNlLTN93IXfLGqOb9NjAHaEt?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  { 
    name: "Char B1 bis",
    nation: "France",
    price: 30000,
    img: "https://th.bing.com/th/id/OIP.ti6RQ3J__pWSEvbsqW5qAQHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  { 
    name: "AMX-50 Surbaissé",
    nation: "France",
    price: 85000,
    img: "https://th.bing.com/th/id/OIP.NQXGWFPDrDTEZQDBjb6dcgHaFF?w=242&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  { 
    name: "AMX-30 Super",
    nation: "France",
    price: 110000,
    img: "https://th.bing.com/th/id/OIP.u3B5pEVhF6fE2hlLyA4eiAAAAA?w=174&h=141&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },

  { 
    name: "T-34",
    nation: "Russia",
    price: 16000,
    img: "https://th.bing.com/th/id/OIP.LUgW6JD-Q4M6NdFZSiyTXwHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  { 
    name: "IS-2",
    nation: "Russia",
    price: 42000,
    img: "https://th.bing.com/th/id/OIP.5VXt27puPYmv_Uqt2LuHrQHaEK?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  { 
    name: "T-80B",
    nation: "Russia",
    price: 94000,
    img: "https://th.bing.com/th/id/OIP.QysbIOw_pWlNttmobAO1xAHaEL?w=321&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  { 
    name: "T-90A",
    nation: "Russia",
    price: 210000,
    img: "https://th.bing.com/th/id/OIP.HyYAYoQjM-UepaF0XTvy8gHaEK?w=282&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  }
];

</script>

<style scoped>
.header {
  text-align: center;
  margin-right: 20%;
}

.flexbox {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 70%;
}
</style>