<script lang="ts" setup>

import { ref, onMounted } from "vue";
// import { supabase } from "../supabaseClient";

// define reactive variables
const user = ref(null);
const role = ref(null);

// fetch user data on component mount
onMounted(async () => {
    // get user from supabase auth
    const { data: { user: currentUser } } = await supabase.auth.getUser();
    user.value = currentUser;
    role.value = currentUser?.user_metadata?.role ?? "customer";
});

// logout function
async function handleLogout() {
    await supabase.auth.signOut();
    window.location.reload();
}

</script>


<template>

<header class="w-full flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow">

    <router-link to="/" class="text-2xl font-bold tracking-wide">
        Amazing Bargain Central
    </router-link>

    <!-- Navigation links -->
    <nav class="flex gap-6">
        
        <router-link to="/" class="hover:text-gray-300">Home</router-link>
        <router-link to="/products" class="hover:text-gray-300">Products</router-link>
        <router-link v-if="role === 'admin'" to="/admin" class="hover:text-gray-300">Admin</router-link>
        <router-link v-if="!user" to="/login" class="hover:text-gray-300">Login</router-link>
        <button v-if="user" @click="handleLogout" class="hover:text-gray-300">Logout</button>

    </nav>

    <!-- authenticated user links -->
    <div class="flex items-center gap-6">
        <div v-if="role === 'seller'">
            <div class="flex gap-4">
                <router-link to="/seller/dashboard" class="hover:text-gray-300">Seller Dashboard</router-link>
                <router-link to="/seller/products" class="hover:text-gray-300">My Products</router-link>
            </div>
        </div>
        <div v-else>
            <router-link to="/cart" class="hover:text-gray-300">Cart</router-link>
        </div>
    </div>

    <!-- admin specific links -->
    <div v-if="role === 'admin'" class="flex gap-4">
        <button class="hover:text-gray-300">User Management</button>
        <button class="hover:text-gray-300">Site Settings</button>
    </div>




</header>


</template>