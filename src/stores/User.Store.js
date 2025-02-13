import { create } from "zustand";
import axios from "../utils/axios";
import toast from "react-hot-toast";

export const useUserStore = create((set) => ({
    user: null,
    isLoading: false,
    error: null,

    setUser: (user) => set({ user }),

    signup: async (userData) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post("/user/register", userData);
            set({ user: response.data.user });
            toast.success("Signup successful");
        } catch (error) {
            set({ error: error.response?.data?.message || "Signup failed" });
            toast.error(error.response?.data?.message || "Signup failed");
        } finally {
            set({ isLoading: false });
        }
    },

    login: async (credentials) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post("/user/login", credentials);
            
            
            toast.success(response.data.message)
            set({ user: response.data.user });
        } catch (error) {
            set({ error: error.response?.data?.message || "Login failed" });
        } finally {
            set({ isLoading: false });
        }
    },

    logout: async () => {
        set({ isLoading: true, error: null });
        try {
            await axios.post("/user/logout");
            set({ user: null });
        } catch (error) {
            set({ error: error.response?.data?.message || "Logout failed" });
        } finally {
            set({ isLoading: false });
        }
    },
    profile: async () => {
        set({ isLoading: true, error: null });
        try {
          const response=  await axios.get("/user/profile");
            set({ user: response.data.user });
        } catch (error) {
            set({ error: error.response?.data?.message || "failed to fetch profile" });
        } finally {
            set({ isLoading: false });
        }
    },
}));
