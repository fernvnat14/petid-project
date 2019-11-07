<template>
  <div>
    <v-card>
      <v-responsive :aspect-ratio="16/9">
        <v-card-text>
        <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
        md8
      >
        <v-card flat>
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      right
      color="success"
    >
      <span>Done!</span>
      <v-icon dark>mdi-checkbox-marked-circle</v-icon>
    </v-snackbar>
    <v-form ref="form" @submit.prevent="submit">

      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.First_name"
              :rules="rules.name"
              color="yellow darken-3"
              label="First name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.Last_name"
              :rules="rules.name"
              color="yellow darken-3"
              label="Last name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              v-model="form.Gender"
              :items="Genders"
              :rules="rules.Gender"
              color="yellow darken-3"
              label="Gender"
              required
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-slider
              v-model="form.age"
              :rules="rules.age"
              color="yellow darken-3"
              label="Age"
              hint="Be honest"
              min="1"
              max="100"
              thumb-label
              required
            ></v-slider>
          </v-col>
          <v-col cols="12" sm="6">
            <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
            >
                <template v-slot:activator="{ on }">
                <v-text-field
                    v-model="form.Bd_user"
                    label="Birthday"
                    color="yellow darken-3"
                    prepend-icon="mdi-cake-variant"
                    readonly
                    v-on="on"
                ></v-text-field>
                </template>
                <v-date-picker color="yellow darken-3" v-model="form.Bd_user" @input="menu2 = false"></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12">
              <v-textarea
                v-model="form.Address"
                color="yellow darken-3"
              >
                <template v-slot:label>
                  <div>
                    Address <small>(required)</small>
                  </div>
                </template>
              </v-textarea>
          </v-col>
          <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.Id_card"
                :rules="rules.Id_card"
                color="yellow darken-3"
                label="ID Card Number"
                required
              ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.Contact"
                :rules="rules.Contact"
                prepend-icon="mdi-phone"
                color="yellow darken-3"
                label="Phone Number"
                required
              ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn text @click="resetForm">Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!formIsValid"
          text
          color="primary"
          type="submit"
        >Submit</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
        
      </v-flex>
    </v-layout>
  </v-container> 
        </v-card-text>
      </v-responsive>
    </v-card>
  </div>
</template>

<script>
import firebase from "firebase";
import axios from 'axios'
import Auth from '@/components/Auth.vue'
export default {
    data () {
    const defaultForm = Object.freeze ({
        UserID:'',
        First_name: '',
        Last_name: '',
        Gender: '',
        Bd_user: new Date().toISOString().substr(0, 10),
        Address: '',
        age: null,
        menu2: false,
        Id_card:'',
        Contact:''
    })
      return {
        form: Object.assign({}, defaultForm),
        rules: {
          age: [
              val => val > 10 || `I don't believe you!`,
          ],
          Gender: [val => (val || '').length > 0 || 'This field is required'],
          name: [val => (val || '').length > 0 || 'This field is required'],
          Id_card: [val => (val || '').length > 12 || 'Invalid ID Card Number']
          //Profile_img: [value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!']
        },
        Genders: ['Male','Female'],
        menu2: false,
        snackbar: false,
        defaultForm,
      }
    },

    computed: {
        formIsValid () {
            return (
            this.form.First_name &&
            this.form.Last_name &&
            this.form.Gender &&
            this.form.age &&
            this.form.Bd_user &&
            this.form.Id_card &&
            this.form.Contact 
            )
        }
    },

    methods: {
        resetForm () {
            this.form = Object.assign({}, this.defaultForm)
            this.$refs.form.reset()
        },
        submit() {
            this.snackbar = true
            //this.resetForm()
            const uid = firebase.auth().currentUser.uid;
            console.log(uid)
            console.log(this.form.First_name)
            this.axios.post('https://skilled-array-252503.appspot.com/register/owner', {
                "UserID": uid,
                "First_name": this.form.First_name,
                "Last_name": this.form.Last_name,
                "Gender": this.form.Gender,
                "Bd_user": this.form.Bd_user,
                "Address": this.form.Address,
                "Id_card": this.form.Id_card,
                "Contact": this.form.Contact
            })
            .then(response => {
                this.owner = response.data;
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            });
        },
    }
};
</script>
