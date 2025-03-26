import { create } from "zustand";

// Zustand store for invoice management
const useInvoiceStore = create((set) => ({
  ownerData: getOwnerData(),
  history: getHistory(),

  // Set owner data and persist to localStorage
  setOwnerData: (data) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("invoicer-owner-data", JSON.stringify(data));
    }
    set({ ownerData: data });
  },

  // Get owner data from localStorage
  getOwnerData: () => getOwnerData(),

  // Add invoice to history and persist
  addToHistory: (data) => {
    if (typeof window !== "undefined") {
      let storedData = getHistory() || [];
      storedData.push(data);
      localStorage.setItem("invoicer-history", JSON.stringify(storedData));
    }
    set((state) => ({ history: [...state.history, data] }));
  },

  // Reset history (clear from localStorage)
  resetHistory: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("invoicer-history");
    }
    set({ history: [] });
  },

  // Retrieve history from localStorage
  getHistory: () => getHistory(),
}));

// Helper Functions for LocalStorage
function getOwnerData() {
  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem("invoicer-owner-data");
    return storedData ? JSON.parse(storedData) : null;
  }
  return null;
}

function getHistory() {
  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem("invoicer-history");
    return storedData ? JSON.parse(storedData) : [];
  }
  return [];
}

export default useInvoiceStore;