<template>
  <section id="product">
    <div class="container section">
      <h1>Great, now check out our products and select the ones</h1>
      <p>Select the products you'd like to receive refills for.</p>
      <div class="columns mt-6">
        <div class="column is-6" v-for="product in products" :key="product.id">
          <ProductCard
            :id="product.id"
            :title="product.title"
            :subtitle="product.brand"
            :image="product.image"
            :pricePerOz="product.price"
            :description="product.description"
            v-on:selected="addProduct($event)"
            v-on:unselected="removeProduct($event)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedProducts: new Set(),
      products: [
        {
          id: "ls-0001",
          title: "Peppermint Castile Soap",
          type: "castile soap",
          form: "liquid",
          brand: "Dr Bronner's",
          price: [
            { price: 60, qty: 32, priceUnit: "usd-cents", qtyUnit: "oz" },
            { price: 55, qty: 48, priceUnit: "usd-cents", qtyUnit: "oz" },
            { price: 50, qty: 64, priceUnit: "usd-cents", qtyUnit: "oz" },
            { price: 49, qty: 128, priceUnit: "usd-cents", qtyUnit: "oz" },
          ],
          priceUnit: "$$/fl.oz.",
          image:
            "https://cdn.shopify.com/s/files/1/0424/3475/6772/products/us-liquid_soap-32oz-peppermint-healsoul_340x.jpg?v=1601101114",
          description:
            "Dr Bronner's most popular scent, with a peppermint burst so pure it tingles! Scented with organic peppermint oil to cool skin, clear sinuses and sharpen mind. This Pure-Castile Liquid Soap is concentrated, biodegradable, versatile and effective. Made with organic and certified fair trade ingredients. Organic hemp oil is now sourced in the U.S. following hemp legalization!",
        },
        {
          id: "ls-0002",
          title: "Citrus Castile Soap",
          type: "castile soap",
          form: "liquid",
          brand: "Dr Bronner's",
          price: [
            { price: 60, qty: 32, priceUnit: "usd-cents", qtyUnit: "oz" },
            { price: 55, qty: 48, priceUnit: "usd-cents", qtyUnit: "oz" },
            { price: 64, qty: 64, priceUnit: "usd-cents", qtyUnit: "oz" },
            { price: 49, qty: 128, priceUnit: "usd-cents", qtyUnit: "oz" },
          ],
          priceUnit: "$$/fl.oz.",
          image:
            "https://cdn.shopify.com/s/files/1/0424/3475/6772/products/us-liquid_soap-32oz-citrus-healsoul_340x.jpg?v=1601100962",
          description:
            "Fresh and bright & with an invigorating blend of organic orange, lemon and lime oils! Dr Bronner's Citrus Pure-Castile Liquid Soap is concentrated, biodegradable, versatile and effective. Made with organic and certified fair trade ingredients. Organic hemp oil is now sourced in the U.S. following hemp legalization!",
        },
      ],
    };
  },
  methods: {
    addProduct(_id) {
      /* use if this.selectedProducts is of type Array
      if(!!this.selectedProducts.findIndex(element => element == _id)){
        this.selectedProducts.push(_id);
        this.emitProducts();
      }
      */
     //use if this.selectedProducts is of type Set
      this.selectedProducts.add(_id);
      this.emitProducts();
    },
    removeProduct(_id) {
      /* use if this.selectedProducts is of type Array
      const removeIndex = this.selectedProducts.findIndex(element => element == _id);
      if(removeIndex >= 0){
        this.selectedProducts.splice(removeIndex, 1);
        this.emitProducts();
      }
      */
     // use if this.selectedProducts id of type Set
      const _delete = this.selectedProducts.delete(_id)
      this.emitProducts();
    },
    emitProducts() {
      /* use if this.selectedProducts is of type Array
      this.$nextTick(() => {
      });
      */
      this.$emit("selectedProducts", [...this.selectedProducts]);
    },
  },
};
</script>

<style>
</style>