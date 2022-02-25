<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title class="ion-text-center">Creation and usage of list item component</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <section>
        <ion-segment @ionChange="segmentChanged($event)" v-model="segment">
          <ion-segment-button value="locations" layout="icon-start">
            <ion-icon :icon="locationOutline" />
            <ion-label>Locations</ion-label>
          </ion-segment-button>
          <ion-segment-button value="purchase-orders" layout="icon-start">
            <ion-icon :icon="calendarOutline" />
            <ion-label>Purchase orders</ion-label>
          </ion-segment-button>
        </ion-segment>

        <div v-if="segment == 'locations'">
          <div class="list-item">
            <ion-item lines="none">
              <ion-icon :icon="globeOutline" slot="start" />
              <ion-label>30 locations</ion-label>
            </ion-item>

            <ion-label class="tablet">
              600
              <p>orders</p>
            </ion-label>

            <ion-label>
              400
              <p>purchase order ATP</p>
            </ion-label>

            <ion-label class="tablet">
              400
              <p>QOH</p>
            </ion-label>

            <ion-label>
              400
              <p>safety stock</p>
            </ion-label>

            <div></div>

            <ion-checkbox />

            <ion-button fill="clear" color="medium">
              <ion-icon slot="icon-only" :icon="ellipsisVerticalOutline" />
            </ion-button>
          </div>

          <hr />

          <div class="list-item">
            <ion-item lines="none">
              <ion-icon :icon="storefrontOutline" slot="start" />
              <ion-label>
                <p>Retail</p>
                Store 1 name
                <p>Pickup and shipping</p>
              </ion-label>
            </ion-item>

            <ion-label class="tablet">
              600
              <p>orders</p>
            </ion-label>

            <ion-label>
              400
              <p>purchase order ATP</p>
            </ion-label>

            <ion-label class="tablet">
              400
              <p>QOH</p>
            </ion-label>

            <ion-label>
              400
              <p>safety stock</p>
            </ion-label>

            <ion-label class="tablet">
              400
              <p>ATP</p>
            </ion-label>

            <ion-checkbox />

            <ion-button fill="clear" color="medium">
              <ion-icon slot="icon-only" :icon="ellipsisVerticalOutline" />
            </ion-button>
          </div>

          <hr />

          <div class="list-item">
            <ion-item lines="none">
              <ion-icon :icon="businessOutline" slot="start" />
              <ion-label>
                <p>Warehouse</p>
                Warehouse 1 name
                <p>Shipping</p>
              </ion-label>
            </ion-item>

            <ion-label>
              600
              <p>orders</p>
            </ion-label>

            <ion-label>
              400
              <p>purchase order ATP</p>
            </ion-label>

            <ion-label>
              400
              <p>QOH</p>
            </ion-label>

            <ion-label>
              400
              <p>safety stock</p>
            </ion-label>

            <ion-label>
              400
              <p>ATP</p>
            </ion-label>

            <ion-checkbox />

            <ion-button fill="clear" color="medium">
              <ion-icon slot="icon-only" :icon="ellipsisVerticalOutline" />
            </ion-button>
          </div>

          <hr />
        </div>

        <div v-if="segment == 'purchase-orders'">
          <div class="list-item purchase-order">
            <ion-item lines="none">
              <ion-label>PO ID</ion-label>
            </ion-item>

            <ion-label>
              600
              <p>ordered</p>
            </ion-label>

            <ion-label>
              400
              <p>ATP</p>
            </ion-label>

            <ion-label>
              400
              <p>received</p>
            </ion-label>

            <ion-label>
              6th Dec 2021
              <p>arrival date</p>
            </ion-label>

            <ion-checkbox />

            <ion-button fill="clear" color="medium">
              <ion-icon slot="icon-only" :icon="ellipsisVerticalOutline" />
            </ion-button>
          </div>

          <hr />
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButton,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import {
  calendarOutline,
  checkmarkOutline,
  locationOutline,
  ellipsisVerticalOutline,
  globeOutline,
  storefrontOutline,
  businessOutline,
} from "ionicons/icons";

export default defineComponent({
  name: "Demo",
  components: {
    IonButton,
    IonCheckbox,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonPage,
    IonSegment,
    IonSegmentButton,
    IonTitle,
    IonToolbar,
  },
  methods: {
    segmentChanged(ev: CustomEvent) {
      this.segment = ev.detail.value;
    },
  },
  setup() {
    const segment = ref("locations");

    return {
      calendarOutline,
      checkmarkOutline,
      locationOutline,
      ellipsisVerticalOutline,
      globeOutline,
      storefrontOutline,
      businessOutline,
      segment,
    };
  },
});
</script>

<style scoped>
.list-item {
  --columns-mobile: 2;
  --columns-tablet: 5;
  --columns-desktop: 8;
  --col-calc: var(--columns-mobile);
  --implicit-columns: calc(var(--col-calc) - 1);
  display: grid;
  grid-template-columns: repeat(var(--implicit-columns), 1fr) max-content;
  justify-items: center;
  align-items: center;
}

.list-item > * {
  display: none;
}

.list-item > *:first-child {
  display: unset;
  justify-self: start;
}

.list-item > *:last-child {
  display: unset;
  justify-self: end;
}

.list-item > ion-label {
  text-align: center;
}

.purchase-order {
  --columns-desktop: 7;
}

@media (min-width: 700px) {
  .list-item {
    --col-calc: var(--columns-tablet);
  }
  .tablet {
    display: unset;
  }
}
@media (min-width: 991px) {
  .list-item {
    --col-calc: var(--columns-desktop);
  }

  .list-item > * {
    display: unset;
  }
}
</style>
