<template>
  <div v-bind:class="{card:true, outline: selected}" @click="handleSelect">    
    <div class="card-image">
      <figure class="image is-4by3">
        <div>
          <img :src="image" alt="Placeholder image" />
        </div>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <!-- <div class="media-left">
          <figure class="image is-48x48">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div> -->
        <div class="media-content">
          <p class="title is-4">{{ title }}</p>
          <p class="subtitle is-6">{{ subtitle }}</p>
        </div>
      </div>

      <div class="content">
        <p>{{ description }}</p>
        <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
      </div>

      <b-collapse
        aria-id="contentIdForProduct"
        class=""
        animation="slide"
        :open="false"
      >
        <div
          slot="trigger"
          class=""
          role="button"
          aria-controls="contentIdForProduct"
        >
          <div
            id="price-block"
            class="is-flex is-align-items-flex-end is-justify-content-space-between"
          >
            <div id="price">
              <span>As low as</span>
              <span class="has-text-weight-medium">$</span>
              <span class="is-size-4">
                {{ bestPricePerOz }}
              </span>
              <span>/ fl.oz.</span>
            </div>
            <div id="price-details">
              <span class="has-text-info">detials</span>
            </div>
          </div>
        </div>
        <div class="">
          <b-table :data="detailedPricePerOz">
            <b-table-column field="qty" label="fl.oz." v-slot="props">
              {{ props.row.qty }}
            </b-table-column>
            <b-table-column field="price" label="Price" v-slot="props">
              ${{ props.row.price }}
            </b-table-column>
          </b-table>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: false,
      priceTableColumns: [
        {
          field: "qty",
          label: "fl.oz.",
          centered: true,
        },
        {
          field: "price",
          label: "Price",
          centered: true,
        },
      ],
    };
  },
  props: {
    id: {
      value: String,
      default: null
    },
    title: {
      type: String,
      default: "null",
    },
    subtitle: {
      type: String,
      default: "null",
    },
    description: {
      type: String,
      default: "null",
    },
    image: {
      type: String,
      default: "https://bulma.io/images/placeholders/1280x960.png",
    },
    pricePerOz: {
      type: Array,
    },
  },
  computed: {
    detailedPricePerOz: function () {
      let pricePerOzClone = [...this.pricePerOz];

      pricePerOzClone.map((element) => {
        element.price = element.price / 100;
        return { ...element };
      });
      return [...pricePerOzClone];
    },
    bestPricePerOz: function () {
      let lowPrice = null;
      let lowPriceIndex = null;
      this.detailedPricePerOz.forEach((element) => {
        if (element.price < lowPrice || lowPrice === null) {
          lowPrice = element.price;
          lowPriceIndex = element.index;
        }
      });
      return lowPrice;
    },
  },
  methods: {
    handleSelect() {
      this.selected = !this.selected;
      if(this.selected){
        this.$emit('selected', this.id);
        console.log("selected: ", this.id);
      } else {
        this.$emit('unselected', this.id);
        console.log("unselected: ", this.id);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  height: 100%;
  width: auto !important;
  margin-left: auto;
  margin-right: auto;
}
.outline{
  border-style: solid;
  border-width: 1px;
  border-color:	hsl(171, 100%, 41%);
}
</style>