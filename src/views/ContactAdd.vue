<template>
    <ContactForm
    :contact="contact"
    @submit:contact="createContact"
    ></ContactForm>
    <p>{{message}}</p>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
import ContactService from "../services/contact.service";
export default {
    components: {
        ContactForm,
    },
    data() {
        return {
            contact: {
                _id: "",
                name: "",
                email: "",
                address: "",
                phone: "",
                favorite: false
            },
            message: ""
        }
    },
    methods: {
        async createContact(data) {
            try {
                this.contact = await ContactService.create(data);
                this.message = 'Contact đã được tạo thành công !'
            }catch (err) {
                console.log(err);
            }
        }
    },
}
</script>
