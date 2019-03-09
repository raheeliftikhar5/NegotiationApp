<template>
  <div class="home-page">
    <h1 class="mb-4">Negotiation App</h1>
    <div class="content-wrap">
      <na-tabs v-model="currentTab">
        <na-tab label="Employer" name="employer" :selected="currentTab === 'employer'"></na-tab>
        <na-tab label="Employee" name="employee" :selected="currentTab === 'employee'"></na-tab>
      </na-tabs>
      <div class="card">
        <div class="card-body">
          <div class="tabs-pane">
            <div v-show="currentTab === 'employer'">
              <na-form key="MaxOfferForm" input-name="Offered Pay" v-model="maxOffer" @submit="onSubmit"></na-form>
            </div>
            <div v-show="currentTab === 'employee'">
              <na-form key="MinExpectedForm" input-name="Expected Pay" v-model="minExpected" @submit="onSubmit"></na-form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <na-modal :show="displayModal" :maxOffer="maxOffer" :minExpected="minExpected" @close="onModalClose"></na-modal>
  </div>
</template>

<script>
import Tab from '../components/Tab';
import Tabs from '../components/Tabs';
import Form from '../components/Form';
import Modal from '../components/Modal';
export default {
  name: 'HomePage',
  data() {
    return {
      currentTab: 'employer',
      maxOffer: null,
      minExpected: null,
      displayModal: false,
    }
  },
  components: {
    'na-tab': Tab,
    'na-tabs': Tabs,
    'na-form': Form,
    'na-modal': Modal,
  },
  methods: {
    onSubmit() {
      if (this.maxOffer && this.minExpected) {
        this.displayModal = true;
      }
    },
    onModalClose() {
      this.displayModal = false;
      window.location.reload();
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  min-height: 100vh;
  padding: 0 20px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content-wrap {
    width: 100%;
    max-width: 600px;
  }

  .card {
    border-color: transparent;
    padding: 10px 0;
  }
}
</style>
