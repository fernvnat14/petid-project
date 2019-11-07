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
        <v-form>
        <v-container py-0>
            <v-layout wrap>
            <v-radio-group v-model="row" row>
                <v-radio label="Lost pet" value="radio-1"></v-radio>
                <v-radio label="Found pet" value="radio-2"></v-radio>
            </v-radio-group>
            <v-flex
                xs12
                md12
            >
                <v-text-field
                label="Title"
                />
            </v-flex>
            <v-flex
                xs12
                md4
            >
                <v-text-field
                label="Name"
                />
            </v-flex>
            <v-flex
                xs12
                md4
            >
                <v-text-field
                label="Phone No."
                />
            </v-flex>
            <v-flex
                xs12
                md4
            >
                <v-text-field
                label="Email"
                />
            </v-flex>
            <v-flex
                xs12
                md12
            >
                <v-file-input
                    :rules="rules"
                    accept="image/png, image/jpeg, image/bmp"
                    prepend-icon="mdi-camera"
                    label="Pet Image"
                ></v-file-input>
            </v-flex>
            <v-flex
                xs12
                md6
            >
                <v-select
                :items="type"
                label="Pet Type"
                ></v-select>
            </v-flex>
            <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    label="Pet Type"
                    disabled/>
                </v-flex>
            <v-flex
                xs12
                md6
            >
                <v-text-field
                label="Pet Breed"
                />
            </v-flex>
            <v-flex
                xs12
                md6
            >
                <v-text-field
                label="Pet Color"
                />
            </v-flex>
            <v-flex
                xs12
                md6
            >
                <v-select
                :items="items"
                label="Pet Gender"
                ></v-select>
            </v-flex>
            <v-flex
                xs12
                md6
            >
                <v-text-field
                label="Pet Size"
                />
            </v-flex>
            <v-flex xs12>
                <v-textarea
                label="Description"
                value=""
                />
            </v-flex>
            <v-flex xs12>
                <v-textarea
                label="Address"
                value=""
                />
            </v-flex>
            <v-flex
                xs12
                md6
            >
                <v-text-field
                label="Province"
                />
            </v-flex>
            <v-flex
                xs12
                md6>
                
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
                        v-model="date"
                        label="Date"
                        prepend-icon="mdi-enent"
                        readonly
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                </v-menu>
                
            </v-flex>
            <!-- <v-flex
                xs12
                md4>
                <v-text-field
                
                label="Postal Code"
                type="number"/>
            </v-flex> -->
            <v-flex
                xs12
                text-xs-right
            >
                <v-btn
                class="mx-0 font-weight-light"
                color="success"
                >
                Post Now!
                </v-btn>
            </v-flex>
            </v-layout>
        </v-container>
        </v-form>
        
      </v-flex>
    </v-layout>
  </v-container> 
        </v-card-text>
      </v-responsive>
    </v-card>
  </div>
</template>